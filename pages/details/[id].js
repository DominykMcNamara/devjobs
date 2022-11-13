import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";

export default function JobDetails({ job }) {
  return (
    <Layout>
      {/* JOB HEADER */}
      <div className="flex flex-row justify-between align-center rounded-[0.375rem] w-[45.625rem] h-[8.75rem] bg-secondary-white mx-auto relative bottom-8">
        <div
          style={{ backgroundColor: job.logoBackground }}
          className=" w-[8.125rem] h-[8.75rem]  rounded-l-[0.375rem]"
        >
          <Image
            src={job.logo}
            alt={`${job.company} logo`}
            height={23}
            width={81}
            className="mx-auto my-[3.688rem]"
          />
        </div>
        <div className="mt-[2.875rem] mr-[18.438rem]">
          <h3 className="text-h3 font-bold text-[#19202D]">{job.company}</h3>
          <p className="text-p text-secondary-darkGrey">{job.company}.com</p>
        </div>
        <div className="mt-[2.875rem] mr-[2.688rem] ">
          <Link href={`${job.website}`}>
            {" "}
            <button className="text-center text-[#5964E0] hover:text-secondary-white rounded-[0.313rem] h-[3.625rem] w-[9.188rem] bg-[#5964E0]/10 hover:bg-[#5964E0] transition-all duration-0.1">
              Company Site
            </button>
          </Link>
        </div>
      </div>
      {/* JOB DESCRIPTION */}
      <div className="w-[45.625rem] h-[100vh] bg-secondary-white rounded-[0.375rem] mx-auto">
        <div className="px-11">
          <div className="w-[39.38rem]">
            <p className="text-p text-secondary-darkGrey ">
              {job.postedAt} &bull; {job.contract}
            </p>
            <div className="flex flex-row align-center justify-between">
              <h3 className="text-h3 font-bold mt-1">{job.position}</h3>
              <Link href={`${job.apply}`}>
                {" "}
                <button className="h-[3rem] text-[#5964E0] hover:text-secondary-white w-[8.813rem] text-center rounded-[0.313rem] bg-[#5964E0]/50  bg-[#5964E0]/10 hover:bg-[#5964E0] transition-all duration-0.1">
                  Apply Now
                </button>
              </Link>
            </div>
            <h4 className="text-h4 text-[#5964E0] font-bold">{job.location}</h4>
          </div>
        </div>

        <div className="w-[693px] h-[234px] p-[3rem] mt-[2.75rem]">
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
      <footer className="w-screen bg-secondary-white flex align-center px-[24rem] justify-around h-[6rem] mt-[5.5rem] rounded-[0.375rem] py-3">
        <div>
          <h3 className="text-h3 font-bold text-[#19202D]">{job.position}</h3>
          <p className="text-p text-secondary-darkGrey mt-[1.75rem]">
            So Digital Inc
          </p>
        </div>
        <Link href={`${job.apply}`}>
          {" "}
          <button className="h-[3rem] text-[#5964E0] hover:text-secondary-white w-[8.813rem] text-center rounded-[0.313rem] bg-[#5964E0]/50  bg-[#5964E0]/10 hover:bg-[#5964E0] transition-all duration-0.1">
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
