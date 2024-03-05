import React, { useState } from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';
import images from '../../../assets/image/image';
import './optionsFilters.scss';

export const OptionsFilters = ({filterData, setFilterData, }) => {
  const [openOptions, setOpenOptions] = useState(false);

  const handleOpenOptions = () => {
    setOpenOptions(!openOptions);
  };

  const handleChange = (event) => {
    setFilterData(event.target.value);
  };

  const handleResetFilter = () => {
    setFilterData('')
  }

  return (
    <div className='options-filters'>
      <div className='options-filters__content'>
        <img src={images.filterIco} alt='Icono filtro' />
        <span>filtros</span>
      </div>
      <div className='options-filters__content --selector' onClick={handleOpenOptions}>
        <FormControl>
          <Select
            value={filterData}
            onChange={handleChange}
            displayEmpty
          >
            <MenuItem value={''}>Año</MenuItem>
            <MenuItem value={2020}>2020</MenuItem>
            <MenuItem value={2021}>2021</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className='options-filters__content --reset' onClick={handleResetFilter} title='Resetear filtro'>
        <img src={images.replayIco} alt='Icono resetear filtro'/>
        <span>resetear filtro</span>
      </div>
    </div>
  );
};
