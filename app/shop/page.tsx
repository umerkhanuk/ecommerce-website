import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const fetchdata = await fetch("https://dummyjson.com/products");
  const response = await fetchdata.json();

  return (
    <div className="grid items-center p-4 pb-5 gap-6 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl font-bold">Product List</h1>
      <ol className="flex flex-wrap gap-6">
        {response.products.map((item: any) => (
          <li
            key={item.id}
            className="w-[24%] my-7 mx-1 max-h-[400px] text-center bg-slate-200 flex flex-col justify-center items-center gap-5 p-5"
          >
            <Link href={`/products/${item.id}`}>
              <Image
                src={item.thumbnail}
                width={250}
                height={250}
                alt={item.title}
                className="rounded-md"
              />
            </Link>
            <span className="font-medium">{item.title}</span>
            <span className="text-red-600 font-semibold">${item.price}</span>
            <Link
              href="#"
              className="bg-black text-white px-4 py-2 rounded-md mt-2"
            >
              Add to Cart
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
