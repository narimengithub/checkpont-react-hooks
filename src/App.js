import { useState } from "react";
import "./App.css";
import AddNewMovie from "./Components/AddNewMovie";
import MovieList from "./Components/MovieList";
import Search from "./Components/Search";
import { moviesData } from "./data";
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from "./Components/Details";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  const [data, setData] = useState(moviesData);
  const [textSearch, setTextSearch] = useState("")
  const [rating, setRating] = useState("")
  const handleSearch=(x)=>setTextSearch(x)
  const handleRating=(x)=>setRating(x)
  const handleAdd=(newMovie)=>setData([...data,newMovie])
  return (
    <div className="App">
    
   
      <Search textSearch={textSearch} rating={rating} handleSearch={handleSearch} handleRating={handleRating}/>
      <AddNewMovie handleAdd={handleAdd}/>
      
    
   
    <Router>
        <Routes>
          <Route path="/" element ={
            <MovieList list={data.filter(el=>el.name.toLowerCase().includes(textSearch.toLowerCase())&&el.rating>=rating)} />
          }></Route>
          <Route path="/details/:id"  element={<Details list={data}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
