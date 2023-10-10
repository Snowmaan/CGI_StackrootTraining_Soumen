import React from 'react';
import Navbar from "./Navbar"
import ContactUs from "./Pages/ContactUs"
import Products from "./Pages/Products"
import Login from "./Pages/ContactUs"
import Register from "./Pages/ContactUs"


function App(){
    let Component
    switch(window.location.pathname){
        case "/":
            Component = App
            break
        case "/products":
            Component = Products
            break
        case "/contact":
            Component = ContactUs
            break
        case "/login":
            Component = Login
            break
        case "/register":
            Component = Register
            break
        default:
        // do nothing
    }
    return(
        <>
        <Navbar/>
        <Component/>
        </>
    );
}
export default App