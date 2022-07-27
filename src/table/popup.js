import React from 'react'
import ReactDOM from 'react-dom'
import { BsFillXCircleFill} from "react-icons/bs";
import styled from "styled-components"
const Wrapper=styled.div`

background-color: rgba(201, 188, 188,0.95);
position: fixed;
top: 100px;
left: 100px;
right:300px;
bottom:100px;
display:flex;
flex-direction:column;

align-items: center;
justify-content: center;
z-index: 1000;
border-radius:10px;
padding:10px 20px;
.header{
  display:flex;
  margin-buttom:20px;
  width:80%;
  flex-direction:row-reverse;
  h3{
    color:black;
  }
  div{
    width:50%;
    
    button{
      color:rgb(58, 53, 53);
      border:none;
      span{
        margin-left:10px;
        font-size:1rem;
        font-weight:bold;
      }
    }
    
  }
  
}
.description{
  border:1px solid black;
  width:80%;
  height:50%;
  border-radius:10px;
  color:black;
  padding:10px 20px;
  text-align:end;

  
  
}


`

function Popup({description,onClose}) {
  
  return ReactDOM.createPortal (

    <Wrapper>
      <div className='header'>
        
        <h3>توضیحات</h3>
        <div><button onClick={onClose}><BsFillXCircleFill /><span>بستن</span>
        </button></div>
        
        </div>
        <div className='description'>{description}</div>
    </Wrapper>

      
    ,
    document.getElementById("portal")
  )
}

export default Popup
