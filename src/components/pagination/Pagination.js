import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({setPageNumber,info,pageNumber}) => {


  return (
    <ReactPaginate
    className="pagination justify-content-center gap-4 my-4"
    forcePage={pageNumber===1 ? 0:pageNumber-1}
    previousLabel="Prev"
    nextLabel="Next"
    nextLinkClassName="btn btn-primary"
    previousLinkClassName="btn btn-primary"
    pageClassName="page-item"
    pageLinkClassName="page-link"
    pageCount={info?.pages}
    onPageChange={(data)=>{setPageNumber(data.selected+1)}}
    activeClassName="active"
    />
    
  )
}

export default Pagination
