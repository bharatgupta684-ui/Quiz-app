import { useState } from "react"
import { useNavigate } from "react-router-dom";

 
  interface Input{
  catId:string,
  deff:string,
  ques:string
 }

const QuizSetup =()=>{
   const[info,setInfo]= useState<Input>({catId:"", deff:"easy", ques:"5"});
   const selectCat =(e:React.ChangeEvent<HTMLSelectElement>)=>{
   const{value}= e.target;
   setInfo({...info,catId:value})
    
   }
   const nav = useNavigate()

   const startQuiz =()=>{
    if(!info.catId){alert("Please select category")}
    else(nav ("/question", {state:{data:info}}))
   }


  return(
      
  <>
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4" style={{ maxWidth: "500px", width: "100%" }}>
        
        <h3 className="text-center text-primary mb-4">
          Quiz Setup Page
        </h3>

        {/* Category */}
        <div className="mb-4">
          <label className="form-label fw-bold">
            Select Category:
          </label>

          <select
            name="catId"
            onChange={selectCat}
            className="form-select"
          >
            <option value="">Select Category</option>
            <option value="9">General Knowledge</option>
            <option value="18">Computer Science</option>
            <option value="21">Sports</option>
            <option value="23">History</option>
            <option value="27">Animals</option>
          </select>
        </div>

        {/* Difficulty */}
        <div className="mb-4">
          <label className="form-label fw-bold d-block">
            Difficulty:
          </label>

          <div className="btn-group" role="group">
            <button
              className="btn btn-outline-success"
              onClick={() => setInfo({ ...info, deff: "easy" })}
            >
              Easy
            </button>

            <button
              className="btn btn-outline-warning"
              onClick={() => setInfo({ ...info, deff: "medium" })}
            >
              Medium
            </button>

            <button
              className="btn btn-outline-danger"
              onClick={() => setInfo({ ...info, deff: "hard" })}
            >
              Hard
            </button>
          </div>
        </div>

        {/* Number of Questions */}
        <div className="mb-4">
          <label className="form-label fw-bold d-block">
            Number of Questions:
          </label>

          <div className="btn-group" role="group">
            <button
              className="btn btn-outline-primary"
              onClick={() => setInfo({ ...info, ques: "5" })}
            >
              5
            </button>

            <button
              className="btn btn-outline-primary"
              onClick={() => setInfo({ ...info, ques: "10" })}
            >
              10
            </button>

            <button
              className="btn btn-outline-primary"
              onClick={() => setInfo({ ...info, ques: "15" })}
            >
              15
            </button>

            <button
              className="btn btn-outline-primary"
              onClick={() => setInfo({ ...info, ques: "20" })}
            >
              20
            </button>
          </div>
        </div>

        {/* Start Quiz */}
        <button
          onClick={startQuiz}
          className="btn btn-primary btn-lg w-100"
        >
          Start Quiz
        </button>

      </div>
    </div>
  </>
);  
}
export default QuizSetup


  // <div>
  //       <h3>Quiz Setup Page</h3>
  //        <br />
  //        Select Category:
  //        <select name="catId" onChange={selectCat} >
  //         <option value="">Select Category</option>
  //          <option value="9">General Knowledge</option>
  //          <option value="18">Computer Science</option>
  //          <option value="21">Sports</option>
  //          <option value="23">History</option>
  //          <option value="27">Animals</option>
  //        </select>
  //        <br />
  //        Defficulty:
  //        <button onClick={()=>setInfo({...info,deff:"easy"})}>Easy</button>
  //        <button onClick={()=>setInfo({...info,deff:"medium"})}>Medium</button>
  //        <button onClick={()=>setInfo({...info,deff:"hard"})}>Hard</button>
  //        <br />
  //        Number of Question:
  //         <button onClick={()=>setInfo({...info,ques:"5"})}>5</button>
  //         <button onClick={()=>setInfo({...info,ques:"10"})}>10</button>
  //         <button onClick={()=>setInfo({...info,ques:"15"})}>15</button>
  //         <button onClick={()=>setInfo({...info,ques:"20"})}>20</button>
  //           <br />
  //         <button onClick={startQuiz}>Start Quiz</button>  

  //     </div>