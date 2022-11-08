import { Formik, Form, Field } from "formik";
import Image from "next/image";
import axios from "axios";
import * as Yup from "yup";
import { TextInput } from "./TextInput";
import SearchIcon from "../assets/desktop/icon-search.svg"
import LocationIcon from "../assets/desktop/icon-location.svg"
export default function SearchBar() {
  return (
    <div className=" mx-auto flex flex-row justify-center w-screen h-[5rem] align-center  p-2 text-p ">
      <Formik
        initialValues={{
          companyOrSearchTerm: "",
          location: "",
          fullTime: true,
        }}
        onSubmit={ async (values) => {
          const jobListings = await axios.get(`http://localhost:3000/api/jobs/filter/${values.companyOrSearchTerm ? values.companyOrSearchTerm : "''"}/${values.location ? values.location : "''"}/${values.fullTime ? 'Full Time' : 'Part Time'}`)
          console.log(jobListings)
        }}
      >
        <Form>
          <div className="divide-x relative bottom-[2rem] flex flex-row bg-secondary-white rounded ">
            <label className="p-3">
            <Image src={SearchIcon} height={24} width={24} alt="Icon shaped like a magnifying glass" className="absolute top-4 ml-2" />
            <TextInput
              className=" focus:outline-0 p-3 ml-10"
              name="companyOrSearchTerm"
              placeholder="Filter by title or company"
              type="text"
            />
           
            </label>
            <label className="p-3">
          <Image src={LocationIcon} height={24} width={24} alt="Icon shaped like a magnifying glass" className="absolute top-4 ml-2 " />
            <TextInput
              className=" focus:outline-0 p-3 ml-10"
              name="location"
              placeholder="location"
              type="text"
            />
            </label>

            <label className="p-4 font-bold text-p text-[#19202D] ">
              <Field type="checkbox" name="fullTime" className="" />
                Full Time Only
              <button className="ml-4 h-[3rem] w-[7.688rem] bg-[#5964E0] rounded text-secondary-white font-bold text-p text-center" type="submit">
                Search
              </button>
            </label>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
