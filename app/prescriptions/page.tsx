'use client';
// import { data } from '../../services/data'
import { deletePrescription, db } from '../firebase/API'
import React, { useState, useEffect} from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Swal from 'sweetalert2'
import { onSnapshot, collection} from "firebase/firestore";


interface Prescription {
  id: string;
  startDate: Date;
  dose: number;
  addedPills: number[];
  initialStock: number;
  pillsPerDay: number;
  name: string;
}

const EditPrescriptions = () => {

  const removePrescription = (id : string) => {
    // set prescribed to false in database
    Swal.fire({
      title: 'Are you sure you want to remove this prescription?',
      text: `You won't be able to restore this deletion`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel'
    })
    .then((result) => {
      if (result.value) {
        // delete prescription from database
        deletePrescription(id);
      }
    })
  }

  // const data : Prescription[] = await getPrescriptions();

  const [data, setData] = useState([]);

  useEffect(() => {

    const unsubscribe = onSnapshot(collection(db, 'prescription'), querySnapshot => {
      setData(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    })

    return () => {
      unsubscribe()
    }
  }, [])


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
          <button className={styles.remove} onClick={() => removePrescription(drug.id)} >Remove</button>
        </div>
        )}
      )}
      <Link className={styles.newLink} href='./prescriptions/new'>New Prescription</Link>
    </>
  )
}

export default EditPrescriptions