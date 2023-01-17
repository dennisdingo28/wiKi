import React from 'react'
import Gender from './category/Gender'
import Species from './category/Species'
import Status from './category/Status'

const Filters = ({setStatus,setPageNumber,setGender,setSpecies}) => {
  function clearFilters(){
    setStatus('');
    setPageNumber(1);
    setGender('');
    setSpecies('');
    window.location.reload(true);
  }
  return (
    <div className='col-3'>
      <div className='text-center fs-4 fw-bold mb-2'>
        Filter
      </div>
      <div onClick={clearFilters} style={{ cursor: "pointer" }} className='text-center text-primary text-decoration-underline mb-4'>
        Clear Filters
      </div>


      <div className="accordion" id="accordionExample">
        
        <Status setStatus={setStatus} setPageNumber={setPageNumber}/>
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber}/>
        <Gender setGender={setGender} setPageNumber={setPageNumber}/>

       
      </div>
    </div>
  )
}

export default Filters
