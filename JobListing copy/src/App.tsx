import React from "react";
import JobLister from "./components/JobLister";
import '@fontsource/poppins'
//import '@fontsource/epilogue'; // Defaults to weight 400

const App = () => {
  return (
    <div className="py-20 px-32">
      <div className="w-919 h-1350">
        <JobLister />
      </div>
    </div>
  );
};
// 72px, 123px, 72px, 124px
export default App;
