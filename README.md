# Medication Tracker

**Web application aiming to reduce stress around tracking stock levels of prescription medications for inidividuals**

It allows users to input prescriptions with drug types, doses, stock levels and start dates. Using this information it acts as a calculator and reminder for the user notify them when their prescription stock levels are running out.

The app consists of the following screens:

* Login
* Home
  * Order by date (4 days before running out to account for delivery)
  * Prescription cards which contain summary and 'add stock' feature
* Edit Prescriptions
  * Allows user to remove current prescriptions
* Add Prescription
  * Allows user to create a new presctiption

### Technologies Used

* Typescript
* Next.js project bootstrapped with 'create-next-app'
* Google Firebase (Auth and Firestore)
  



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
