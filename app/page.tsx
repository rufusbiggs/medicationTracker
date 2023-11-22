import { data } from '../services/data'
import PrescriptionCard from './components/Prescription'
import React from 'react'

interface Prescription {
  name: string,
  dose: number,
  pillsPerDay: number,
  stock: number
}

export default function Home() {

  /** fake API call
   * const response = await fetch('mumsPrescription');
   * const data = await response.json()
  */

  return (
    <>
      <header>
        <h1>Medication Tracker</h1>
      </header>
      <main>
        {data.map((drug : Prescription, index) => 
          <PrescriptionCard key={`drug-${index}`} drug={drug} />
        )}
      </main>
    </>
  )
}
