import React from 'react'
import styles from './prescription.module.css'
import AddPills from './AddPills'


const PrescriptionCard = ({ drug }) => {

    const { name, dose, pillsPerDay, stock } = drug;

    const calculateFutureDate = (daysToAdd: number): string => {
        const today = new Date();
        const futureDate = new Date(today);
        futureDate.setDate(today.getDate() + daysToAdd);
        const formattedDate = futureDate.toDateString();
        return formattedDate;
      }

    const runsOut = (numPills: number, numPerDay: number) => {
        const daysLeft = numPills / numPerDay;
        return calculateFutureDate(daysLeft);
    }

  return (
    <div className={styles.prescriptionContainer}>
        <div className={styles.topRow}>
            <h2 className={styles.drugName}>{name} {dose}mg</h2>
            <p className={styles.dailyDose}>{pillsPerDay} pill{(pillsPerDay > 1) ? 's' : ''} per day</p>
        </div>
        <div className={styles.bottomRow}>
            <div className={styles.bottomLeft}>
                <p className={styles.runsOut}>Runs out: {runsOut(stock, pillsPerDay)}</p>
                <p className={styles.total}>({stock} pill{(stock > 1) ? 's' : ''})</p> 
            </div>
            <div>
                <AddPills />
            </div>
        </div>
        
    </div>
  )
}

export default PrescriptionCard