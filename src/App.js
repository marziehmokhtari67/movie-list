

import Form from './form/Form';
import Table from "./table/Table";
import './App.css'

import {useState, useEffect} from "react";
const Url ='https://62ab3440a62365888bd75cdd.mockapi.io/api/Movie'







function App() {

const [movieList,setMovieList]=useState([])
useEffect(()=>{
  fetch(Url).then(res=>res.json()).then(data=>setMovieList(data))
},[])
  return (
    <>
    <div className='yellow-card'></div>
    <Form movieList={movieList} setMovieList={setMovieList}/>
    { console.log(movieList)}
    
    <Table movieList={movieList} setMovieList={setMovieList}/>
    </>
  )
}

export default App

