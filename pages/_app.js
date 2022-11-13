import { JobListingsProvider } from "../context/JobListings";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <JobListingsProvider>
        <Component {...pageProps} />
      </JobListingsProvider>
    </ThemeProvider>
  );
}

export default MyApp;
