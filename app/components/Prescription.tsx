import React from 'react'
import styles from './prescription.module.css'
import AddPills from './AddPills'
import { getCurrentStock, runsOut } from '../../services/functions'

const PrescriptionCard = ({ drug }) => {

    const { name, dose, pillsPerDay, addedPills, initialStock, startDate, id } = drug;

    const currentStock = getCurrentStock(startDate, pillsPerDay, addedPills, initialStock);

  return (

    <div className={styles.prescriptionContainer}>
        <div className={styles.topRow}>
            <h2 className={styles.drugName}>{name} {dose}mg</h2>
            <p className={styles.dailyDose}>{pillsPerDay} pill{(pillsPerDay > 1) ? 's' : ''} per day</p>
        </div>
        <div className={styles.bottomRow}>
            <div className={styles.bottomLeft}>
                <p className={styles.runsOut}>Runs out: {runsOut(currentStock, pillsPerDay)}</p>
                <p className={styles.total}>({currentStock} pill{(currentStock > 1) ? 's' : ''})</p> 
            </div>
            <div>
                <AddPills id={id} initialStock={initialStock} addedPills={addedPills}/>
            </div>
        </div>
    </div>
  )
}

export default PrescriptionCard