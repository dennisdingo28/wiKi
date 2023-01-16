import React, { useState,useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap"; 
import Cards from "./components/cards/Cards";
import Filters from "./components/filters/Filters";
import Pagination from './components/pagination/Pagination';
import Search from './components/search/Search';


function App() {

  const [pageNumber,setPageNumber] = useState(1);
  const [fetchedData,updateFetchedData] = useState([]);
  const [search,setSearch] = useState("");

  const {info,results} = fetchedData;
  const api = `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${search}`;

  useEffect(()=>{
    (async function(){
      const data = await fetch(api).then(res=>res.json());
      updateFetchedData(data);
    })()
  },[api]);

  return (
    <div className="App">
      <h1 className="text-center ubuntu text-bold fw-bold my-4">Ricky & Morty <span className="text-primary">WiKi</span></h1>
      <Search setPageNumber={setPageNumber} setSearch={setSearch}/>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters/>
          </div>
          <div className="col-8">
            <div className="row">
                <Cards results={results}/>
            </div>
          </div>
        </div>
      </div>
      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/> 
    </div>
  );
}

export default App;
