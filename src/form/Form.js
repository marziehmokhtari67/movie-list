import React from "react";
import "./Form.css";
import {useState, useRef } from "react";
// //definding variable


function Form({movieList,setMovieList}) {
  const Url ='https://62ab3440a62365888bd75cdd.mockapi.io/api/Movie'
  const nameInput = useRef(null);
  const directorInput = useRef(null);
  const genreInput = useRef(null);
  const yearInput = useRef(null);
  const textarea = useRef(null);
  const[Id,setId] =useState(1);
  
  // //posting data with fetch
  const Fetch =async (data)=>{
const result =await fetch (Url,{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
    
  },
  body: JSON.stringify(data)
 })
 return result.json()

  }
  const handleSave = (e) => {
    e.preventDefault();

    setId(Id+1)
    const infoMovie = {
      id:Id ,
      name: nameInput.current.value,
      genre: genreInput.current.value,
      director:directorInput.current.value ,
      year: yearInput.current.value,
      description:textarea.current.value ,
    };
  setMovieList([...movieList,infoMovie],()=>{ console.log(movieList)})
  Fetch(infoMovie)
    

  };
  const handleCancle =(e)=>{
    e.preventDefault()
    nameInput.current.value=''
    genreInput.current.value='وحشت/هیجانی'
    directorInput.current.value =''
    yearInput.current.value=''
    textarea.current.value =''
  }
  return (
    <>
      <form>
        <div className="inputWrapper">
          <div>
            <div className="lable-wrapper">
            <div className="icon"></div>
            <lable>نام فیلم</lable>
            
              
            </div>

            <input
              type="text"
              placeholder="نام فیلم را بنویسید"
              name="name"
              ref={nameInput}
            ></input>
          </div>
          <div >
            <div className="lable-wrapper">
              <div className="icon"></div>
              <lable>ژانر فیلم</lable>
            </div>

            <select name="genre" ref={genreInput}>
              <option >وحشت/هیجانی</option>
              <option >وحشت</option>
              <option>هیجانی</option>
            </select>
          </div>
          <div>
            <div className="lable-wrapper">
              <div className="icon"></div>
              <lable>نام کارگردان</lable>
            </div>
            <input
              type="text"
              placeholder="نام کارگردان را وارد کنید"
              name="director"
              ref={directorInput}
            ></input>
          </div>
          <div>
            <div className="lable-wrapper">
              <div className="icon"></div>
              <lable>سال تولید</lable>
            </div>
            <input
              type="text"
              placeholder="سال ساخت فیلم را وارد کنید"
              name="year"
              ref={yearInput}
            ></input>
          </div>
        </div>
        <div className="des-btn">
          
            <div className="lable-wrapper">
              <lable>توضیحات</lable>
              <div className="icon"></div>
            </div>

            <textarea
              placeholder="توضیحات درباره فیلم"
              name="description"
              ref={textarea}
            ></textarea>
          
          <div className="btn-wrapper">
            <button onClick={handleCancle}>انصراف</button>
            <button onClick={handleSave}>ذخیره</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
