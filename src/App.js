// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand href="/" className="Header-Text">
            Header-Router React App
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/" className="Header-Text">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/about" className="Header-Text">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/contact" className="Header-Text">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
