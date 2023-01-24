import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Lodgings from "./pages/Lodgings/Lodgings";
import Error from "./pages/Error/Error";

// 사전에 index.js 에서 Browser 불러와서 연결해줌
// 특정 주소를 입력할 때 보내주는 라우팅을 처리하는 곳

//Link 를 사용해서 a href 실현도 가능, Link 는 Route의 원하는 path 경로와 같이 설정

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logements/:id" element={<Lodgings />} />
        <Route path="*" element={<Error />} />
        <Route path="/error404" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
