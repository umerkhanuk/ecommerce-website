import Link from 'next/link'
import Image from 'next/image'

const page = async ({params}:{params:{product:string}}) => {
    const fetchdata = await fetch(`https://dummyjson.com/products/${params.product}`)
    const response = await fetchdata.json()
  return (
    <>
           <div className='w-1/2 grid justify-center   items-center  p-4 pb-5 gap-6 sm:p-10 float-start'>
            <Image
              src={response.thumbnail}
              width={350}
              height={350}
              alt='product image'
              className='bg-slate-200'
            >
            </Image>
       </div>
    <div className='w-1/2 grid  items-center  p-4 pb-5 gap-6 sm:p-10 float-start'>
        <p className='font-bold'>Product Id: {response.id}</p>
        <h3><span className='font-bold'>Title:</span> {response.title}</h3>
        <p><span className='font-bold'>Category:</span> {response.category}</p>
        <p><span className='font-bold'>Description:</span> {response.description}</p>
        <p><span className='font-bold'>Price:</span> {response.price}</p>
        <Link href="/cart" className='bg-black text-white p-2 w-40 text-center'>Add to Cart</Link>
        </div>
       </>
  )
}
export default page