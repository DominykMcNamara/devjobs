import jobsData from "../../../../../data.json";

const handler = async ({ query: companyOrTitle }, res) => {
  try {
    const jobListings = jobsData.filter(
      (job) =>
        job.company.toLowerCase() === companyOrTitle || job.position.toLowerCase() === companyOrTitle
      
    );
    if (jobListings) {
      res.status(200).json(jobListings);
    } else {
      res.status(404).send(`No listings match your search.`);
    }
  } catch (err) {
    console.log(err);
  }
};

export default handler 
