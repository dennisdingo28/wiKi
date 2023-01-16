import React from 'react'

const Pagination = ({setPageNumber}) => {

    const next = ()=>{
        setPageNumber(prevPage=>prevPage+1);
    };
    const prev = ()=>{
       setPageNumber(prevPage=>{
        if(prevPage>1)
            return prevPage-1;
        else
            return prevPage;
       })
    };

  return (
    <div className="container d-flex justify-content-center gap-5 my-5">
        <button onClick={prev} className='btn btn-primary'>Prev</button>

        <button onClick={next} className='btn btn-primary'>Next</button>
    </div>
  )
}

export default Pagination
