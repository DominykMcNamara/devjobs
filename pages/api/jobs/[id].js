import jobsData from "../../../data.json";

const handler = async ({ query: { id } }, res) => {
  try {
    const jobListing = jobsData.filter((job) => (job.id === parseInt(id)));
    if (jobListing) {
     await res.status(200).json(jobListing[0]);
    } else {
      res
        .status(404)
        .json({ message: `Job listing with an id of ${id} cannot be found.` });
    }
  } catch (err) {
    console.log(err);
  }
};

export default handler;
