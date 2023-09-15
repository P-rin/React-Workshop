import { DataContext } from "../App";
import QuestionsData from "../data/QuestionsData";
import { useContext, useEffect, useState } from "react";

const Quiz =()=>{
    //console.log(QuestionsData);
    const [current,setCurrent]=useState(0)
    const [selectionChoice,setSelectionChoice]=useState("")
    const {score,setScore,setAppState}=useContext(DataContext)
    useEffect(()=>{
        checkAnswer()
    },[selectionChoice])
    const checkAnswer=()=>{
        if(selectionChoice!==""){
            if (selectionChoice===QuestionsData[current].answer) {
                setScore(score+1)
                nextQuestion()
            }else{
                nextQuestion()
            }
        }
    }
    const nextQuestion=()=>{
        setSelectionChoice("")
        if(current===QuestionsData.length-1){
            setAppState("score")
        }else{
            setCurrent(current+1)
        }
    }
    return(
        <div className= "quiz">
            <h1>{QuestionsData[current].question}</h1>
            <div className="choices">
                <button onClick={()=>setSelectionChoice("A")}>{QuestionsData[current].A}</button>
                <button onClick={()=>setSelectionChoice("B")}>{QuestionsData[current].B}</button>
                <button onClick={()=>setSelectionChoice("C")}>{QuestionsData[current].C}</button>
                <button onClick={()=>setSelectionChoice("D")}>{QuestionsData[current].D}</button>
            </div>
            <p>{`${current+1}/${QuestionsData.length}`}</p>
        </div>
    )
}
export default Quiz;