"use client"
import React, { Key, useState, useMemo } from "react";
import JobCard from "./components/JobCard";
import { useGetJobsQuery } from "./features/api/apiSlice";
import { useDispatch } from "react-redux";
import { jobOrder } from "./features/data/dataSlice";
import { JobData } from "./features/api/apiInterface";

const JobLister = () => {
  const [current, setCurrent] = useState("Most relevant");

  // Fetch jobs using RTK Query
  const { data, error, isLoading } = useGetJobsQuery();

  // Access Redux dispatch function
  const dispatch = useDispatch();

  // Determine jobs based on fetched data
  const jobs = data?.data || [];

  // Define sorting functions
  const sortJobs = (jobs: JobData[], order: string): JobData[] => {
    switch (order) {
      case "alphabetical":
        return [...jobs].sort((a, b) => a.title.localeCompare(b.title));
      case "relevant":
        // Implement relevance-based sorting logic here
        return [...jobs]; // Assuming relevance sorting is not yet implemented
      default:
        return jobs;
    }
  };

  // Handle job ordering dispatch
  const handleJobOrder = (order: string) => {
   
    setCurrent(order === "relevant" ? "Most relevant" : "Alphabetically");
  };

  // Memoize sorted jobs to avoid unnecessary re-renders
  const sortedJobs = useMemo(() => sortJobs(jobs, current === "Most relevant" ? "relevant" : "alphabetical"), [jobs, current]);

  // Conditional rendering based on loading and error states
  if (isLoading) return <div>Loading...</div>;
  

  return (
    <>
      <div className="py-20 px-32">
        <div className="w-919 h-1350">
          {/* Header */}
          <div className="flex justify-between h-16 items-center">
            <div className="flex flex-col">
              <p className="flex justify-between text-32 w-60 font-poppins text-titleColor font-extrabold leading-[38.4px]">
                Opportunities
              </p>
              <p className="text-grayParagraph text-base">Showing {sortedJobs.length} results</p>
            </div>

            {/* Sort by dropdown */}
            <div className="flex items-center h-9">
              <span className="font-epilogue text-grayParagraph pr-2 leading-[25.6px]">
                Sort by:
              </span>
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="btn btn-sm">
                  {current}
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <li><a onClick={() => handleJobOrder("relevant")}>Most relevant</a></li>
                  <li><a onClick={() => handleJobOrder("alphabetical")}>Alphabetically</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Job Cards */}
          {sortedJobs.map((job: JobData, index: Key | null | undefined) => (
            <JobCard
              {...job}
              key={job.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default JobLister;
