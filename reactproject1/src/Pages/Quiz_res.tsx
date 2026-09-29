import { useLocation,useNavigate } from "react-router-dom"



const QuizRes =()=>{
 // {state:{rig:c,deff:deff,ques:ques}})//
  const loc = useLocation()
  const{rig,deff,ques}=loc.state
  const nav = useNavigate()


  return(
    <>
      <div className="container mt-5">
  <div className="card shadow-lg mx-auto" style={{ maxWidth: "500px" }}>
    <div className="card-header bg-primary text-white text-center">
      <h3 className="mb-0">Score</h3>
    </div>

    <div className="card-body">
      <p className="card-text">
        <strong>Difficulty:</strong> {deff}
      </p>
      <p className="card-text">
        <strong>Total Questions:</strong> {ques}
      </p>
      <p className="card-text text-success">
        <strong>Right Answers:</strong> {rig}
      </p>
      
      <p className="card-text">
        <strong>Percentage:</strong> {((rig / ques) * 100).toFixed(2)}%
      </p>

      <div className="text-center mt-4">
        <button
          className="btn btn-primary px-4"
          onClick={() => nav("/")}
        >
          Play Again
        </button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
export default QuizRes

