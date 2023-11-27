'use client'
import React, { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { addData } from '../../firebase/API'
import { v4 as uuidv4 } from 'uuid';

const newPrescription = () => {

    const [formData, setFormData] = useState({
        name: '',
        dose: '',
        pillsPerDay: '',
        stock: '',
        startDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        const {name, dose, pillsPerDay, stock} = formData;
        if (name !== '' && dose !== '' && pillsPerDay !== '' && stock !== '' ){
            const databaseInputs = {...formData,
                dose: Number(formData.dose),
                pillsPerDay: Number(formData.pillsPerDay),
                initialStock: Number(formData.stock),
                startDate: new Date(formData.startDate),
                id: uuidv4(),
            }
            addData(databaseInputs);
            alert("Prescription added to system 😀")
        }
         else {
            alert("Please complete the form!");
        }
    };

  return (
    <div>
        <nav>
            <Link className={styles.homeLink} href='../'>&larr; Home</Link>
        </nav>
        <h1>New Prescription</h1>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
                <label className={styles.label}>Name:</label>
                <input
                type="string"
                className={styles.input}
                placeholder="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                />
            </div>
            <div className={styles.inputContainer}>
                <label className={styles.label}>Dose:</label>
                <input
                type="number"
                className={styles.input}
                placeholder="mg per pill"
                name="dose"
                value={formData.dose}
                onChange={handleChange}
                />
            </div>
            <div className={styles.inputContainer}>
                <label className={styles.label}>Pills Per Day:</label>
                <input
                type="number"
                className={styles.input}
                placeholder="number per day"
                name="pillsPerDay"
                value={formData.pillsPerDay}
                onChange={handleChange}
                />
            </div>
            <div className={styles.inputContainer}>
                <label className={styles.label}>Stock:</label>
                <input
                type="number"
                className={styles.input}
                placeholder="total number of pills"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                />
            </div>
            <div className={styles.inputContainer}>
                <label className={styles.label}>Start Date:</label>
                <input
                type="date"
                className={styles.input}
                placeholder=""
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                />
                
            </div>
            <div className={styles.buttonContainer}>
                <button type="submit" className={styles.submit}>
                Submit
                </button>
                <button type="button" className={styles.cancel}>
                Cancel
                </button>
            </div>
        </form>
    </div>
  )
}

export default newPrescription