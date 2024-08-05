import axios from "axios"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import PaymentSuccess from "./PaymentSuccess";


function App() {

  axios.defaults.baseURL = "http://localhost:4000/api";
  axios.defaults.withCredentials = true; 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/paymentsuccess" element={<PaymentSuccess/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
