import Card from "./Card";
import Section from "./Section";

const Data = () => {
  return (
    <Section id="data" crosses>
      <h1 class="mb-6 text-center font-bold h3">
        By going around the Net, we've collected our data and curated our
        dataset
      </h1>
      <h6 class="mb-6 text-center text-s text-zinc-200 md:text-m lg:max-w-[80rem] max-w-[30rem] mx-auto">
        This dataset combines agricultural and climate data to investigate how
        climate change affects crop productivity. It tracks crop types, planted
        areas, and yields across various locations. Detailed climate records
        include temperature fluctuations, rainfall patterns, and extreme weather
        events during growing seasons. This dataset allows researchers to
        analyze the complex relationship between climate shifts and agricultural
        output.
      </h6>

      <h1 class="mb-6 text-center text-md font-bold md:text-xl">
        We've collected our data using these methods.
      </h1>
      <div class="mx-auto my-16 flex max-w-6xl flex-wrap justify-center gap-8">
        <Card
          title={"Web Scraping"}
          description={
            "Using the Python library BeautifulSoup and Pandas, we were able to gather the weather data of the Philippines from 2022 to 2023 that was saved in https://www.timeanddate.com/. The weather data comes from CustomWeather. They use weather stations at airports, stations run by the World Meteorological Association (WMO), and MADIS weather stations."
          }
        />
        <Card
          title={"Searching for Datasets at Data Sources"}
          description={
            "We compiled data on the Philippines' agricultural productivity using publicly available datasets from reputable government websites and data banks. To analyze the potential effects of climate change, we also utilized these sources for mean temperatures, precipitation values, and natural disaster rates. The data was easily accessible in spreadsheet format for integration into our analysis."
          }
        />
      </div>

      <a
        href="https://docs.google.com/spreadsheets/d/1gx7ilsIonUnIj6dw3_6q6TYysuj5v-BT3AAQr11UcOU/edit?usp=sharing"
        className="relative flex"
      >
        <button className="mx-auto rounded-md bg-zinc-600 py-2 px-6 text-lg text-white">
          Visit our dataset
        </button>
      </a>

      <div className="body-2 mx-auto max-w-[30rem] lg:max-w-[70rem] mt-4 px-6 ">
        <h4 className="h4 ">Sources:</h4>
        <ul className="my-2">
          Philippine Statistics Authority
          <li className="list-disc ml-6">
            Occurrence of Natural Extreme Events and Disasters 1 by Type for
            Minor Incidents
          </li>
          <li className="list-disc ml-6">
            Number, Area and Average Area of Holdings/Farms by Region:
            Philippines 1960, 1971, 1980, 1991, 2002 and 2012
          </li>
          <li className="list-disc ml-6">
            Growth Rates of Value of Production in Agriculture and Fisheries
          </li>
        </ul>
        <ul className="my-2">
          Climate Knowledge Portal (World Bank)
          <li className="list-disc ml-6">
            Average Annual Natural Hazard Occurrence for 1980-2020
          </li>
          <li className="list-disc ml-6">
            Philippine Average Temperature from 1950 - 2014
          </li>
          <li className="list-disc ml-6">
            Philippine Precipitation from 1950 - 2014
          </li>
          <li className="list-disc ml-6">
            Climate Change Indicators for the Philippines
          </li>
          <li className="list-disc ml-6">
            Agricultural and Rural Development Indicators
          </li>
        </ul>
        <ul className="my-2">
          Climate Watch Data
          <li className="list-disc ml-6">
            Philippine GHG Emissions Data from 1990-2020
          </li>
        </ul>
        <ul className="my-2">
          Timeanddate.com (CustomWeather)
          <li className="list-disc ml-6">
            Philippine Weather data from 2022-2023
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default Data;
