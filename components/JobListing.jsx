import Link from "next/link";
export default function JobListing({ job }) {
  return (
    <div className=" flex  flex-col w-80 py-4 my-20 ml-10 bg-secondary-white dark:bg-[#19202D] rounded">
      <div
        style={{ backgroundColor: job.logoBackground }}
        className="h-16 w-16 rounded-xl py-6 relative bottom-7 left-7"
      >
        <img
          src={job.logo}
          alt={`${job.company} company logo`}
          className="mx-auto"
        />
      </div>
      <div className="pl-[2rem] mobile:py-">
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
