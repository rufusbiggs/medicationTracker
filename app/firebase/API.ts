// firebase testing file
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs, setDoc, doc, deleteDoc } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyIXmL4zqHpHzCAO3BSx_FGxe4ZX0uANM",
  authDomain: "medicationtracker-a86d2.firebaseapp.com",
  projectId: "medicationtracker-a86d2",
  storageBucket: "medicationtracker-a86d2.appspot.com",
  messagingSenderId: "938565710554",
  appId: "1:938565710554:web:99e37b2e63e1d2014cebe3",
  measurementId: "G-P5QH61SZHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

interface Prescription {
  id: string,
  name: string,
  dose: number,
  pillsPerDay: number,
  startDate: Date,
  initialStock: number
}

export const addData = async (input : Prescription) => {
  try {
    const docRef = await addDoc(collection(db, "prescription"), {
      name: input.name,
      dose: input.dose,
      pillsPerDay: input.pillsPerDay,
      initialStock: input.initialStock,
      startDate: input.startDate,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export const getPrescriptions = async () => {
  const querySnapshot = await getDocs(collection(db, "prescription"));
  const outputData : object[] = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
  
  return outputData;
}

export const deletePrescription = async (id : string) => {
  await deleteDoc(doc(db, 'prescription', id))
};


/**
 ******  Figure out how to handle adding stock *****
 * so far I have:
 * handle submit stuff in the addstock form
 * need to:
 * finish off this function below to make the initialStock value + the newStock
 */

export const addStock = async (prescriptionId : string, newStock : number) => {
  const docRef = await setDoc(doc(db, "prescription", prescriptionId), {
    initialStock: newStock,
  });
}

