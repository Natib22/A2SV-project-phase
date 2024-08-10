// import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../data/jobs.json'
import LeftJobDescription from '../components/LeftJobDescription'
import RightJobDescription from '../components/RightJobDescription'

const SingleJobPage = () => {
    const jobs = data.job_postings
    const index = useParams().index
    if (!index) {
        return <p>Invalid index</p>
    }
    const i = parseInt(index)
  return (
    <div className='flex gap-16 w-[1229px] h-[1064px] p-8 mx-auto '>
        <div className='flex gap-[55px] flex-col py-[46px] w-[815px] h-[1000px] bg-white'>
            <LeftJobDescription job={jobs[i]} />
        </div>


      <div className='flex flex-col gap-5 w-[293.5px] h-[674px] bg-white'>
      <RightJobDescription job={jobs[i]} />
      </div>

    </div>
  )
}




export default SingleJobPage
