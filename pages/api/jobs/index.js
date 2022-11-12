import jobsData from "../../../data.json";

const handler = async (req, res) => {
   res.status(200).json(jobsData);
};

export default handler;
