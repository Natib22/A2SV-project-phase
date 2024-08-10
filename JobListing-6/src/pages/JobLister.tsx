//import React from "react";
import { useState } from "react";
import JobCard from "../components/JobCard";
import data from "../data/jobs.json";


const JobLister = () => {
  const [jobs , setJobs] = useState(data.job_postings)
  const [current , setCurrent] = useState("Most relevant")

  const jobOrder = (flag: string) => {
    if (flag === "relevant") {
      // Reset to the original order
      setJobs(data.job_postings);
      setCurrent("Most relevant");
    } else if (flag === "alphabet") {
      // Sort alphabetically by title
      const sortedJobs = [...jobs].sort((a, b) => a.title.localeCompare(b.title));
      setJobs(sortedJobs);
      setCurrent("Alphabetically");
    }
  };
  
  return (
    <>
     <div className="py-20 px-32">
     <div className="w-919 h-1350">
      {/* from app.tsx */}

      <div className="flex justify-between h-16 items-center">
        <div className="flex flex-col">
          <p className="flext justify-between text-32 w-60 font-poppins text-titleColor font-extrabold leading-[38.4px]">
            Opportunities
          </p>
          <p className="text-grayParagraph text-base">Showing 73 results</p>
        </div>


       
          <div className="flex items-center h-9">
            <span className="font-epilogue text-grayParagraph pr-2 leading-[25.6px]"> Sort by : 
              </span>  
                        <div className="dropdown dropdown-hover">
                              <div tabIndex={0} role="button" className=" btn btn-sm ">{current}</div>
                              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li><a onClick={() => jobOrder("relevant")}>Most relevant</a></li>
                                <li><a onClick={() => jobOrder("alphabet")}>Alphabetically</a></li>
                              </ul>
                            </div>
            </div>
      

        
      </div>

    {jobs.map((job  , index) => (
      <JobCard
        title={job.title}
        image={job.image}
        company={job.company}
        about={job.about}
        description={job.description}
        responsibilities={job.responsibilities}
        ideal_candidate={job.ideal_candidate}
        when_where={job.when_where}
        index = {index}
       
      />
    ))}
    </div>
    </div>
    
    </>
  );
};

export default JobLister;



