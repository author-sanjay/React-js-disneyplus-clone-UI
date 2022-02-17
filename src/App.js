import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
         
          <Route path='/' element={<Home/>}/>
          <Route path='/detail' element={<Detail/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
