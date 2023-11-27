'use client'
import React, { useState } from 'react'
import styles from './AddPills.module.css'
import { addStock } from '../firebase/API'
import { useRouter } from 'next/router';

const AddPills = ({ id, initialStock, addedPills }) => {

    const [addStockForm, setAddStockForm] = useState(false);
    const [addStockBy, setAddStockBy] = useState(0);

    const toggleAddPills = () => {
        const toggleStock = addStockForm ? false : true;
        setAddStockForm(toggleStock);
    }

    const handleChange = (e) => {
        setAddStockBy(e.target.value);
    }

    const addPills = async () => {
        if (addStockBy !== 0){
            const newStock = Number(addStockBy);
            addStock(id, newStock);
        }
    }

  return (
    <div className={styles.formContainer}>
        { (addStockForm) ? 
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
                <button type="submit" className={styles.save} onClick={() => addPills()} >Add</button>
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