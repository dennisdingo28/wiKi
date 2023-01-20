import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const CardsDetails = () => {
  const { id } = useParams();
  const [fetchedData, updateFetchedData] = useState({});
  const { name, image, location, origin, gender, species, status, type } = fetchedData;

  const api = `https://rickandmortyapi.com/api/character/${id}`;
  useEffect(() => {
    (async function () {
      const data = await fetch(api).then(res => res.json());
      updateFetchedData(data);
    })()
  }, [api]);

  let statusColor;

  if (status === 'Alive')
    statusColor = "success";
  else if (status === 'Dead')
    statusColor = "danger";
  else
    statusColor = "secondary";
  return (
    <div className='container d-flex justify-content-center'>
      <div className='d-flex flex-column gap-3'>
      <Link to='/' style={{borderRadius:'10px',cursor:'pointer',textDecoration:'none'}} className='bg-secondary align-self-start text-white p-2'>go back</Link>
       <h1 className='text-center'>{name}</h1>
        <img src={image} alt="" className='img-fluid' />
        <div className={`badge fs-5 bg-${statusColor}`}>{status}</div>
        <div className='content'>
          <div>
            <span className='fw-bold'>Gender : </span>
            {gender}
          </div>
          <div>
            <span className='fw-bold'>Species : </span>
            {species}
          </div>
          <div>
            <span className='fw-bold'>Type : </span>
            {type=== ""?"Unknown":type}
          </div>
          <div>
            <span className='fw-bold'>Location : </span>
            {location?.name}
          </div>
          <div>
            <span className='fw-bold'>Origin : </span>
            {origin?.name}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardsDetails
