// Mock data file which can be 'fetched' by api

interface Prescription {
    name: string,
    dose: number,
    pillsPerDay: number,
    stock: number
  }

export const data : Prescription[] = [
    {
        name: 'Lacosamide',
        dose: 0,
        pillsPerDay: 4,
        stock: 50
    },
    {
        name: 'Escitalopram',
        dose: 0,
        pillsPerDay: 1,
        stock: 40
    },
    {
        name: 'Levothyroxine',
        dose: 50,
        pillsPerDay: 1,
        stock: 25
    },
    {
        name: 'Levothyroxine',
        dose: 25,
        pillsPerDay: 1, 
        stock: 30
    }
]
