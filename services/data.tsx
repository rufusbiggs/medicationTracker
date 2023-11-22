// Mock data file which can be 'fetched' by api

interface Prescription {
    name: string,
    dose: number,
    pillsPerDay: number,
    stock: number,
    prescribed: boolean
  }

export const data : Prescription[] = [
    {
        name: 'Lacosamide',
        dose: 50,
        pillsPerDay: 4,
        stock: 50,
        prescribed: true
    },
    {
        name: 'Escitalopram',
        dose: 5,
        pillsPerDay: 1,
        stock: 40,
        prescribed: true
    },
    {
        name: 'Levothyroxine',
        dose: 50,
        pillsPerDay: 1,
        stock: 25,
        prescribed: true
    },
    {
        name: 'Levothyroxine',
        dose: 25,
        pillsPerDay: 1, 
        stock: 30,
        prescribed: true
    }
]
