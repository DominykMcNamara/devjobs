import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";

export default function JobDetails({ job }) {
  return (
    <Layout>
      {/* JOB HEADER */}
      <div className="flex flex-row justify-between align-center rounded-[0.375rem] desktop:w-[45.625rem] tablet:w-[43.063rem] desktop:h-[8.75rem] bg-secondary-white dark:bg-[#19202D] mx-auto relative bottom-8">
        <div
          style={{ backgroundColor: job.logoBackground }}
          className=" desktop:w-[8.125rem] desktop:h-[8.75rem] tablet:w-[8.75rem] tablet:h-[8.75rem]  rounded-l-[0.375rem]"
        >
          <Image
            src={job.logo}
            alt={`${job.company} logo`}
            height={23}
            width={81}
            className="mx-auto my-[3.688rem]"
          />
        </div>
        <div className="mt-[2.875rem] desktop:mr-[18.438rem] tablet:mr-[13rem]">
          <h3 className="text-h3 font-bold dark:text-secondary-white text-[#19202D]">
            {job.company}
          </h3>
          <p className="text-p text-secondary-darkGrey">{job.company}.com</p>
        </div>
        <div className="mt-[2.875rem] mr-[2.688rem] ">
          <Link href={`${job.website}`}>
            {" "}
            <button className="text-center  text-[#5964E0] font-bold dark:text-secondary-white  rounded-[0.313rem] desktop:h-[3.625rem] desktop:w-[9.188rem]  tablet:h-[3.625rem] tablet:w-[9.188rem] bg-[#5964E0]/10">
              Company Site
            </button>
          </Link>
        </div>
      </div>
      {/* JOB DESCRIPTION */}
      <div className="desktop:w-[45.625rem] tablet:w-[43.063rem] desktop:h-[100vh] bg-secondary-white dark:bg-[#19202D] rounded-[0.375rem] mx-auto">
        <div className="px-12 pt-1">
          <div className="desktop:w-[39.38rem]">
            <p className="text-p text-secondary-darkGrey ">
              {job.postedAt} &bull; {job.contract}
            </p>
            <div className="flex flex-row align-center justify-between">
              <h3 className="text-h3 font-bold mt-1">{job.position}</h3>
              <Link href={`${job.apply}`}>
                {" "}
                <button className="desktop:h-[3rem] tablet:h-[3rem] text-secondary-white desktop:w-[8.813rem]   tablet:w-[8.813rem] text-center rounded-[0.313rem] bg-[#5964E0]">
                  Apply Now
                </button>
              </Link>
            </div>
            <h4 className="text-h4 text-[#5964E0] font-bold">{job.location}</h4>
          </div>
        </div>

        <div className="desktop:w-[693px] desktop:h-[234px] p-[3rem] mt-[2.75rem]">
          <p className="text-p text-secondary-darkGrey">{job.description}</p>
          {/* JOB REQUIREMENTS */}
          <div className="mt-[2.5rem]">
            <h3 className="text-h3 font-bold"> Requirements</h3>{" "}
            <p className="text-p text-secondary-darkGrey mt-[1.75rem]">
              {job.requirements.content}
            </p>
            <ul className="list-disc mt-[1.75rem] marker:text-[#5964E0] p-3">
              {job.requirements.items.map((jobItems) => (
                <li className="text-secondary-darkGrey p-1" key={job.id}>
                  {jobItems}
                </li>
              ))}
            </ul>
          </div>
          {/* WHAT YOU WILL DO */}
          <div className="mt-[2.5rem]">
            <h3 className="text-h3 font-bold">What will you do</h3>
            <p className="text-p text-secondary-darkGrey mt-[1.75rem]">
              {job.role.content}
            </p>
            <ul className="list-decimal mt-[1.75rem] marker:text-[#5964E0] marker:font-bold px-3 mb-2">
              {job.role.items.map((jobItems) => (
                <li className="text-secondary-darkGrey p-1" key={job.id}>
                  {jobItems}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="w-screen bg-secondary-white dark:bg-[#19202D] flex  align-center desktop:px-[24rem] justify-around desktop:h-[6rem] mt-[5.5rem] rounded-[0.375rem] desktop:py-3 tablet:py-1">
        <div>
          <h3 className="text-h3 font-bold text-[#19202D] dark:text-secondary-white">
            {job.position}
          </h3>
          <p className="text-p text-secondary-darkGrey desktop:mt-[1.75rem] tablet:my-[1rem]">
            So Digital Inc
          </p>
        </div>
        <Link href={`${job.apply}`}>
          {" "}
          <button className="h-[3rem] text-secondary-white w-[8.813rem] text-center rounded-[0.313rem] bg-[#5964E0]/50  bg-[#5964E0]">
            Apply Now
          </button>
        </Link>
      </footer>
    </Layout>
  );
}

export const getStaticProps = async (context) => {
  const job = await (
    await fetch(`http://localhost:3000/api/jobs/${context.params.id}`)
  ).json();
  return {
    props: {
      job,
    },
  };
};

export const getStaticPaths = async () => {
  const jobs = await (await fetch(`http://localhost:3000/api/jobs`)).json();
  const ids = jobs.map((job) => job.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};
