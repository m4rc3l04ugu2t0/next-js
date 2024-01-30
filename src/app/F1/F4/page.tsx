import Link from 'next/link'

export default function F4() {
  return (
    <>
      <h1>F4</h1>
      <Link href={'/F1/F3'}>F3</Link>
      <Link href={'/about'}>About</Link>
    </>
  )
}
