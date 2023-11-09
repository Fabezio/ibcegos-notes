import {type ReactNode}from 'react'

const Header = ({children}:{children:ReactNode}) => <header>
  <h1>{children}</h1>
</header>
export default Header