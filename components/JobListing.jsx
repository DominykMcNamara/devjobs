import Image from "next/image";
import { useEffect } from "react";
export default function JobListing({ job }) {
  useEffect(() => {
    console.log(job.logoBackground);
  });
  return (
    <div
      className={`w-[21.875rem] h-[14.25rem] align-center my-3 bg-secondary-white rounded-[0.375rem] `}
    >
      <div style={{ backgroundColor: job.logoBackground}} className="h-[3.125rem] w-[3.125rem] rounded-[0.938rem] py-[1rem]">
        <img src={job.logo} alt={`${job.company} company logo`} className="mx-auto"/>
      </div>
    </div>
  );
}
