import { StrictMode, React } from "react";
import { createRoot, ReactDOM } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx"
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github from "./components/Github/Github.jsx";
import Login from "./components/Login/Login.jsx";
import Signup from "./components/Signup/Signup.jsx";
import Signup2 from "./components/Signup2/Signup2.jsx";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="user" element={<User />}>
                <Route path=":userid" element={<User />} />
            </Route>
            <Route path="github" element={<Github />} />    
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />            
            <Route path="signup/v2" element={<Signup2 />} />            
        </Route>
    ),
);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={ router }/>
    </StrictMode>
);
