import jobsData from "../../../../data.json";

const handler = async (req, res) => {
  try {
    const { slug } = req.query;
    const jobListings = jobsData.filter(
      (job) =>
        job.location.toLowerCase() === slug[0].toLowerCase() ||
        job.position.toLowerCase() === slug[1].toLowerCase() 
     
    );
    if (jobListings) {
      res.status(200).json(jobListings);
      console.log(jobListings);
    } else {
      res
        .status(404)
        .json({ message: `No job listings match your search criteria` });
    }
  } catch (err) {
    console.log(err);
  }
};

export default handler;
