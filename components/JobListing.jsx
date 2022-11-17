import Link from "next/link";
export default function JobListing({ job }) {
  return (
    <div className="w-[20.538rem] h-[14.25rem] flex  flex-col pb-[2rem] pl-[0.5rem] my-20 ml-10 rounded
                    sm:ml-40
                    md:ml-7
                    bg-secondary-white dark:bg-[#19202D] ">
      <div
        style={{ backgroundColor: job.logoBackground }}
        className=" w-[3.125rem] h-[3.125rem]  rounded-[0.938rem] py-[1rem] relative bottom-[1rem] left-[2rem]"
      >
        <img
          src={job.logo}
          alt={`${job.company} company logo`}
          className="mx-auto"
        />
      </div>
      <div className="pl-[2rem] mt-[0.5rem] ">
        <p className="text-p text-secondary-darkGrey ">
          {job.postedAt} &bull; {job.contract}
        </p>
        <Link href={`/details/${job.id}`}>
          <h3 className="text-h3 text-[#1902D] font-bold mt-3 hover:underline">
            {job.position}
          </h3>
        </Link>
        <p className="text-p text-secondary-darkGrey mt-3">{job.company}</p>

        <h4 className="text-h4 text-[#5964E0] font-bold mt-10">
          {job.location}
        </h4>
      </div>
    </div>
  );
}

