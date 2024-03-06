import React from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';
import images from '../../../assets/image/image';
import './optionsFilters.scss';

export const OptionsFilters = ({filterData, setFilterData, typeFilter, setTypeFilter, isLoader}) => {

  const handleChange = (event) => {
    setFilterData(event.target.value);
  };

  const handleChange1 = (event) => {
    setTypeFilter(event.target.value);
  };
  
  const handleResetFilter = () => {
    setFilterData('')
    setTypeFilter('')
  }

  return (
    <div className='options-filters'>
      <div className='options-filters__content --selector' >
      <FormControl>
          <Select
            value={filterData}
            onChange={handleChange}
            displayEmpty
            disabled={isLoader}
            sx={{
              borderRadius: '0 8px 8px 0',
              border: 'none',
            }}
          >
            <MenuItem value={''}>Año</MenuItem>
            <MenuItem value={2020}>2020</MenuItem>
            <MenuItem value={2021}>2021</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className='options-filters__content --selector'>
        <FormControl>
          <Select
            value={typeFilter}
            onChange={handleChange1}
            displayEmpty
            disabled={isLoader}
            sx={{
              border: 'none',
            }}
          >
            <MenuItem value={''}>mes</MenuItem>
            <MenuItem value={'Enero'}>Enero</MenuItem>
            <MenuItem value={'Febrero'}>Febrero</MenuItem>
            <MenuItem value={'Marzo'}>Marzo</MenuItem>
            <MenuItem value={'Abril'}>Abril</MenuItem>
            <MenuItem value={'Mayo'}>Mayo</MenuItem>
            <MenuItem value={'Junio'}>Junio</MenuItem>
            <MenuItem value={'Julio'}>Julio</MenuItem>
            <MenuItem value={'Agosto'}>Agosto</MenuItem>
            <MenuItem value={'Septiembre'}>Septiembre</MenuItem>
            <MenuItem value={'Octubre'}>Octubre</MenuItem>
            <MenuItem value={'Noviembre'}>Noviembre</MenuItem>
            <MenuItem value={'Diciembre'}>Diciembre</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className='options-filters__content' title='Resetear filtro'>
        <button className='options-filters__content --btn' onClick={handleResetFilter} disabled={isLoader}>
          <img src={images.replayIco} alt='Icono resetear filtro'/>
          <span>resetear filtro</span>
        </button>
      </div>
    </div>
  );
};
