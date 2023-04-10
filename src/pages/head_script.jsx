import Head from 'next/head'
import React from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'

const head_script = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Next/Head and Next/Script</title>
      </Head>
      <button type="button" onClick={() => router.push('/')}>
        Home
      </button>
      <h1>Next/Head</h1>
      <p>use of head is to add the title of webpage or add meta info like description, tags and many more</p>
      <p>javascript can also be added to the head</p>
      <h1>Next/Script</h1>
      <p>Next/Script is another method to add javascript files in webpage</p>
      <p>by using Next/Script we got option to make lazy load the javascript means javascript will load after all the components of jsx loaded</p>
      <p>there are three strategy</p>
      <ul>
        <li>beforeIteractive : Load Before the page is iterative</li>
        <li>afterInteractive : Load Immediately after the page becomes interactive (default)</li>
        <li>lazyOnload : Load during ideal time</li>
      </ul>

    </>
  )
}

export default head_script