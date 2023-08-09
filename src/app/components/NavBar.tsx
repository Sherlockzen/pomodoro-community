import React from 'react'
import SignInButton from './SignInButton';

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Home</a>
      </div>
      {/* <div>usuario</div> */}
      <SignInButton />
    </div>
  )
}
export default NavBar;