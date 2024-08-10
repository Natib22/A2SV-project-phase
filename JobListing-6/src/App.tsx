import React from "react";
import JobLister from "./pages/JobLister";
import SingleJobPage from "./pages/SingleJobPage";
import '@fontsource/poppins'
//import '@fontsource/epilogue'; // Defaults to weight 400

import { createRoutesFromElements , Route , createBrowserRouter,RouterProvider } from "react-router-dom";

const route = createBrowserRouter(
  createRoutesFromElements (
    <>
    <Route path="/" element={<JobLister />} />
    <Route path="/job/:index" element={<SingleJobPage/>} />
    </>
      
  )
)
const App = () => {
  return (
    
        <RouterProvider router={route}/>
         
  );
};
// 72px, 123px, 72px, 124px
export default App;
