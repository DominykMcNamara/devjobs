import { useEffect, useState } from "react";
import { useJobListings } from "../context/JobListings";
import Image from "next/image";
import SearchIcon from "/public/assets/desktop/icon-search.svg";
import LocationIcon from "/public/assets/desktop/icon-location.svg";
import FilterIcon from "/public/assets/mobile/icon-filter.svg";
import Modal from "./Modal";
import axios from "axios";
export default function SearchBar({ mobileLocation, mobileFullTime }) {
  const { setJobListings } = useJobListings();
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [fullTime, setFullTime] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async () => {
    if (
      !searchTerm &&
      (!location || !mobileLocation) &&
      (!fullTime || !mobileFullTime)
    ) {
      const jobListings = await axios.get("http://localhost:3000/api/jobs");
      setJobListings(jobListings.data);
    } else if (
      !searchTerm &&
      (!location || !mobileLocation) &&
      (fullTime || mobileFullTime)
    ) {
      const jobListings = await axios.get(
        "http://localhost:3000/api/jobs/filter/fulltime"
      );
      setJobListings(jobListings.data);
    } else if (searchTerm && (!location || !mobileLocation) && (!fullTime || !mobileFullTime)) {
      const jobListings = await axios.get(`http://localhost:3000/api/jobs/filter/companyortitle/${searchTerm}`)
      setJobListings(jobListings.data)
    } 
    else {
      const jobListings = await axios.get(
        `http://localhost/api/jobs/filter/${searchTerm ? searchTerm : "''"}/${
          location || mobileLocation ? location : "''"
        }/${fullTime || mobileFullTime ? "Full Time" : ""}`
      );
      setJobListings(jobListings.data);
    }
  };
  useEffect(() => {
    console.log(searchTerm);
  });

  return (
    <div>
      {showModal ? (
        <div id="modal-root" className="w-80 h-80 mx-auto">
          {" "}
          <Modal
            modal={showModal}
            searchTerm={searchTerm}
            showModal={setShowModal}
          />
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="w-80 mx-auto justify-around text-h3 dark:divide-[#6E8098] relative  bottom-9 flex flex-row py-4 bg-secondary-white dark:bg-[#19202D] rounded-[0.375rem] ">
            <label for="companyOrSearchTerm" className="">
              <button
                className="relative  left-3/4 top-1"
                onClick={() => setShowModal(true)}
              >
                <Image
                  src={FilterIcon}
                  alt="Filter Icon"
                  height={24}
                  width={24}
                />
              </button>

              <Image
                src={SearchIcon}
                height={24}
                width={24}
                alt="Icon shaped like a magnifying glass"
                className="relative top-8 hidden"
              />
              <input
                className=" focus:outline-0 desktop:w-[23rem] dark:bg-[#19202D] "
                name="companyOrSearchTerm"
                placeholder="Enter job desc..."
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                className="bg-[#5964E0] p-2 text-secondary-white dark:text-secondary-white rounded-[0.375rem]"
              >
                &#x1F50E;&#xFE0E;
              </button>
            </label>

            <label for location className="p-3">
              <Image
                src={LocationIcon}
                height={24}
                width={24}
                alt="Icon shaped like a magnifying glass"
                className="relative top-8 hidden"
              />
              <input
                className=" focus:outline-0 desktop:w-[18rem] p-3 ml-10 hidden"
                name="location"
                placeholder="Filter by location..."
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </label>

            <label
              for="fullTime"
              className="mx-auto font-bold text-p text-[#19202D] my-auto  flex flex-row dark:text-secondary-white hidden"
            >
              <input
                type="checkbox"
                name="fullTime"
                checked={fullTime}
                onChange={() => setFullTime(!fullTime)}
              />
              Full Time
            </label>
            <button
              className="desktop:ml-10 tablet:mt-4 tablet:p-3 h-[3rem] desktop:w-[7.688rem] tablet-[5rem] bg-[#5964E0] hover:bg-[#939BF4] rounded-[0.313rem] mobile:my-3 text-secondary-white font-bold text-p text-center hidden"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
