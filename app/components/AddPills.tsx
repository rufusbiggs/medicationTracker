'use client'
import React, { useState, ChangeEvent } from 'react'
import styles from './AddPills.module.css'
import { addStock } from '../firebase/API'

const AddPills : React.FC<{id: string, initialStock: number, addedPills: number[]}> = ({ id, initialStock, addedPills }) => {

    const [addStockForm, setAddStockForm] = useState(false);
    const [addStockBy, setAddStockBy] = useState(0);

    const toggleAddPills = () => {
        const toggleStock = addStockForm ? false : true;
        setAddStockForm(toggleStock);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAddStockBy(Number(e.target.value));
    }

    const addPills = () => {
        if (addStockBy !== 0){
            const newStock = Number(addStockBy);
            addStock(id, newStock)
            setAddStockBy(0);
            setAddStockForm(false);
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
                <button type="submit" className={styles.save} onClick={(e) => {
                    e.preventDefault();
                    addPills();
                    }} >Add</button>
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