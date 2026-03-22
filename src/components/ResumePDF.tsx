import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
  Image,
  Svg,
  Path,
  Circle,
  Rect,
} from '@react-pdf/renderer';

// SVG Icons for PDF (from svgrepo.com)
const EmailIcon = () => (
  <Svg width="9" height="9" viewBox="0 0 24 24" style={{ marginTop: -5 }}>
    <Path
      d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
      stroke="#1e3a8a"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <Rect
      x="3"
      y="5"
      width="18"
      height="14"
      rx="2"
      stroke="#1e3a8a"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
  </Svg>
);

const LinkedInIcon = () => (
  <Svg width="9" height="9" viewBox="0 0 382 382" style={{ marginTop: -5 }}>
    <Path
      d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472L341.91,330.654L341.91,330.654z"
      fill="#1e3a8a"
    />
  </Svg>
);

const GithubIcon = () => (
  <Svg width="9" height="9" viewBox="0 0 20 20" style={{ marginTop: -5 }}>
    <Path
      d="M10,0 C15.523,0 20,4.59 20,10.253 C20,14.782 17.138,18.624 13.167,19.981 C12.66,20.082 12.48,19.762 12.48,19.489 C12.48,19.151 12.492,18.047 12.492,16.675 C12.492,15.719 12.172,15.095 11.813,14.777 C14.04,14.523 16.38,13.656 16.38,9.718 C16.38,8.598 15.992,7.684 15.35,6.966 C15.454,6.707 15.797,5.664 15.252,4.252 C15.252,4.252 14.414,3.977 12.505,5.303 C11.706,5.076 10.85,4.962 10,4.958 C9.15,4.962 8.295,5.076 7.497,5.303 C5.586,3.977 4.746,4.252 4.746,4.252 C4.203,5.664 4.546,6.707 4.649,6.966 C4.01,7.684 3.619,8.598 3.619,9.718 C3.619,13.646 5.954,14.526 8.175,14.785 C7.889,15.041 7.63,15.493 7.54,16.156 C6.97,16.418 5.522,16.871 4.63,15.304 C4.63,15.304 4.101,14.319 3.097,14.247 C3.097,14.247 2.122,14.234 3.029,14.87 C3.029,14.87 3.684,15.185 4.139,16.37 C4.139,16.37 4.726,18.2 7.508,17.58 C7.513,18.437 7.522,19.245 7.522,19.489 C7.522,19.76 7.338,20.077 6.839,19.982 C2.865,18.627 0,14.783 0,10.253 C0,4.59 4.478,0 10,0"
      fill="#1e3a8a"
      transform="translate(-84, -7399) translate(56, 160) translate(28, 7239)"
    />
  </Svg>
);

const GlobeIcon = () => (
  <Svg width="9" height="9" viewBox="0 0 24 24" style={{ marginTop: -5 }}>
    <Path
      d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
      stroke="#1e3a8a"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <Path
      d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
      stroke="#1e3a8a"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </Svg>
);

