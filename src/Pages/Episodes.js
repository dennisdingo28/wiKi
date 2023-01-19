import { type } from '@testing-library/user-event/dist/type';
import React,{useState,useEffect} from 'react'
import Cards from "../components/cards/Cards";
import InputGroup from '../components/filters/category/InputGroup';
const Episodes = () => {
  const [id,setId] = useState(1);
  const [info,setInfo] = useState([]);
  const [results,setResults] = useState([]);
  const {air_date,name} = info;

  const api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(()=>{
    (async function(){
       const data = await fetch(api).then(res=>res.json());
       setInfo(data);

       const a = await Promise.all(
        data.characters.map((x)=>{
          return fetch(x).then(res=>res.json());
        })
       );
       setResults(a);
    })()
  },[api]);


  return (
    <div className='container'>
      <div className='row mb-4'>
        <h1 className='text-center mb-4'>Episode : <span className='text-primary'>{name==="" ? "Unknown":name}</span></h1>
        <h5 className='text-center'>Air Date {air_date==="" ? "Unknown":air_date}</h5>
      </div>
      <div className='row'>
        <div className='col-3'>
          <h4 className='text-center mb-4'>
            Pick Episode
          </h4>
          <InputGroup name="Episode" setId={setId} total={51}/>
        </div>
        <div className='col-8'>
          <div className='row'>
              <Cards results={results}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Episodes;
