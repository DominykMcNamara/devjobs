import jobsData from "../../../../data.json";

const handler = async (req, res) => {
  try {
    if (jobsData) {
      res.status(200).json(jobsData);
    } else {
      res.status(404).json({ message: "Cannot find any job listings" });
    }
  } catch (err) {
    console.log(err);
  }
};

export default handler;
