import React, { type ReactNode } from 'react'

const Footer = ({ children,background="default", theme='light' }: { children: ReactNode,background?:string, theme?:string }) => {
  return (<footer className={`py-3 bg-${background} text-${theme}`} >
    {children}
  </footer>
  )
}

export default Footer