import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
        <div className='mainnav'>
            <ul>
                
                <li><Link href='/head_script'>Head and Script</Link></li>
                <li><Link href='/routerTute'>Router</Link></li>
                <li><Link href='/drouting/changeME'>Dynamic Routing</Link></li>
                <li><Link href='/imagecompo'>Image Component</Link></li>
                <li><Link href='/StylesInComponent'>Style in Component</Link></li>
                
            </ul>
        </div>
    </>
  )
}

export default Navbar