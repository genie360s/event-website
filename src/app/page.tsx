"use client";
import Image from 'next/image'
// importing components
import CustomNavbar from "./components/CustomNavbar";
import BallAnimation from './components/BallAnimation';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <CustomNavbar />
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <div className="container  mx-auto h-96 w-full">
        <div className="flex flex-row">
          <div className="basis-2/3">
            <h1 className="text-7xl font-bold ">Where software artists meet and craft.</h1>
            <div className="pt-7">
            <button className="rounded-lg bg-indigo-500 p-3 font-bold w-96 text-lg hover:bg-indigo-700">Register now !</button>
            </div>
          </div>
          <div className="basis-1/3">
          <Image
              src="../images/the-art.svg"
              alt="Dev Con Logo"
              className="white:invert p-5"
              width={300}
              height={304.5}
              priority
            />
          </div>
        </div>
      </div>
      </div>

      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        < BallAnimation />
      </div>
      

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <p>this is the footer</p>
      </div>
    </main>
  );
}
