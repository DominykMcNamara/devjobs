
import Image from "next/image";
import Layout from "../../components/Layout";

export default function JobDetails({ job }) {
  return(
    <Layout>
        <div className="flex flex-row w-[45.625rem] h-[8.75rem] bg-secondary-white mx-auto">
            <div style={{backgroundColor: job.logoBackground}}>
            <Image src={job.logo} alt={`${job.company} logo`} height={23} width={81}/>
            </div>
        </div>
    </Layout>
  )
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
