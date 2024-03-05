import React from 'react'
import images from '../../../assets/image/image'
import './optionsFilters.scss'

export const OptionsFilters = () => {
  return (
    <div className='options-filters'>
    <div className='options-filters__content'>
      <img src={images.filterIco} alt="" />
      <span>filtros</span>
    </div>
    <div className='options-filters__content'>
      fecha
    </div>
    <div className='options-filters__content'>
      <img src={images.replayIco} alt="" />
      <span>resetear filtro</span>
    </div>
  </div>
  )
}
