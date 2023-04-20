import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
   return (
      <header>
         <nav>
            <div>
               <h1>Logo</h1>
            </div>
            <div className='row'>
               <Link className='link' to='/'>Home</Link>
               <Link className='link' to='/about'>About</Link>
               <Link className='link' to='/help'>Help</Link>
               <Link className='link' to='/contact'>Contact</Link>
               <Link className='link' to='/service'>Service</Link>
            </div>
         </nav>
      </header>
   )
}

export default Nav