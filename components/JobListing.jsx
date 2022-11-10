import Link from "next/link";
import { useEffect } from "react";
export default function JobListing({ job }) {

  return (
    <div
      className="w-[21.875rem] h-[14.25rem] align-center my-10 bg-secondary-white rounded-[0.375rem]  "
    >
      <div
        style={{ backgroundColor: job.logoBackground }}
        className="h-[3.125rem] w-[3.125rem] rounded-[0.938rem] py-[1rem] relative bottom-5 left-8"
      >
         
        <img
          src={job.logo}
          alt={`${job.company} company logo`}
          className="mx-auto"
        />
      </div>
      <div className="pl-[2rem] ">
        <p className="text-p text-secondary-darkGrey ">
          {job.postedAt} &bull; {job.contract}
        </p>
        <Link href={`/details/${job.id}`}><h3 className="text-h3 text-[#1902D] font-bold mt-3 hover:underline">{job.position}</h3></Link>
        <p className="text-p text-secondary-darkGrey mt-3">{job.company}</p>
      

      <h4 className="text-h4 text-[#5964E0] font-bold mt-10">
        {job.location}
      </h4>
      </div>
     
    </div>
  );
}