const MapPinIcon = () => (
  <Svg width="9" height="9" viewBox="0 0 24 24" style={{ marginTop: -5 }}>
    <Path
      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
      stroke="#1e3a8a"
      strokeWidth="2"
      fill="none"
    />
    <Circle
      cx="12"
      cy="10"
      r="3"
      stroke="#1e3a8a"
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

// TypeScript interface
export interface CVData {
  name: string;
  role: string;
  headline: string;
  email: string;
  linkedin: string;
  github: string;
  website: string;
  location: string;
  summary: string;
  impactHighlights: string[];
  leadershipAreas: string[];
  autonomyExpertise: string[];
  systemsReliability: string[];
  experience: Array<{
    role: string;
    company: string;
    dates: string;
    location: string;
    bullets: string[];
    impact: string;
  }>;
  projects: Array<{
    name: string;
    details: string;
    stack: string;
  }>;
  education: Array<{
    degree: string;
    school: string;
    year: string;
    details?: string;
  }>;
  skillGroups: Array<{
    title: string;
    values: string;
  }>;
  certificationGroups: Array<{
    title: string;
    items: string[];
  }>;
  languages: string;
}

// Styles
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    paddingTop: 36,
    paddingBottom: 36,
    paddingHorizontal: 47,
    backgroundColor: '#ffffff',
    color: '#1a1a1a',
    lineHeight: 1.5,
  },
  
  // Header Section
  header: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
    paddingBottom: 16,
    borderBottom: '3pt solid #1e3a8a',
    alignItems: 'center',
  },
  portrait: {
    width: 80,
    height: 80,
    borderRadius: 40,
    objectFit: 'cover',
  },
  headerInfo: {
    flex: 1,
  },
  name: {
    fontSize: 26,
    fontWeight: 700,
    marginBottom: 18,
    color: '#1e3a8a',
  },
  role: {
    fontSize: 11,
    fontWeight: 600,
    color: '#1e3a8a',
    marginBottom: 8,
  },
  headline: {
    fontSize: 8.5,
    color: '#666',
    lineHeight: 1.3,
  },
  
  // Contact Bar
  contactBar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 18,
    paddingBottom: 12,
    borderBottom: '1pt solid #e0e0e0',
    alignItems: 'center',
  },
  contactItem: {
    fontSize: 8,
    color: '#666',
    textDecoration: 'none',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  contactLink: {
    fontSize: 8,
    color: '#1e3a8a',
    textDecoration: 'none',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  contactDivider: {
    color: '#ddd',
    fontSize: 8,
  },
  
  // Section
  section: {
    marginBottom: 16,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: 700,
    color: '#1e3a8a',
    marginBottom: 8,
    paddingBottom: 4,
    borderBottom: '2pt solid #1e3a8a',
  },
  
  // Summary
  summaryText: {
    fontSize: 10,
    lineHeight: 1.5,
    color: '#1a1a1a',
  },
  
  // Bullet Lists
  bulletList: {
    gap: 5,
  },
  bulletItem: {
    flexDirection: 'row',
    gap: 8,
  },
  bullet: {
    fontSize: 10,
    color: '#1e3a8a',
    marginTop: 1,
  },
  bulletText: {
    flex: 1,
    fontSize: 10,
    lineHeight: 1.4,
    color: '#1a1a1a',
  },
  
  // Two Column Layout
  twoColumn: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 16,
  },
  column: {
    flex: 1,
  },
  
  // Experience Items
  experienceItem: {
    marginBottom: 12,
    paddingBottom: 12,
    borderBottom: '0.5pt solid #e0e0e0',
  },
  experienceLastItem: {
    marginBottom: 12,
    paddingBottom: 0,
    borderBottom: 'none',
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 3,
  },
  experienceRole: {
    fontSize: 12,
    fontWeight: 700,
    color: '#1a1a1a',
    flex: 1,
  },
  experienceMeta: {
    fontSize: 8,
    color: '#666',
    textAlign: 'right',
  },
  experienceCompany: {
    fontSize: 10,
    fontWeight: 600,
    color: '#444',
    marginBottom: 6,
  },
  experienceBullets: {
    gap: 4,
    marginBottom: 6,
  },
  experienceBullet: {
    flexDirection: 'row',
    gap: 6,
  },
  experienceBulletText: {
    flex: 1,
    fontSize: 9,
    lineHeight: 1.4,
    color: '#1a1a1a',
  },
  outcomeLabel: {
    fontSize: 9,
    fontWeight: 600,
    color: '#444',
  },
  outcomeText: {
    fontSize: 9,
    color: '#666',
    fontWeight: 400,
  },
  
  // Projects
  projectItem: {
    marginBottom: 10,
  },
  projectName: {
    fontSize: 11,
    fontWeight: 700,
    color: '#1a1a1a',
    marginBottom: 3,
  },
  projectDetails: {
    fontSize: 9,
    lineHeight: 1.4,
    color: '#1a1a1a',
    marginBottom: 3,
  },
  projectStack: {
    fontSize: 8,
    color: '#666',
  },
  stackLabel: {
    fontWeight: 600,
    color: '#444',
  },
  
  // Education
  educationItem: {
    marginBottom: 10,
  },
  educationDegree: {
    fontSize: 11,
    fontWeight: 700,
    color: '#1a1a1a',
    marginBottom: 2,
  },
  educationMeta: {
    fontSize: 9,
    color: '#666',
    marginBottom: 3,
  },
  educationDetails: {
    fontSize: 9,
    color: '#1a1a1a',
    lineHeight: 1.4,
  },
  
  // Skills
  skillItem: {
    marginBottom: 8,
  },
  skillTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: '#1a1a1a',
    marginBottom: 2,
  },
  skillValues: {
    fontSize: 9,
    color: '#1a1a1a',
    lineHeight: 1.4,
  },
  
  // Certifications
  certificationItem: {
    marginBottom: 8,
  },
  certificationTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: '#1a1a1a',
    marginBottom: 2,
  },
  certificationList: {
    fontSize: 9,
    color: '#1a1a1a',
    lineHeight: 1.4,
  },
  
  // Languages
  languagesText: {
    fontSize: 9,
    color: '#1a1a1a',
    marginBottom: 10,
  },
});

