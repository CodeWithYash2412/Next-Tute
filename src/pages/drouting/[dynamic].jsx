import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';

const dynamic = () => {
  const router = useRouter();
  const { dynamic } = router.query
  return (
    <>
      <button type="button" onClick={() => router.push('/')}>
        Home
      </button>
      <h1>{dynamic}</h1>
      <li><Link href="/drouting/change1">Change 1</Link></li>
      <li><Link href="/drouting/change2">Change 2</Link></li>
      <li><Link href="/drouting/change3">Change 3</Link></li>
    </>
  )
}

export default dynamic