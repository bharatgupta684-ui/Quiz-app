import { useLocation,useNavigate } from "react-router-dom"
import axios from "axios"
import React, { useEffect,useState } from "react"


interface Question {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  shuffled: string[];
}


function shuffle(arr:any[]) {

  const result = [...arr];

  for (let i = 0; i < result.length; i++) {

    const randomIndex = Math.floor(Math.random() * result.length);

    const temp = result[i];
    result[i] = result[randomIndex];
    result[randomIndex] = temp;
  }

  return result;
}

  function decodeHtml(html: string) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}



const QuizQuse =()=>{
   const loc = useLocation()
   const{catId,deff,ques}=loc.state.data
   const [details,setDetails]= useState<any[]>([])
   const[answer,setAnswer]= useState<any>({})
   const nav = useNavigate()
   
   useEffect(()=>{
     const fetchdata = async ()=>{
         try{
      const res = await axios.get(`https://opentdb.com/api.php?amount=${ques}&category=${catId}&difficulty=${deff}&type=multiple`);

                    setDetails(
                    res.data.results.map((v: Question) => ({
                    question: decodeHtml(v.question), 
                    correct_answer: decodeHtml(v.correct_answer),
                    incorrect_answers: v.incorrect_answers.map((v)=> decodeHtml(v)),
                    shuffled: shuffle([decodeHtml(v.correct_answer), ...v.incorrect_answers.map((v)=>decodeHtml(v))])}))
                );    
    }
    catch(err){
      console.log(err)
    } 

    }
    fetchdata() 
   },[]);
   
    const selectData =(e:React.ChangeEvent<HTMLInputElement>)=>{
      const{name,value}=e.target
      setAnswer({...answer,[name]:value})
    }

    const check = ()=>{
      let ans = 0;
        let correctAns = 0;               
        details.forEach((v,i)=>{
             const selectedAnswer = answer[`qa${i}`];
              if (selectedAnswer === v.correct_answer) {
                correctAns = correctAns + 1;
            }
            if(selectedAnswer){
              ans = ans + 1;
            }
          
        })
          if(ans>0){
              nav(`/result`, {state:{rig:correctAns,deff:deff,ques:ques}})
            }else{alert("Please select Answer")}
        
    }


   
  return(
    <>
       <div className="container py-5">
  <div className="card shadow-lg border-0 rounded-4">
    <div className="card-header bg-primary text-white text-center py-3 rounded-top-4">
      <h3 className="mb-0 fw-bold">Quiz Page</h3>
    </div>

    <div className="card-body p-4">
      {details.length > 0 ? (
        details.map((v: any, i: number) => {
          return (
            <div key={i} className="mb-4">
              <h5 className="fw-semibold mb-3">
                Q{i + 1}. {v.question}
              </h5>

              <div className="ps-3">
                {v.shuffled.map((ans: any, index: number) => {
                  return (
                    <div className="form-check mb-2" key={index}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name={`qa${i}`}
                        value={ans}
                        onChange={selectData}
                      />
                      <label className="form-check-label">
                        {ans}
                      </label>
                    </div>
                  );
                })}
              </div>

              <hr className="my-4" />
            </div>
          );
        })
      ) : (
        <div className="text-center text-muted py-5">
          <div
            className="spinner-border text-primary mb-3"
            role="status"
          ></div>
          <div>Loading....!</div>
        </div>
      )}

      <div className="text-center mt-4">
        <button
          onClick={check}
          className="btn btn-primary btn-lg px-5 rounded-pill shadow-sm"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
export default QuizQuse
   