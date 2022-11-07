import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextInput } from "./TextInput";
import SearchIcon from "../assets/desktop/icon-search.svg"
import LocationIcon from "../assets/desktop/icon-location.svg"
export default function SearchBar() {
  return (
    <div className="flex flex-row justify-center w-[69.375]rem h-[5rem] rounded  p-2 text-p ">
      <Formik
        initialValues={{
          companyOrSearchTerm: "",
          location: "",
          fullTime: false,
        }}
      >
        <Form>
          <div className="divide-x divide-neutral-100/25 relative bottom-[2rem]  bg-secondary-white p-2">
            <TextInput
              className=" focus:outline-0 p-3"
              name="companyOrSearchTerm"
              placeholder="Filter by title or company"
              type="text"
            />
            <TextInput
              className=" focus:outline-0 p-3"
              name="location"
              placeholder="location"
              type="text"
            />

            <label className="p-3 font-bold text-p text-[#19202D] ">
              <Field type="checkbox" name="fullTime" className="" />
                Full Time Only
              <button className="ml-2 h-[3rem] w-[7.688rem] bg-[#5964E0] rounded text-secondary-white font-bold text-p text-center" type="submit">
                Search
              </button>
            </label>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
