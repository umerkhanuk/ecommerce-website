import Link from "next/link";

export default async function Home() {
  return (
    <div className="grid bg-[#3498DB] py-32 items-center p-4 pb-5 gap-6 mb-9 sm:p-10 font-[family-name:var(--font-geist-sans)]">
     <h1 className="text-4xl font-bold font-serif mt-28">Pakistan No # 1 E-Bazaar</h1>
      <p className="text-[20px] font-bold font-serif ">Where Fashion Dreams Come True</p>
      <Link href="/shop" className='bg-[#FF6F61] text-white p-2 w-40 text-center mb-28'>Shop Now</Link>
    </div>
  );
} 
