"use client";
import Image from 'next/image'
// importing components
import CustomNavbar from "../components/CustomNavbar";
import CustomRegisterForm from '../components/CustomRegisterForm';
import CustomFooter from '../components/CustomFooter';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <CustomNavbar />
    <CustomRegisterForm />
      < CustomFooter />
    </main>
  );
}
