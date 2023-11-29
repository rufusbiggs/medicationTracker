// import { data } from '../services/data'
'use client';
import { db } from './firebase/API'
import PrescriptionCard from './components/Prescription'
import React, { useState, useEffect } from 'react'
import { calculateFutureDate, daysLeft, getCurrentStock } from '../services/functions'
import Link from 'next/link'
import { onSnapshot, collection} from "firebase/firestore";
import { signOut, useSession } from 'next-auth/react';

const PILL_DELIVERY_TIME = 4;

interface Prescription {
  id: string;
  startDate: Date;
  dose: number;
  addedPills: number[];
  initialStock: number;
  pillsPerDay: number;
  name: string
}

export default function Home() {

  const [data, setData] = useState([]);

  const session = useSession();

  useEffect(() => {

    const unsubscribe = onSnapshot(collection(db, 'prescription'), querySnapshot => {
      setData(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const daysUntilPillsRunOut : number[] = data.map(({ initialStock, addedPills, startDate, pillsPerDay}) => {
    const currentStock = getCurrentStock(startDate, pillsPerDay, addedPills, initialStock);
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
        <div>
          <p>{ session?.data?.user?.name }</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      </header>
      <main>
        {data.map((drug, index) => 
          <PrescriptionCard key={`drug-${index}`} drug={drug} />
        )}
      </main>
      <Link className="edit-link" href='/prescriptions'>Edit Prescriptions</Link>
    </>
  )
}
