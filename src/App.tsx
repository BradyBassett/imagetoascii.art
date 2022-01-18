import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer";
import Container from "./components/Container";
import Home from "./pages/home";
import About from "./pages/about";
import Feedback from "./pages/feedback";
import PrivatePolicy from "./pages/privatePolicy";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="font-body">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route
                        path="/about"
                        element={<Container content={<About />} title="About" />}
                    ></Route>
                    <Route
                        path="/feedback"
                        element={<Container content={<Feedback />} title="Feedback" />}
                    ></Route>
                    <Route
                        path="/privatePolicy"
                        element={<Container content={<PrivatePolicy />} title="Private Policy" />}
                    ></Route>
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
            <Footer />
        </BrowserRouter>
    );
};

export default App;