const ResumePDF: React.FC<{ data: CVData; portraitImage?: string }> = ({ data, portraitImage }) => {
  const cvData = data;
  
  return (
    <Document
      title={`${cvData.name} - CV`}
      author={cvData.name}
      subject="Curriculum Vitae"
      keywords="robotics, autonomy, perception, embedded systems, UAV, software engineering"
    >
      {/* Page 1: Header, Summary, Core Highlights, Leadership & Autonomy */}
      <Page size="A4" style={styles.page}>
        {/* Header with Portrait */}
        <View style={styles.header} wrap={false}>
          {portraitImage && (
            <Image src={portraitImage} style={styles.portrait} />
          )}
          <View style={styles.headerInfo}>
            <Text style={styles.name}>{cvData.name}</Text>
            <Text style={styles.role}>{cvData.role}</Text>
            <Text style={styles.headline}>{cvData.headline}</Text>
          </View>
        </View>

        {/* Contact Bar */}
        <View style={styles.contactBar} wrap={false}>
          <View style={styles.contactItem}>
            <EmailIcon />
            <Link src={`mailto:${cvData.email}`} style={styles.contactLink}>
              {cvData.email}
            </Link>
          </View>
          <Text style={styles.contactDivider}>|</Text>
          <View style={styles.contactItem}>
            <LinkedInIcon />
            <Link src={`https://${cvData.linkedin}`} style={styles.contactLink}>
              {cvData.linkedin.replace('linkedin.com/in/', '')}
            </Link>
          </View>
          <Text style={styles.contactDivider}>|</Text>
          <View style={styles.contactItem}>
            <GithubIcon />
            <Link src={`https://${cvData.github}`} style={styles.contactLink}>
              {cvData.github.replace('github.com/', '')}
            </Link>
          </View>
          <Text style={styles.contactDivider}>|</Text>
          <View style={styles.contactItem}>
            <GlobeIcon />
            <Link src={`https://${cvData.website}`} style={styles.contactLink}>
              {cvData.website}
            </Link>
          </View>
          <Text style={styles.contactDivider}>|</Text>
          <View style={styles.contactItem}>
            <MapPinIcon />
            <Text>{cvData.location}</Text>
          </View>
        </View>

        {/* Executive Summary */}
        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionHeader}>Executive Summary</Text>
          <Text style={styles.summaryText}>{cvData.summary}</Text>
        </View>

        {/* Core Impact Highlights */}
        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionHeader}>Core Impact Highlights</Text>
          <View style={styles.bulletList}>
            {cvData.impactHighlights.map((item, index) => (
              <View key={index} style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Two Column: Leadership & Autonomy Expertise */}
        <View style={styles.twoColumn} wrap={false}>
          <View style={styles.column}>
            <Text style={styles.sectionHeader}>Technical Leadership</Text>
            <View style={styles.bulletList}>
              {cvData.leadershipAreas.map((item, index) => (
                <View key={index} style={styles.bulletItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>{item}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.column}>
            <Text style={styles.sectionHeader}>Autonomy & Perception</Text>
            <View style={styles.bulletList}>
              {cvData.autonomyExpertise.map((item, index) => (
                <View key={index} style={styles.bulletItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>{item}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Systems, Validation, and Reliability */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Systems, Validation, and Reliability</Text>
          <View style={styles.bulletList}>
            {cvData.systemsReliability.map((item, index) => (
              <View key={index} style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>

      {/* Page 2: Professional Experience */}
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Professional Experience</Text>
          {cvData.experience.map((exp, index) => (
            <View
              key={index}
              style={index === cvData.experience.length - 1 ? styles.experienceLastItem : styles.experienceItem}
              wrap={false}
            >
              <View style={styles.experienceHeader}>
                <Text style={styles.experienceRole}>{exp.role}</Text>
                <Text style={styles.experienceMeta}>
                  {exp.dates} • {exp.location}
                </Text>
              </View>
              <Text style={styles.experienceCompany}>{exp.company}</Text>
              <View style={styles.experienceBullets}>
                {exp.bullets.map((bullet, bIndex) => (
                  <View key={bIndex} style={styles.experienceBullet}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.experienceBulletText}>{bullet}</Text>
                  </View>
                ))}
              </View>
              <Text>
                <Text style={styles.outcomeLabel}>Outcome: </Text>
                <Text style={styles.outcomeText}>{exp.impact}</Text>
              </Text>
            </View>
          ))}
        </View>

        {/* Selected Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Selected Projects</Text>
          {cvData.projects.map((project, index) => (
            <View key={index} style={styles.projectItem} wrap={false}>
              <Text style={styles.projectName}>{project.name}</Text>
              <Text style={styles.projectDetails}>{project.details}</Text>
              <Text style={styles.projectStack}>
                <Text style={styles.stackLabel}>Stack: </Text>
                {project.stack}
              </Text>
            </View>
          ))}
        </View>
      </Page>

      {/* Page 3: Education, Skills, Certifications */}
      <Page size="A4" style={styles.page}>
        {/* Two Column: Education & Skills */}
        <View style={styles.twoColumn}>
          <View style={styles.column}>
            <Text style={styles.sectionHeader}>Education</Text>
            {cvData.education.map((edu, index) => (
              <View key={index} style={styles.educationItem} wrap={false}>
                <Text style={styles.educationDegree}>{edu.degree}</Text>
                <Text style={styles.educationMeta}>
                  {edu.school} • {edu.year}
                </Text>
                {edu.details && (
                  <Text style={styles.educationDetails}>{edu.details}</Text>
                )}
              </View>
            ))}
          </View>

          <View style={styles.column}>
            <Text style={styles.sectionHeader}>Advanced Skill Set</Text>
            {cvData.skillGroups.map((group, index) => (
              <View key={index} style={styles.skillItem} wrap={false}>
                <Text style={styles.skillTitle}>{group.title}</Text>
                <Text style={styles.skillValues}>{group.values}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Languages and Certifications */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Languages and Certifications</Text>
          <Text style={styles.languagesText}>{cvData.languages}</Text>
          {cvData.certificationGroups.map((group, index) => (
            <View key={index} style={styles.certificationItem} wrap={false}>
              <Text style={styles.certificationTitle}>{group.title}</Text>
              <Text style={styles.certificationList}>{group.items.join(' • ')}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default ResumePDF;
