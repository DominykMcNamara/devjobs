import jobsData from '../../../../../data.json'

const handler = async ({ query: { location }}, res) => {
    try {
        const jobListing = jobsData.filter(job => job.location === location)
    } catch (err){
        console.log(err)
    }
}