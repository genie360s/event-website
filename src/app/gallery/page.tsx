"use client";
import CustomNavbar from "../components/CustomNavbar";
import Image from "next/image";

export default function Gallery() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <CustomNavbar />
        </div>
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex top-0">
        <div className="container  mx-auto h-96 w-full">
            <div className="grid grid-cols-4 gap-6 gap-y-6 w-full mx-auto">
                
                <div>
                    <Image src="/images/african_woman.jpeg" width={200} height={133} alt="" />
                </div>
                <div>
                    <Image src="/images/african_woman.jpeg" width={200} height={133} alt="" />
                </div>
                <div>
                    <Image src="/images/african_woman.jpeg" width={200} height={133} alt="" />
                </div>
                <div>
                    <Image src="/images/african_woman.jpeg" width={200} height={133} alt="" />
                </div>
                <div>
                    <Image src="/images/african_woman.jpeg" width={200} height={133} alt="" />
                </div>
                <div>
                    <Image src="/images/african_woman.jpeg" width={200} height={133} alt="" />
                </div>
                <div>
                    <Image src="/images/african_woman.jpeg" width={200} height={133} alt="" />
                </div>
                <div>
                    <Image src="/images/african_woman.jpeg" width={200} height={133} alt="" />
                </div>
                
            </div>
        </div>
      </div>
      </main>
    </>
  );
}
