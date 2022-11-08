import { useEffect } from 'react'
import{ useJobListings } from '../context/JobListings'
import JobListing from './JobListing'

export default function JobListings({ jobListings }) {
    return (
        <div>
            {jobListings.map(jobs => <JobListing key={jobs.id} job={jobs} />)}
        </div>
    )
}