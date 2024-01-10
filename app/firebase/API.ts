// firebase testing file
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, updateDoc, doc, deleteDoc, arrayUnion, onSnapshot } from "firebase/firestore"; 
import { getAuth, GoogleAuthProvider } from "firebase/auth";

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
export const db = getFirestore(app);
// Initialise authentication
// export const auth = getAuth();
// export const googleAuthProvider = new GoogleAuthProvider();

interface Prescription {
  name: string,
  dose: number,
  pillsPerDay: number,
  startDate: Date,
  initialStock: number,
  addedPills: number[]
}

export const addData = async (input : Prescription) => {
  try {
    const docRef = await addDoc(collection(db, "prescription"), {
      name: input.name,
      dose: input.dose,
      pillsPerDay: input.pillsPerDay,
      initialStock: input.initialStock,
      startDate: input.startDate,
      addedPills: input.addedPills,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// export const getPrescriptions = async () => {
//   const querySnapshot = await getDocs(collection(db, "prescription"));
//   const outputData : object[] = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
  
//   return outputData;
// }

// real time collection data
// export const getPrescriptions = () => {
//   onSnapshot(collection(db, 'prescription'), (querySnapshot) => {
//     const outputData : object[] = querySnapshot.docs.map((doc) => ({
//       id: doc.id, ...doc.data()
//     }));
//     return outputData;
//   })
// }

export const deletePrescription = async (id : string) => {
  await deleteDoc(doc(db, 'prescription', id))
};

export const addStock = async (id : string, newStock : number) => {
  const docRef = doc(db, "prescription", id);
  console.log(db);
  console.log(newStock);
  try {
    await updateDoc(docRef, {
      addedPills: arrayUnion(newStock),
    });
  } catch (error) {
    console.error('Error updating document:', error);
  }
}

export const realtimeUpdate = (id : string) => {
  onSnapshot(doc(db, "prescriptions", id), (doc) => {
    
    return doc
  });
}
