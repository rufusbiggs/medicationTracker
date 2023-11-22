'use client'
import React, { useState } from 'react'
import styles from './AddPills.module.css'

const AddPills = () => {

    const [addStock, setAddStock] = useState(false);

    const toggleAddPills = () => {
        const toggleStock = addStock ? false : true;
        setAddStock(toggleStock);
    }

  return (
    <div className={styles.formContainer}>
        { (addStock) ? 
        <>
            <input className={styles.input} placeholder="Enter Amount"></input>
            <div className={styles.saveCancel}>
                <button className={styles.save}>Add</button>
                <button className={styles.cancel} onClick={toggleAddPills}>Cancel</button>
            </div>
        </>
        : 
        <>
            <button className={styles.button} onClick={toggleAddPills}>+ Add to Stock</button>
        </>
        }
    </div>
  )
}

export default AddPills