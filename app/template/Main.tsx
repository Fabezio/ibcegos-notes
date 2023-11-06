import React, { type ReactNode } from 'react'

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      {children}
    </main>
  )
}

export default Main