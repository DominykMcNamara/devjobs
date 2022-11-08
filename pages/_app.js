import { JobListingsProvider } from "../context/JobListings";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <JobListingsProvider>
      <Component {...pageProps} />
    </JobListingsProvider>
  );
}

export default MyApp;
