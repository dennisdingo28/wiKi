import React, { useState,useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap"; 
import Cards from "./components/cards/Cards";
import Filters from "./components/filters/Filters";
import Pagination from './components/pagination/Pagination';
import Search from './components/search/Search';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Episodes from './Pages/Episodes';
import Location from './Pages/Location';
import CardsDetails from './components/cards/CardsDetails';

function App(){
  return (
    <Router>
      <div className='App'>
        <Navbar/>
      </div>
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<CardsDetails/>}/>

        <Route path='/episodes' element={<Episodes/>}/>
        <Route path='/episodes/:id' element={<CardsDetails/>}/>

        <Route path='/location' element={<Location/>}/>
        <Route path='/location/:id' element={<CardsDetails/>}/>

      </Routes>
    </Router>
  )
}

const Home = () =>{

  const [pageNumber,setPageNumber] = useState(1);
  const [fetchedData,updateFetchedData] = useState([]);
  const [search,setSearch] = useState("");
  const [status,setStatus] = useState("");
  const [gender,setGender] = useState("");
  const [species,setSpecies] = useState("");

  const {info,results} = fetchedData;
  const api = `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(()=>{
    (async function(){
      const data = await fetch(api).then(res=>res.json());
      updateFetchedData(data);
    })()
  },[api]);

  return (
    <div className="App">
      <h1 className='text-center mb-4'>Characters</h1>
      <Search setPageNumber={setPageNumber} setSearch={setSearch}/>
      <div className="container">
        <div className="row">
            <Filters setStatus={setStatus} setSpecies={setSpecies} setPageNumber={setPageNumber} setGender={setGender}/>
          <div className="col-lg-8 col-12">
            <div className="row">
                <Cards page="/" results={results}/>
            </div>
          </div>
        </div>
      </div>
      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/> 
    </div>
  );
}

export default App;
