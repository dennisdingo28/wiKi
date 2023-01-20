import React from 'react'
import styles from './Cards.module.scss';
import { Link } from 'react-router-dom';

const Cards = ({results,page}) => {
    let display;

    if(results){    
        display=results.map(x=>{
            const {id, name, image,location,status} = x;
            
            let statusColor;

            if(status==='Alive')
                statusColor="success";
            else if(status==='Dead')
                statusColor="danger";
            else
                statusColor="secondary";

            return(
                <Link style={{textDecoration:"none"}} to={`${page}${id}`} key={id} className="text-dark col-lg-4 col-md-6 col-12 mb-4 position-relative">
                    <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
                        <img src={image} alt='' className={`${styles.img} img-fluid`}/>
                        <div className='content px-2'>
                            <div className='fw-bold fs-4 mb-4'>{name}</div>
                            <div className=''>
                                <div className='fs-6'>Last location</div>
                                <div className='fs-5'>{location.name}</div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.badge} position-absolute badge bg-${statusColor}`}>{status}</div>
                </Link>
            )
        })
    }else{
        display="No Characters Found :/";
    }

  return (
    <>
        {display}
    </>
  )
}

export default Cards
