import React from 'react'

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <div>
            <h1>Own Byte</h1>
        </div>
        <nav>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </nav>
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  )
}


export default Layout