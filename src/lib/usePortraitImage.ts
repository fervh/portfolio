"use client";

import { useState, useEffect } from 'react';

export function usePortraitImage(): string | null {
  const [imageData, setImageData] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the image and convert to base64
    fetch('/images/portrait.jpeg')
      .then(response => response.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageData(reader.result as string);
        };
        reader.readAsDataURL(blob);
      })
      .catch(error => {
        console.error('Error loading portrait image:', error);
      });
  }, []);

  return imageData;
}
