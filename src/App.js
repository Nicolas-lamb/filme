import React from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/home";
import Movie from "./pages/movie";


const App = () => {
    return (
        <div>
            <nav>
                <ol id="header">
                    <Link to="/" class="linkLi"><li>Home</li></Link>
                    <Link to="/" class="linkLi"><li>Mais assistidos</li></Link>
                </ol>
            </nav>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/:id" exact element={<Movie />} />
                
                
            </Routes>
        </div>
    );
};

export default App;
