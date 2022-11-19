import React from "react";
import {Routes,Route} from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";

function App() {
    return (
        <Routes>
            <Route path="/" exact component={Home}></Route>
            <Route path="/id" component={Detail}></Route>
        </Routes>
    );
};

export default App;