import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router'
import Layout from "../../components/Layout";

export default function JobDetails({ job }) {
  const router = useRouter()
 if (router.isFallback) {
  return(
    <div>Locading.....</div>
  )
 } else {
    return (
      <Layout>
        {/* JOB HEADER */}
        <div
          className="flex flex-col w-[20.438rem] h-[12.813rem] align-center rounded-[0.375rem] px-[7.75rem]  text-center  mx-auto relative bottom-8
                    md:flex-row md:w-[43.063rem] md:h-[8.75rem] md:justify-between md:px-0
                       bg-secondary-white dark:bg-[#19202D]"
        >
          <div
            style={{ backgroundColor: job.logoBackground }}
            className=" w-[3.125rem] h-[3.125rem] rounded-[0.375rem] relative bottom-[1rem] left-[1rem]
                      md:w-[8.75rem] md:h-[8.75rem] md:-left-[0rem] md:top-[0rem]"
          >
            <Image
              src={job.logo}
              alt={`${job.company} logo`}
              height={23}
              width={81}
              className="mx-auto py-[1rem]
                      md:py-[4rem]"
            />
          </div>
          <div
            className="relative
                        md:my-[2.5rem] md:right-[8rem]"
          >
            <h3
              className="text-h3 font-bold 
                        dark:text-secondary-white text-[#19202D]"
            >
              {job.company}
            </h3>
            <p
              className="text-p  mt-[0.5rem] 
                        text-secondary-darkGrey"
            >
              {job.company}.com
            </p>
          </div>
          <div className="">
            <Link href={`${job.website}`}>
              {" "}
              <button
                className="text-center w-[9.188rem] h-[3rem] mt-[2rem] relative right-[3rem]   rounded-[0.313rem]  
                              text-[#5964E0] font-bold dark:text-secondary-white bg-[#5964E0]/10"
              >
                Company Site
              </button>
            </Link>
          </div>
        </div>
        {/* JOB DESCRIPTION */}
        <div
          className=" w-[20.438rem]  rounded-[0.375rem] mx-auto
                      md:w-[43.063rem]
                      bg-secondary-white dark:bg-[#19202D]"
        >
          <div className="py-[2.5rem] px-[1.5rem]">
            <div className="desktop:w-[39.38rem]">
              <p className="text-p text-secondary-darkGrey ">
                {job.postedAt} &bull; {job.contract}
              </p>
              <div className="flex flex-col">
                <h3 className="text-h3 font-bold my-[0.75rem]">
                  {job.position}
                </h3>
                <h4 className="text-h4 text-[#5964E0] font-bold">
                  {job.location}
                </h4>
                <Link href={`${job.apply}`}>
                  {" "}
                  <button
                    className="w-[17.438rem] h-[2.5rem] mt-[3.375rem] relative   text-center rounded-[0.313rem] bg-[#5964E0]
                                  md:w-[8.813rem] md:h-[3rem] md:left-[28rem] md:bottom-[7.5rem]
                                  text-secondary-white"
                  >
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-[2.75rem]  px-[1.5rem]">
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
        <footer
          className="w-screen  flex  h-[6rem] p-[1.5rem] mx-auto align-center justify-around mt-[5.5rem] rounded-[0.375rem]
                          bg-secondary-white dark:bg-[#19202D] "
        >
          <div
            className="hidden
                        md:inline-block"
          >
            <h3 className="text-h3 font-bold text-[#19202D] dark:text-secondary-white">
              {job.position}
            </h3>
            <p className="text-p text-secondary-darkGrey desktop:mt-[1.75rem] tablet:my-[1rem]">
              So Digital Inc
            </p>
          </div>
          <Link href={`${job.apply}`}>
            {" "}
            <button
              className="w-[20.438rem] h-[3rem]   text-center rounded-[0.313rem] 
                              md:w-[8.813rem] 
                              text-secondary-white
                              bg-[#5964E0]/50  bg-[#5964E0]"
            >
              Apply Now
            </button>
          </Link>
        </footer>
      </Layout>
    );
  }
}

export const getServerSideProps = async (context) => {
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
    fallback: true,
  };
};
