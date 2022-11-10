import Image from "next/image";
import Layout from "../../components/Layout";

export default function JobDetails({ job }) {
  return (
    <Layout>
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
          <button className="text-center text-[#5964E0] hover:text-secondary-white rounded-[0.313rem] h-[3.625rem] w-[9.188rem] bg-[#5964E0]/10 hover:bg-[#5964E0] transition-all duration-0.1">Company Site</button>
        </div>
      </div>
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
