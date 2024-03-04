import React from 'react'
import { NavBar } from '../../organisms/NavBar'
import './Page-layout.scss'
 
const PageLayout = ({children}) => {

  return (
    <div className='PageLayout'>
      <NavBar/>
      {children}
    </div>
  )
}
export default PageLayout