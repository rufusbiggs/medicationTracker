import { data } from '../services/data'
import PrescriptionCard from './components/Prescription'
import React from 'react'
import { calculateFutureDate, daysLeft, runsOut } from '../services/functions'
import Link from 'next/link'

const PILL_DELIVERY_TIME = 4;

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

  const daysUntilPillsRunOut : number[] = data.map(({ stock, pillsPerDay}) => {
    return daysLeft(stock, pillsPerDay);
  })
  const daysUntilSoonestDate : number = Math.min(...daysUntilPillsRunOut);
  const daysWithDelivery : number = daysUntilSoonestDate - PILL_DELIVERY_TIME;
  const soonestDate : string = calculateFutureDate(daysWithDelivery);


  return (
    <>
      <header>
        <h1>Medication Tracker</h1>
        <h3>Order Before {soonestDate}</h3>
      </header>
      <main>
        {data.map((drug : Prescription, index) => 
          <PrescriptionCard key={`drug-${index}`} drug={drug} runsOut={runsOut}/>
        )}
      </main>
      <Link className="edit-link" href='/prescriptions'>Edit Prescriptions</Link>
    </>
  )
}
