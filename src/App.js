import React from "react";
import { Header, Footer, Features, Blog, Possibility, WhatGPT4 } from "./containers";
import { Brand, Navbar, CTA } from "./components";
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT4 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App;