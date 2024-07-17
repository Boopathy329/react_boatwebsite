import React from "react";
import Menubar from "./Menubar";
import Footer from "./Footer";
import CopyRight from "./CopyRight";
import MainPage from './MainPage'
import ContactUs from './ContactUs'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <>
      <Menubar />
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
      <CopyRight />
    </>
  );
};

export default HomeLayout;
