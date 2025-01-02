import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const fetchdata = await fetch("https://dummyjson.com/products")
  const response = await fetchdata.json()
  console.log(response)
  return (
    <div className="grid items-center p-4 pb-5 gap-6 sm:p-10 font-[family-name:var(--font-geist-sans)]">
     <h1 className="text-2xl font-bold">Product List</h1>
     <ol >
     { response.products.map((item:any,i:number)=>
    (
               <div className="w-[24%] my-7 mx-1 max-h-[400px] text-center bg-slate-200 flex flex-col justify-center items-center gap-5 float-start p-5">
            <li >
              <Link href={`/products/${item.id}`}>
              <Image
                src={item.thumbnail}
                width={250}
                height={250}
                alt="product image"
              >
              </Image>
            <span>{item.title}</span>
            </Link>
            </li>
            <span className="text-red-600">${item.price}  </span>
            <Link href="#" className="float-start bg-black text-white p-2 rounded-md">Add to Cart</Link>
            </div>
        )
     )
     }
     </ol>
    </div>
  );
} 

