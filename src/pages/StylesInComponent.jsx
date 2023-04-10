import React from 'react'
import { useRouter } from 'next/router'

const StylesInComponent = () => {
    const router = useRouter();
    return (
        <>
            <button type="button" onClick={() => router.push('/')}>
                Home
            </button>
            <h1>Component Level CSS</h1>
            <p>by importing external css file we can use styles as object in classname</p>
            <p>import styles from "./stylesheet"</p>
            <p> <code>&lt;p classname="styles.classname"&gt;&lt;/p&gt;</code> </p>
            <p>use curly brackets instead of ""</p>
            <h1>Global CSS</h1>
            <p>to use 1 css file all pages of projects it can imported in _app.js file</p>
            <p>it can't be added in perticular pages file.</p>
            <p>in _app.js you can use (import "path_to_css_file.css") to import css </p>
        </>
    )
}

export default StylesInComponent