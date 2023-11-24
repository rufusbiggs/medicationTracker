'use client'
import React, { useState } from 'react'
import styles from './AddPills.module.css'
import { addStock } from '../firebase/API'

const AddPills = () => {

    const [addStock, setAddStock] = useState(false);
    const [addStockBy, setAddStockBy] = useState(0);

    const toggleAddPills = () => {
        const toggleStock = addStock ? false : true;
        setAddStock(toggleStock);
    }

    const handleChange = (e) => {
        setAddStockBy(e.target.value);
    }

    const addPills = () => {
        e.preventDefault();
        if (addStockBy !== 0){
            
        }
    }

  return (
    <div className={styles.formContainer}>
        { (addStock) ? 
        <form>
            <input 
            type="number"
            className={styles.input} 
            placeholder="Enter Amount" 
            name="addStockBy"
            value={addStockBy}
            onChange={handleChange}
            />
            <div className={styles.saveCancel}>
                <button type="submit" className={styles.save} onClick={addPills} >Add</button>
                <button className={styles.cancel} onClick={toggleAddPills}>Cancel</button>
            </div>
        </form>
        : 
        <>
            <button className={styles.button} onClick={toggleAddPills}>+ Add to Stock</button>
        </>
        }
    </div>
  )
}

export default AddPills