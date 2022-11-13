import { Formik, Form, Field } from "formik";
import { useJobListings } from "../context/JobListings";
import Image from "next/image";
import axios from "axios";
import { TextInput } from "./TextInput";
import SearchIcon from "/public/assets/desktop/icon-search.svg";
import LocationIcon from "/public/assets/desktop/icon-location.svg";
import { calculateSizeAdjustValues } from "next/dist/server/font-utils";
export default function SearchBar() {
  const { setJobListings } = useJobListings();
  return (
    <div className=" mx-auto flex flex-row justify-center h-[5rem] align-center text-p ">
      <Formik
        initialValues={{
          companyOrSearchTerm: "",
          location: "",
          fullTime: false,
        }}
        onSubmit={async (values) => {
          if (
            !values.companyOrSearchTerm &&
            !values.location &&
            !values.fullTime
          ) {
            const allListings = await axios.get(
              "http://localhost:3000/api/jobs"
            );
            setJobListings(allListings.data);
          } else if (
            !values.companyOrSearchTerm &&
            !values.location &&
            values.fullTime
          ) {
            const jobListings = await axios.get(
              "http://localhost:3000/api/jobs/filter/fulltime"
            );
            console.log(jobListings);
            setJobListings(jobListings.data);
          } else {
            const jobListings = await axios.get(
              `http://localhost:3000/api/jobs/filter/${
                values.companyOrSearchTerm ? values.companyOrSearchTerm : "''"
              }/${values.location ? values.location : "''"}/${
                values.fullTime ? "Full Time" : ""
              }`
            );
            setJobListings(jobListings.data);
          }
        }}
      >
        <Form>
          <div className="divide-x relative bottom-[2rem] flex flex-row w-[69.375rem] bg-secondary-white dark:bg-[#19202D]  rounded-[0.375rem] ">
            <label className="p-3">
              <Image
                src={SearchIcon}
                height={24}
                width={24}
                alt="Icon shaped like a magnifying glass"
                className="absolute top-6 ml-2"
              />
              <TextInput
                className=" focus:outline-0 w-[23rem] p-3 ml-10"
                name="companyOrSearchTerm"
                placeholder="Filter by title, companies, expertise..."
                type="text"
              />
            </label>
            <label className="p-3">
              <Image
                src={LocationIcon}
                height={24}
                width={24}
                alt="Icon shaped like a magnifying glass"
                className="absolute top-4 ml-2 "
              />
              <TextInput
                className=" focus:outline-0 w-[18rem] p-3 ml-10"
                name="location"
                placeholder="Filter by location..."
                type="text"
              />
            </label>

            <label className="p-4 font-bold text-p text-[#19202D] ">
              <Field type="checkbox" name="fullTime" className="" />
              Full Time Only
              <button
                className="ml-10 h-[3rem] w-[7.688rem] bg-[#5964E0] rounded-[0.313rem] text-secondary-white font-bold text-p text-center"
                type="submit"
              >
                Search
              </button>
            </label>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
