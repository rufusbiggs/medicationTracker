import React from 'react'
import styles from './page.module.css'

const newPrescription = () => {
  return (
    <div>
        <h1>New Prescription</h1>
        <form className={styles.formContainer}>
            <div className={styles.inputContainer}>
                <label className={styles.label} >Name:</label>
                <input className={styles.input} placeholder="name"></input>
            </div>
            <div className={styles.inputContainer}>
                <label className={styles.label} >Dose:</label>
                <input className={styles.input} placeholder="mg per pill"></input>
            </div>
            <div className={styles.inputContainer}>
                <label className={styles.label} >Pills Per Day:</label>
                <input className={styles.input} placeholder="number per day"></input>
            </div>
            <div className={styles.inputContainer}>
                <label className={styles.label}>Stock:</label>
                <input className={styles.input} placeholder="total number of pills"></input>
            </div>
        </form>
        <div className={styles.buttonContainer}>
            <button type="submit" className={styles.submit}>Submit</button>
            <button className={styles.cancel}>Cancel</button>
        </div>
    </div>
  )
}

export default newPrescription