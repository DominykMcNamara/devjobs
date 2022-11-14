import jobsData from "../../../../data.json";

const handler = async (req, res) => {
  try {
    const { slug } = req.query;
    if (slug[0] === "''" && slug[1] === "''") {
      res.status(200).json(jobsData);
    }
    const jobListings = jobsData.filter(
      (job) =>
        (job.position.toLowerCase() === slug[0].toLowerCase() ||
          job.company.toLowerCase() === slug[0].toLowerCase() ||
          job.location.toLowerCase() === slug[1].toLowerCase()) &&
       ( job.contract === "Full Time" || job.contract === "Part Time")
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
