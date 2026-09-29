
import { BrowserRouter,Route,Routes } from "react-router-dom"
import QuizSetup from "./Pages/Quiz_Setup"
import QuizQuse from "./Pages/Quiz_Ques"
import QuizRes from "./Pages/Quiz_res"


function App() {
  

  return (
    <>

      <BrowserRouter>
         <Routes>
          
           <Route path="/" element={<QuizSetup/>}/>
           <Route path="/question" element={<QuizQuse/>}/>
           <Route path="/result" element={<QuizRes/>}/>
           

         </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
