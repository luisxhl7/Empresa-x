import React from 'react'
import { NavBar } from '../../organisms/NavBar'
import './Page-layout.scss'
 
const PageLayout = ({children}) => {

  return (
    <main className='PageLayout'>
      <NavBar/>
      {children}
    </main>
  )
}
export default PageLayout