'use client';

import React, { useRef, useId, useEffect, CSSProperties } from 'react';

// Type definitions
interface AnimationConfig {
    preview?: boolean;
    scale: number;
    speed: number;
}

interface NoiseConfig {
    opacity: number;
    scale: number;
}

interface EtherealShadowProps {
    sizing?: 'fill' | 'stretch';
    color?: string;
    animation?: AnimationConfig;
    noise?: NoiseConfig;
    style?: CSSProperties;
    className?: string;
}

function mapRange(
    value: number,
    fromLow: number,
    fromHigh: number,
    toLow: number,
    toHigh: number
): number {
    if (fromLow === fromHigh) {
        return toLow;
    }
    const percentage = (value - fromLow) / (fromHigh - fromLow);
    return toLow + percentage * (toHigh - toLow);
}

const useInstanceId = (): string => {
    const id = useId();
    const cleanId = id.replace(/:/g, "");
    const instanceId = `shadowoverlay-${cleanId}`;
    return instanceId;
};

export function EtherealShadow({
    sizing = 'fill',
    color = 'rgba(42, 156, 117, 0.3)',
    animation,
    noise,
    style,
    className
}: EtherealShadowProps) {
    const id = useInstanceId();
    const animationEnabled = animation && animation.scale > 0;
    const turbulenceRef = useRef<SVGFETurbulenceElement>(null);

    const displacementScale = animation ? mapRange(animation.scale, 1, 100, 50, 150) : 0;
    const animationDuration = animation ? mapRange(animation.speed, 1, 100, 100, 10) : 50;

    useEffect(() => {
        if (turbulenceRef.current && animationEnabled) {
            let frame = 0;
            let animationId: number;
            
            const animate = () => {
                if (turbulenceRef.current) {
                    frame += 0.002 * (animation.speed / 50); // Slower than original
                    turbulenceRef.current.setAttribute('baseFrequency', 
                        `${0.002 + Math.sin(frame) * 0.0008} ${0.003 + Math.cos(frame * 0.8) * 0.001}`
                    );
                }
                animationId = requestAnimationFrame(animate);
            };
            
            animate();
            
            return () => {
                if (animationId) {
                    cancelAnimationFrame(animationId);
                }
            };
        }
    }, [animationEnabled, animation]);

    return (
        <div
            className={className}
            style={{
                overflow: "hidden",
                position: "fixed",
                inset: 0,
                width: "100vw",
                height: "100vh",
                pointerEvents: "none",
                zIndex: 0,
                ...style
            }}
        >
            <div
                style={{
                    position: "absolute",
                    inset: -displacementScale,
                    filter: animationEnabled ? `url(#${id})` : "none",
                    width: `calc(100% + ${displacementScale * 2}px)`,
                    height: `calc(100% + ${displacementScale * 2}px)`
                }}
            >
                {animationEnabled && (
                    <svg style={{ position: "absolute", width: 0, height: 0 }}>
                        <defs>
                            <filter id={id} x="-50%" y="-50%" width="200%" height="200%">
                                <feTurbulence
                                    ref={turbulenceRef}
                                    result="turbulence"
                                    numOctaves="2"
                                    baseFrequency="0.002 0.003"
                                    seed="0"
                                    type="fractalNoise"
                                />
                                <feDisplacementMap
                                    in="SourceGraphic"
                                    in2="turbulence"
                                    scale={displacementScale}
                                    xChannelSelector="R"
                                    yChannelSelector="G"
                                />
                            </filter>
                        </defs>
                    </svg>
                )}
                <div
                    style={{
                        backgroundColor: color,
                        maskImage: `url('/images/ethereal-mask.png')`,
                        maskSize: sizing === "stretch" ? "100% 100%" : "cover",
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        width: "100%",
                        height: "100%"
                    }}
                />
            </div>

            {noise && noise.opacity > 0 && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url('/images/noise-texture.png')`,
                        backgroundSize: noise.scale * 200,
                        backgroundRepeat: "repeat",
                        opacity: noise.opacity / 2,
                        mixBlendMode: "overlay",
                        filter: "invert(0.2) brightness(1)"
                    }}
                />
            )}
        </div>
    );
}
