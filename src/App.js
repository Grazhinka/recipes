import './App.css';
import { useEffect,useState } from 'react';
import video from './food.mp4'
import MyRecepiesComponent from './myRecepiesComponent';
import Buttons from './buttons';

import React from "react";
import { gsap } from "gsap";
const {  useRef } = React;

function App() {
  const app = useRef();
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".box", { rotation: "+=360" });
    }, app);
    
    return () => ctx.revert();
  });

  const MY_ID ='0ddc0bc1';
  const MY_KEY ='81dfc7abe6a1022b11d91db5389e2bef';

  const [mySearch,setMySearch] = useState('')
  const [myRecepies,setMyRecepies] = useState([])
  const [wordSubmitted, setWordSubmitted]=useState('avocado')
  const [showToggle, setShowToggle] = useState(false);

  useEffect(()=>{
    const rec=async()=>{
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`)
      const data= await response.json();
      setMyRecepies(data.hits)
      console.log(data.hits)
    }
    rec()
  },[wordSubmitted])

  const myRecipeSearch=(e)=>{
    setMySearch(e.target.value)
    console.log(e.target.value)
  }

  const finalSearch = (e)=>{
    e.preventDefault()
    setWordSubmitted(mySearch)
  }

  const search=()=>{
    setWordSubmitted(mySearch)
    console.log(wordSubmitted)
  }

  return (
<div className="App">
  <div>
      <video autoPlay muted loop><source src={video} type="video/mp4" /></video>
      <div className=' containerColumn'>
      <div ref={app}  className='containerRow h1Div '>
        <h1>F</h1> 
        <h1 className='box'><span>i</span></h1>
        <h1>nd</h1>
        <h1 className='box'><span className='span2'>a</span></h1>
        <h1>Rec</h1>
        <h1 className='box'><span>i</span></h1>
        <h1>pe</h1>
      </div>
      </div>
  </div>
  <Buttons setShowToggle={showToggle}  mySearch={mySearch} setMySearch={setMySearch} wordSubmitted={wordSubmitted}  setWordSubmitted={setWordSubmitted}/>
  <div className='containerRow'>
      <button className="foodBtn"  onClick={()=>{setShowToggle(!showToggle)}}><img alt='img' src={ showToggle ? "https://zipgorelok.ru/templates/mark/vendor/gorelka_v_4d/img/minus.svg" :'https://cdn.pixabay.com/photo/2016/10/10/01/49/plus-1727487_960_720.png' } width='22px'/></button> 
      <form onSubmit={finalSearch}>
        <input  value={mySearch} onChange={myRecipeSearch} className='search' placeholder='Search ...'></input>
      </form>
      <button className='searchBtn' onClick={search}>
        <img alt='search' src='https://cdn.pixabay.com/photo/2017/01/13/01/22/magnifying-glass-1976105_960_720.png' width='20px'/>
      </button>
  </div>
  <div className='containerColumn'>
    {myRecepies.map((element,index)=>(
      <MyRecepiesComponent key={index}  myRecepiesCode={element}/>
    ))}
  </div>
</div>
  );
}

export default App;
