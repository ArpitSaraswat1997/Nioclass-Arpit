import React, { useEffect, useState } from 'react'

export default function Math2() {
 
    const [state,setData]=useState([]);


    

    let allData=async()=>{
        let QuestionID= "DifferentialCalculus2_901"
        let res = await fetch(`https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${QuestionID}`);
        let data = await res.json();
        console.log(data);
        setData(data)

    }
    useEffect(()=>{
        allData();
         },[])

  return (
    <div>
    
    
   

 {
    state.map((e)=>{
        return(
            <div>
                <div className='chapter'>
                <h3>ChapterID:-{e.ChapterID}</h3>
                <h3>QuestionID:-{e.QuestionID}</h3>
                <h3>ExpectedTime:-{e.ExpectedTime}min</h3>
                </div>

            <div className='question'>
                <h2>Question 3:-</h2>
                <h4>{e.Question}</h4>
            </div>

           


             </div>
            
          

            
        )
    })
 }

    </div>
  )
}
