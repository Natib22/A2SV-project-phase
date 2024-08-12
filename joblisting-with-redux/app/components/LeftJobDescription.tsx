import React from 'react';
import checkicon from '../assets/checkicon.png';
import locationicon from '../assets/locationicon.png';
import Image from 'next/image';
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
}

// Correct the component definition
const LeftJobDescription: React.FC<{ job: JobListing }> = ({ job }) => {
    const parseTrait = (trait: string) => {
        const [label, ...textParts] = trait.split(':');
        const text = textParts.join(':').trim();
        return { label: label.trim(), text };
      };


  return (
    <>
        <div className='flex flex-col gap-4 w-full min-h-[175px] h-auto'>
            <h1 className=' text-2xl font-black leading-[28.8px] text-left'>Description</h1>
            <p className='text-base leading-[25.6px] text-left font-normal'>{job.description}</p>

        </div>
      
        <div className='flex flex-col gap-4 w-full min-h-[207px] h-auto'>
            <h1 className='text-2xl font-black leading-[28.8px] text-left'>Responsibilities</h1>
            <ul className='space-y-2'>
            {job.responsibilities.map((responsibility, index) => (
                <li key={index} className='flex '>
                    <Image src={checkicon} alt="Checked Icon" className="w-[20px] h-[20px]" />
                    <p className='ml-2 text-base leading-[25.6px] text-left font-normal'>{responsibility}</p>
                 </li>
            ))}

            </ul>
           
        </div>

         
        <div className='flex flex-col gap-4 w-full min-h-[265px] h-auto'>
            <h1 className='text-2xl font-black leading-[28.8px] text-left'>ideal candidate we want</h1>
            {/* <p className=''>Age: {job.ideal_candidate.age}</p> */}
            <ul className='list-disc pl-5'>
                {job.ideal_candidate.traits.map((trait , index ) => {
                    const { label, text } = parseTrait(trait);
                    return (
                        <li key ={index}className=''>
                            <p className='text-base leading-[25.6px] text-left font-normal'><span className='text-base leading-[25.6px] text-left font-semibold'>{label}: </span>{text}</p>
                        </li>
                    );
                })}
            </ul>
               
            </div>

        <div className='flex flex-col gap-6 w-[724px] min-h-[96px] h-auto'>
            <h1 className='text-2xl font-black leading-[28.8px] text-left'>When & Where</h1>
            <div className=' flex w-[815px] items-center gap-4'>
                <Image src={locationicon} alt="loc" className="w-[44px] h-[44px]" />
            <p className='text-base leading-[25.6px] text-left font-normal'>{job.when_where}</p>
            </div>
            
        </div>
   
    </>
  );
}









export default LeftJobDescription;
