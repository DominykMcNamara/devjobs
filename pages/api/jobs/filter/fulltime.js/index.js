import jobsData from '../../../../../data.json'

const handler = async (req, res) => {
    try {
        
        const jobListings = jobsData.filter((job) => job.contract === 'Full Time')
        if (jobListings) {
        res.status(200).json(jobListings)
        } else {
            res.status(404).json({ message: 'There are currently no Full Time job listings' })
        }
    } catch (err) {
        console.log(err)
    }
}

export default handler