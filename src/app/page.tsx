import Image from 'next/image'
import { client } from '../../sanity/lib/client'

export const getProductData = async () => {
  const res = await client.fetch(`*[_type=='product']`);
  return res;
}
interface IProduct {
  title: string,
  description: string
}

export default async function Home() {

  const data:IProduct[] = await getProductData();
  console.log(data)
  
  return (
    <div>{data.map((item)=>(
      <>
      <h1>{item.title}</h1>
      <h1>{item.description}</h1>
      </>
    ))}</div>
  )
}
