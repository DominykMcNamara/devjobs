import jobsData from "../../../../data.json";

const handler = async (req, res) => {
  try {
    const fullTimeListings = jobsData.filter(
      (job) => job.contract === "Full Time"
    );
    if (fullTimeListings) {
      res.status(200).json(fullTimeListings);
    } else {
      res
        .status(404)
        .json({ message: "No full time job listings can be found" });
    }
  } catch (err) {
    console.log(err);
  }
};

export default handler;
