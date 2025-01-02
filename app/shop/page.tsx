import Link from "next/link";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

export default async function Home() {
  // Fetch product data
  const fetchdata = await fetch("https://dummyjson.com/products");
  const response = await fetchdata.json();

  return (
    <div className="p-4 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl font-bold text-center mb-6">Product List</h1>
      <div className="grid w-full grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {response.products.map((item: Product) => (
          <div
            key={item.id}
            className="bg-slate-200 flex flex-col justify-center items-center p-5 rounded-md shadow-md"
          >
            <Link href={`/products/${item.id}`}>
              <Image
                src={item.thumbnail}
                width={250}
                height={250}
                alt={`${item.title} image`}
                className="object-cover rounded-md"
              />
              <span className="block mt-2 font-semibold text-center">{item.title}</span>
            </Link>
            <span className="text-red-600 text-lg font-bold mt-2">
              ${item.price}
            </span>
            <Link href="/cart" className="bg-black text-white px-4 py-2 rounded-md mt-3">
              Add to Cart
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}