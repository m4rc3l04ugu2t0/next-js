import Link from 'next/link'

export default function Home() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href={'/profile'}>Profile</Link>
            <Link href={'/products'}>Product</Link>
            <Link href={'/about'}>About</Link>
          </li>
        </ul>
      </nav>
      <h1>Hello Word</h1>
    </>
  )
}
