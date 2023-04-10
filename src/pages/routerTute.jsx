import React from 'react'
import { useRouter } from 'next/router'

const RouterTute = () => {
  const router = useRouter();
  return (
    <>
      <button type="button" onClick={() => router.push('/')}>
        Home
      </button>
      <h1>File Based Routing</h1>
      <p>In FIle Based Routing you don't need to install any package for routing.</p>
      <p>Just create a page in src/page and that will automatically will be added in routing</p>
      <p>If you created about page in src/page than you just need to type /about in url to access the about page</p>
      <h1>Nested Routes</h1>
      <p>Nested Routing can be done by creating folder in src/page</p>
      <p>If we create a folder named as contact and create a file like whatsapp.js, mail.js, instagram.js</p>
      <p>then we can access in browser by typing the name of folder then file like <strong>contact/whatsapp.js, contact/mail.js, contact/instagram.js</strong></p>
    </>
  )
}

export default RouterTute