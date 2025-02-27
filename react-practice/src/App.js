import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import './App.css';
import LoginForm from './components/loginForm/loginForm';
import ApiPractice from './components/apiPractice/apiPractice';
import Home from "./components/home/home";
import Header from "./components/header/header";

function App() {
  return (
    <>
   
    <Router>
    <Header/>
      <Routes>
        <Route path="/home" element = {<Home/>}></Route>
        <Route path="/loginForm" element = {<LoginForm/>}></Route>
        <Route path="/apiPractice" element = {<ApiPractice/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
