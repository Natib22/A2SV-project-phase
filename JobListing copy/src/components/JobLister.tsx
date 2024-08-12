import React from "react";
import JobCard from "./JobCard";
import data from "../data/jobs.json";


const JobLister = () => {
  const jobs = data.job_postings;
  return (
    <>
      <div className="flex justify-between h-16 items-center">
        <div className="flex flex-col">
          <p className="flext justify-between text-32 w-60 font-serif text-titleColor font-extrabold leading-[38.4px]">
            Opportunities
          </p>
          <p className="text-grayParagraph text-base">Showing 73 results</p>
        </div>


        <div className="h-9">
          <p className="flex ">
            <span className="font-epilogue text-grayParagraph pr-2 leading-[25.6px]"> Sort by : </span>  Most relevant
            </p>
        </div>

        
      </div>

    {jobs.map((job) => (
      <JobCard
        title={job.title}
        image={job.image}
        company={job.company}
        about={job.about}
        description={job.description}
        responsibilities={job.responsibilities}
        ideal_candidate={job.ideal_candidate}
        when_where={job.when_where}
      />
    ))}
    
    </>
  );
};

export default JobLister;
