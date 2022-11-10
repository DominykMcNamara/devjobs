import jobsData from "../../../data.json";

const handler = async (req, res) => {
  try {
   res.status(200).json(jobsData);
  } catch (err) {
    console.log(err)
  }
};

export default handler;
