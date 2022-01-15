import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MobileNavbar from "./components/mobileNavbar";
import Home from "./pages/home";
import About from "./pages/about";
import Feedback from "./pages/feedback";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="font-body">
                <MobileNavbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/feedback" element={<Feedback />}></Route>
                    <Route
                        path="*"
                        element={
                            <main>
                                <p>You seem lost...</p>
                            </main>
                        }
                    ></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
