import { useState } from "react";
import "./App.css";
import AddNewMovie from "./Components/AddNewMovie";
import MovieList from "./Components/MovieList";
import Search from "./Components/Search";
import { moviesData } from "./data";

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
      <MovieList list={data.filter(el=>el.name.toLowerCase().includes(textSearch.toLowerCase())&&el.rating>=rating)} />
    </div>
  );
}

export default App;
