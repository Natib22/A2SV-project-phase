// import React from "react";

import imageMap from "../assets/ImageMap";
import { useNavigate } from "react-router-dom";


interface IdealCandidate {
  age: string;
  gender: string;
  traits: string[];
}

interface About {
  posted_on: string;
  deadline: string;
  location: string;
  start_date: string;
  end_date: string;
  categories: string[];
  required_skills: string[];
}

interface JobListing {
  title: string;
  description: string;
  responsibilities: string[];
  ideal_candidate: IdealCandidate;
  when_where: string;
  about: About;
  company: string;
  image: string;
  index: number

}


// Usage



const JobCard = ({title , image,company , about , description , index }: JobListing) => {
  
  const imageSrc = imageMap[image] || imageMap['job1.png'];
  const navigate = useNavigate()
  
  return <div onClick={() => navigate(`/job/${index}`)} className="flex justify-evenly h-[262px] mt-8 rounded-3xl p-[26px] gap-6 border border-[#D6DDEB] hover:bg-gray-200 ">
    
      <img className="h-[59px] w-[66px]" src={imageSrc} alt="job image" />
    

    <div className="flex gap-2 flex-col  ">
    <p className="text-xl">{title}</p>
    <p className="text-grayParagraph text-base font-extralight">{company} . {about.location}</p>
    <p className="text-base font-extralight text-justify font-sans text-[#25324B] leading-relaxed">{description}</p>

    <div className="flex justify-between items-center w-[260px] h-8 mt-3">
      <p className="flex items-center bg-[#56CDAD1A] text-xs text-[#56CDAD] rounded-2xl h-full w-[76] py-1 px-2">in person</p>
      <p>|</p>
      <p  className="flex justify-center items-center text-xs text-yellow-500 border-yellow-500 min-w-20 max-w-24 border rounded-2xl h-full py-1 px-2">{about.categories[0]}</p>
      <p className="flex justify-center items-center text-xs text-blue-900 border-blue-900 min-w-20 w-auto border rounded-2xl h-full py-1 px-2">{about.categories[1]}</p>

    </div>

    </div>
  </div>;
};

export default JobCard;
