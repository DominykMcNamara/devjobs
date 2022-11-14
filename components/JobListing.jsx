import Link from "next/link";
export default function JobListing({ job }) {
  return (
    <div className="desktop:w-[21.875rem]  tablet:w-[21.188rem] mobile:w-[20.438rem] desktop:h-[14.25rem] tablet:h-[15.813rem]  align-center  my-10 bg-secondary-white dark:bg-[#19202D] rounded-[0.375rem] ">
      <div
        style={{ backgroundColor: job.logoBackground }}
        className="desktop:h-[3.125rem] tablet:h-[3.125rem] tablet:w-[3.125rem]  desktop:w-[3.125rem] rounded-[0.938rem]  mobile:w-[3.125rem] mobile:h-[3.125rem] py-[1rem] relative bottom-5 left-8"
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
