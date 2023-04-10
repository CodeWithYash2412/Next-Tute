import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router'

const imagecompo = () => {
  const router = useRouter();
  const myLoader = ({ src, width, quality }) => {
    return `/img${src}.jpg?w=${width}&q=${quality || 75}`
  }
  return (
    <>
      <button type="button" onClick={() => router.push('/')}>
        Home
      </button>
      <h1>Next/Image</h1>
      <Image
        loader={myLoader}
        src="1"
        width={720}
        height={520}
        quality={100}
      />
      <Image
        loader={myLoader}
        src="2"
        width={720}
        height={520}
        quality={100}
      />
    </>
  )
}

export default imagecompo