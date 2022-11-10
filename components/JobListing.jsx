import Image from "next/image";
import { useEffect } from "react";
export default function JobListing({ job }) {
  useEffect(() => {
    console.log(job.logo);
  });
  return (
    <div className="w-[21.875rem] h-[14.25rem] align-center my-3 bg-secondary-white">
      <Image src={job.logo} alt={ `${job.company} company logo`} height={10} width={10}  />
    </div>
  );
}
