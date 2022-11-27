import './App.css';

import React, { useState } from 'react'

function App() {

    const [sonsonuc, setSonsonuc] = useState(false);
    const [puan, setPuan] = useState(0);
    const [gecerlisoru, setGecerlisoru]= useState(0);
      
    const questions = [
      {
        text: "Her gün yeterli miktarda su içerim.",
        options: [
          { id: 0, text: "ASLA", isCorrect: false },
          { id: 1, text: "BAZEN", isCorrect: false },
          { id: 3, text: "EVET", isCorrect: true },
          
        ],
      },
      {
        text: "Her gün yeterli miktarda protein alırım.",
        options: [
          { id: 0, text: "ASLA", isCorrect: false },
          { id: 1, text: "BAZEN", isCorrect: false },
          { id: 3, text: "EVET", isCorrect: true },
        ],
      },
      {
        text: "Her gece yeterli sürede uyurum.",
        options: [
          { id: 0, text: "ASLA", isCorrect: false },
          { id: 1, text: "BAZEN", isCorrect: false },
          { id: 3, text: "EVET", isCorrect: true },
        ],
      },
      {
        text: "Her gün yeterli miktarda sebze tüketirim.",
        options: [
          { id: 0, text: "ASLA", isCorrect: false },
          { id: 1, text: "BAZEN", isCorrect: false },
          { id: 3, text: "EVET", isCorrect: true },
        ],
      },
      {
        text: "Her gün yeterli miktarda meyve tüketirim.",
        options: [
          { id: 0, text: "ASLA", isCorrect: false },
          { id: 1, text: "BAZEN", isCorrect: false },
          { id: 3, text: "EVET", isCorrect: true },
        ],
      },
      {
        text: "Her gün yeterli sürede spor yaparım.",
        options: [
          { id: 0, text: "ASLA", isCorrect: false },
          { id: 1, text: "BAZEN", isCorrect: false },
          { id: 3, text: "EVET", isCorrect: true },
        ],
      },
      {
        text: "Paketlenmiş gıdalar tüketmem.",
        options: [
          { id: 0, text: "ASLA", isCorrect: false },
          { id: 1, text: "BAZEN", isCorrect: false },
          { id: 3, text: "EVET", isCorrect: true },
        ],
      },
    ];    
     
    const optionClicked = (isCorrect)=>{
      if(isCorrect){
        setPuan(puan +1)
      }
      if(gecerlisoru +1 < questions.length){
        setGecerlisoru(gecerlisoru +1)
      } else{
        setSonsonuc(true)
      }
    }
   
    const yenidenBasla= ()=>{
      setPuan(0);
      setGecerlisoru(0);
      setSonsonuc(false);
    }
      
  return (
    <div>
        <div className="container">
          <h1>Sağlıklı rutin ölçme</h1>
          <h2> Geçerli puan: {puan} </h2>
           
           { sonsonuc ?
                <div className="result">
                <h1>result </h1>
                 <h2> {questions.length} sorudan {puan} tanesi   </h2>
                 <button onClick={()=> yenidenBasla()} > Yeniden Başla </button>
               </div>
           
             :
             <div className="question-card">
             <h2> {questions.length} sorudan {gecerlisoru +1} tanesi  </h2>
             <h3>{questions[gecerlisoru].text} </h3>
             <ul>
              
              
                  {questions[gecerlisoru].options.map((option)=>{
                   return(
                    <li onClick={()=> optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
                   )
                  })}
              
             </ul>
           </div>
           }
          
          

             </div>
          

           
         



     

    
    </div>
  )
}

export default App;





















     // YAZI DEĞİŞTİRME 
// import React, {  useState, useEffect} from 'react';
// import './App.css';


// function App() {

//     const [yazi, setYazi]= useState("");
//     const anayazi= ()=>{
//         fetch("https://type.fit/api/quotes")
//         .then((res)=> res.json())
//         .then((data)=>{
//           let randomNum = Math.floor(Math.random()* data.length);
//           setYazi(data[randomNum])
//         })
//     }
 
//     useEffect(()=>{
//       anayazi();
//     },[])

//   return (
//     <div className="App">
//     <div className="container">
//       <p> {yazi.text}  </p>
//       <p> {yazi.author} </p>
//     </div>
 
//  <div>
//  <button onClick={anayazi}> DEĞİŞTİR </button>
//  </div>

    
//     </div>
//   );
// }

// export default App;
