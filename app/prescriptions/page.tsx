'use client';
// import { data } from '../../services/data'
import { getPrescriptions } from '../firebase/API'
import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

interface Prescription {
  id: string,
  name: string,
  dose: number,
  pillsPerDay: number,
  startDate: Date,
  initialStock: number
}

const editPrescriptions = async () => {

  const removePrescription = () => {
    // set prescribed to false in database
  }

  const data = await getPrescriptions();
  console.log(data);


  return (
    <>
      <nav>
        <Link className={styles.homeLink} href='../'>&larr; Home</Link>
      </nav>
      <h1>Prescriptions</h1>
      {data.map((drug : Prescription) => {return (
        <div key={`id-${drug.id}`} className={styles.prescriptionContainer}>
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