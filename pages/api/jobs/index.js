import jobsData from '../../../data.json'

const handler =  (req, res) => {
 
       if (jobsData) {
        res.status(200).json(jobsData)
     
        res.status(404).json({ message: 'Cannot find any job listings'})
 
        console.log(err)
    }
}

export default handler