import Image from 'next/image'

export default function Home() {
  return (
    <>
      <h2 className="capitalize text-2xl mb-4">welcome</h2>
      <p className="capitalize text-xl mb-6">hello web</p>
      <Image src="/next.svg" className="mb-8" width={200} height={0} alt="" />
    </>
  )
}
