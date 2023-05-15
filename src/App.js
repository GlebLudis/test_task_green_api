import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chatpage from "./pages/chatpage";
import Loginpage from "./pages/loginpage";
import AuthContextProvider from "./context/AuthContext";
import ContactContextProvider from "./context/UsersContext";
import ChatContextProvider from "./context/ChatContextProvider";


function App() {
  return (
      <BrowserRouter>
              <AuthContextProvider>
                  <ContactContextProvider>
                      <ChatContextProvider>
                          <Routes>
                              <Route exact path="/login" element={<Loginpage />} />
                              <Route exact path="/" element={<Chatpage />} />
                          </Routes>
                      </ChatContextProvider>
                  </ContactContextProvider>
              </AuthContextProvider>
      </BrowserRouter>
  );
}

export default App;
