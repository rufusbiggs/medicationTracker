// import { data } from '../services/data'
import { getPrescriptions } from './firebase/API'
import PrescriptionCard from './components/Prescription'
import React from 'react'
import { calculateFutureDate, daysLeft, runsOut, getCurrentStock } from '../services/functions'
import Link from 'next/link'

const PILL_DELIVERY_TIME = 4;

export default async function Home() {

  /** fake API call
   * const response = await fetch('mumsPrescription');
   * const data = await response.json()
  */
  const data : object[] = await getPrescriptions();
  console.log(data)

  const daysUntilPillsRunOut : number[] = data.map(({ initialStock, startDate, pillsPerDay}) => {
    console.log(typeof startDate);
    const currentStock = getCurrentStock(startDate, pillsPerDay, initialStock);
    return daysLeft(currentStock, pillsPerDay);
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
        {data.map((drug, index) => 
          <PrescriptionCard key={`drug-${index}`} drug={drug}/>
        )}
      </main>
      <Link className="edit-link" href='/prescriptions'>Edit Prescriptions</Link>
    </>
  )
}
