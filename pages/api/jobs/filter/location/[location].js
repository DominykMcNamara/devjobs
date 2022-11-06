import jobsData from '../../../../../data.json'

const handler = async ({ query: { location }}, res) => {
    try {
        const jobListing = jobsData.filter(job => job.location === location)
        if (jobListing) {
            res.status(200).json(jobListing)
            console.log(location)
        } else {
            res.status(404).json({ message: `There are currently no job listings for jobs located in ${ location }`})
        }
    } catch (err){
        console.log(err)
    }
}

export default handler