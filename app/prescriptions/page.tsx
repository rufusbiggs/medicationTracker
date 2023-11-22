'use client';
import { data } from '../../services/data'
import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const editPrescriptions = () => {

  const removePrescription = () => {
    // set prescribed to false in database
  }


  return (
    <>
      <h1>Prescriptions</h1>
      {data.map((drug, index) => {return (
        <div key={`prescription${index}`} className={styles.prescriptionContainer}>
          <div>
            <h2 className={styles.drugName}>{drug.name} {drug.dose}mg</h2>
            <p>{drug.pillsPerDay} pill{(drug.pillsPerDay > 1) ? 's' : ''} per day</p>
          </div>
          <button className={styles.remove} onClick={removePrescription}>Remove</button>
        </div>
        )}
      )}
      <Link className={styles.newLink} href='./prescriptions/new'>New Prescription</Link>
    </>
  )
}

export default editPrescriptions