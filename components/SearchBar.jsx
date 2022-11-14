import { useState } from "react";
import { useJobListings } from "../context/JobListings";
import Image from "next/image";
import SearchIcon from "/public/assets/desktop/icon-search.svg";
import LocationIcon from "/public/assets/desktop/icon-location.svg";
import FilterIcon from "/public/assets/mobile/icon-filter.svg";
export default function SearchBar() {
  const { setJobListings } = useJobListings();
  const [searchTerm, setsearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [fullTime, setFullTime] = useState(false);
  return (
    <form>
      <div className="w-80 mx-auto justify-around text-h3 dark:divide-[#6E8098] relative  bottom-9 flex flex-row py-4 bg-secondary-white dark:bg-[#19202D] rounded-[0.375rem] ">
        <label for="companyOrSearchTerm" className="">
          <button className="relative left-3/4 top-1"   data-modal-toggle="defaultModal">
          <Image
            src={FilterIcon}
            alt="Filter Icon"
            height={24}
            width={24}
       
           
            
          />
          </button>

          <div id="defaultModal" tabindex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
           <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
      
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          
            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Terms of Service
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
     
            <div className="p-6 space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>
        
            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button data-modal-toggle="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button  data-modal-toggle="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
            </div>
        </div>
    </div>
</div>
          
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
            onChange={(e) => setsearchTerm(e.target.value)}
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
  );
}
