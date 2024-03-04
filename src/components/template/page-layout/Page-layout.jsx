import React from 'react'
import './Page-layout.scss'
import { NavBar } from '../../organisms/NavBar'
 
const PageLayout = ({children}) => {

  return (
    <div className='PageLayout'>
      <NavBar/>
      {children}

    </div>
  )
}
export default PageLayout