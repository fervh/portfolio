import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  text: {
    marginBottom: 5,
  },
});

export default function SimpleResumePDF({ data }: { data: any }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.text}>{data.role}</Text>
        <Text style={styles.text}>{data.email}</Text>
        <Text style={styles.text}>{data.location}</Text>
        
        <Text style={{ marginTop: 20, fontSize: 16, fontWeight: 'bold' }}>
          Summary
        </Text>
        <Text style={styles.text}>{data.summary}</Text>
        
        <Text style={{ marginTop: 20, fontSize: 16, fontWeight: 'bold' }}>
          Experience
        </Text>
        {data.experience.map((exp: any, index: number) => (
          <View key={index} style={{ marginTop: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>{exp.role}</Text>
            <Text>{exp.company} - {exp.dates}</Text>
          </View>
        ))}
      </Page>
    </Document>
  );
}
