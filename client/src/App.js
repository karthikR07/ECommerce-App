import Signup from "./components/signup/signup";
import Login from "./components/login/login";
import{BrowserRouter,Route,Router, Routes} from "react-router-dom"

const App = ()=>{
  return(
    <>
    ECommerce App Works
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
