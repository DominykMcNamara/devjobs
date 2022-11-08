import { useEffect, useState } from "react";
import axios from 'axios';
import { useJobListings } from '../context/JobListings'
import Layout from "../components/Layout";


export default function Home() {

  const { jobListings, setJobListings } = useJobListings()

  const fetchJobListings = async () => {
    try {
      let jobListings = await axios.get('http://localhost:3000/api/jobs')
      if(jobListings) {
        setJobListings(jobListings.data)
        console.log(jobListings.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchJobListings()
  }, []);
  return (
    <Layout>
      <>
        <h1 className="text-h1">Hello world</h1>
      </>
    </Layout>
  );
}
