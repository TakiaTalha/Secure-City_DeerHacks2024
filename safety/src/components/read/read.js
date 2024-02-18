// Read.js or wherever your component is defined
import React, { useState, useEffect } from 'react';
import styles from './Read.module.css'; // Make sure to import the CSS module

export default function Read() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    async function pullJson() {
      try {
        const response = await fetch('/datasets.json');
        const data = await response.json();
        const caseEntries = Object.entries(data).map(([caseNumber, caseDetails]) => {
          return (
            <div key={caseNumber} className={styles.caseBox}>
              <h2 className={styles.caseTitle}>{caseNumber}</h2>
              <p className={styles.caseLocation}>{caseDetails['Location']}</p>
              <p className={styles.caseEvent}>{caseDetails['Event']}</p>
            </div>
          );
        });
        setCases(caseEntries);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    pullJson();
  }, []);

  return <div className={styles.caseContainer}>{cases}</div>;
}

