import React from 'react'
import styles from './report.module.css'

export default function report() {
  return (
    <div>

      <div className={styles.first}>
      <div className={styles.container}>
        <h2 className={styles.title}>Report a Crime</h2>
        <form>
          <div className={styles.inputGroup}>
            <input type="text" placeholder="Title" className={`${styles.input} ${styles.inputGroupHalf}`} />
            <input type="text" placeholder="Time" className={`${styles.input} ${styles.inputGroupHalf}`} />
          </div>
          <div className={styles.inputGroup}>
            <input type="text" placeholder="City" className={`${styles.input} ${styles.inputGroupHalf}`} />
            <input type="text" placeholder="Street" className={`${styles.input} ${styles.inputGroupHalf}`} />
          </div>
          <div className={styles.inputGroup}>
            <input type="text" placeholder="Type" className={`${styles.input} ${styles.inputGroupHalf}`} />
            <input type="text" placeholder="Level" className={`${styles.input} ${styles.inputGroupHalf}`} />
          </div>
          <textarea placeholder="Description" className={styles.textarea}></textarea>
          <div className={styles.checkboxGroup}>
            {/* Implement checkboxes for witness and victim */}
          </div>
          {/* Implement image upload functionality */}
          <button type="submit" className={styles.button}>Submit</button>
        </form>
      </div>
      </div>
    </div>
  )
}
