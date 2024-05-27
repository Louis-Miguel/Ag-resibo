import Section from "./Section";
import nutshell from "../assets/images/nutshell.jpg";
import rq1cpitemp from "../assets/images/rq1cpitemp.jpg";
import hypothesis from "../assets/images/hypothesis.jpg";

const Methods = () => {
  return (
    <Section id="methods" crosses>
      <h1 class="mb-12 6 text-center text-xl font-bold md:text-3xl ">
        By Exploring our Data through Python, We are able to get these Graphs!
      </h1>
      <div className="container md:pb-10">
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          <div
            className={`md:flex even:md:translate-y-[10rem] p-0.25 rounded-[2.5rem] bg-neutral-600`}
          >
            <div className="relative p-2 bg-neutral-800 rounded-[2.4375rem] overflow-hidden xl:p-4">
              <img className="rounded-[2.4375rem]" src={nutshell} />
              <p className="mt-4 text-center">Nutshell plot</p>
            </div>
          </div>
          <div
            className={`md:flex even:md:translate-y-[10rem] p-0.25 rounded-[2.5rem] bg-neutral-600`}
          >
            <div className="relative p-2 bg-neutral-800 rounded-[2.4375rem] overflow-hidden xl:p-4">
              <img className="rounded-[2.4375rem]" src={rq1cpitemp} />
              <p className="mt-4 text-center">
                Plot for the First Research Question
              </p>
            </div>
          </div>
          <div
            className={`md:flex even:md:translate-y-[10rem] p-0.25 rounded-[2.5rem] bg-neutral-600`}
          >
            <div className="relative p-2 bg-neutral-800 rounded-[2.4375rem] overflow-hidden xl:p-4">
              <img className="rounded-[2.4375rem]" src={rq1cpitemp} />
              <p className="mt-4 text-center">
                Plot for the Second Research Question
              </p>
            </div>
          </div>
        </div>
        <h4 className="h4 font-bold mb-4">Preprocessing</h4>
        <p className="body-2 mb-[2rem] ml-4 text-zinc-100">
          The preprocessing in the code involves loading agricultural and
          precipitation data from CSV files into pandas DataFrames. It processes
          the precipitation data by extracting years, precipitation, and
          temperature values, and calculates their averages. For the
          agricultural data, it filters for a specific crop production index
          (CPI) indicator, extracts relevant years and values, and calculates
          their averages. The data is then converted into dictionaries, mapping
          years to values. Missing data is handled by generating a complete
          range of years from 1961 to 2013, filling in missing values with the
          averages, and scaling them. A new DataFrame is created with these
          filled values, which are then standardized using StandardScaler to
          normalize the columns, preparing the data for further analysis and
          visualization.
        </p>
        <h4 className="h4 font-bold mb-4">Visualization</h4>
        <p className="body-2 mb-[2rem] ml-4 text-zinc-100">
          <img
            className="rounded-[2.4375rem] w-[40rem] mx-auto my-5"
            src={hypothesis}
          />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ut
          necessitatibus hic sit, fugiat quas tenetur nesciunt iusto mollitia,
          veniam sapiente error quis porro tempore earum esse commodi quos eos.
        </p>

        <h4 className="h4 font-bold mb-4">Analysis</h4>
        <p className="body-2 mb-[2rem] ml-4 text-zinc-100">
          The chi-square test of independence is used to determine if there is a
          significant association between two categorical variables. For this
          analysis, the continuous variables `Temperature` and `Crop Production
          Index` were discretized into three categories (low, medium, high)
          using quantile binning. The following steps were taken:
          <ol className="list-decimal ml-6">
            <li>
              Binning Continuous Variables
              <p>
                - `Temperature` and `Crop Production Index` were divided into
                three bins each using quantile cuts.
              </p>
            </li>
            <li>
              Creating Contingency Table
              <p>
                - A contingency table was created to show the frequency of each
                combination of the binned categories.
              </p>
            </li>

            <li>
              Performing Chi-Square Test
              <p>
                - The chi-square test of independence was performed on the
                contingency table to evaluate the association between the binned
                `Temperature` and `Crop Production Index`.
              </p>
            </li>
          </ol>
          The results of the chi-square test are as follows:
          <ul className="list-disc ml-6">
            <li>Chi-square statistic: 20.495</li>
            <li>P-value: 0.0003987</li>
            <li>Degrees of freedom: 4</li>
          </ul>
          <table>
            <tr>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </table>
          The expected frequencies for each combination of categories are:
          <table className="my-5 border-collapse border border-slate-500 ">
            <thead>
              <tr>
                <th className="border border-slate-500 p-4">
                  Temperature Binned
                </th>
                <th className="border border-slate-500 p-4">
                  CPI Binned (Low)
                </th>
                <th className="border border-slate-500 p-4">
                  CPI Binned (Medium)
                </th>
                <th className="border border-slate-500 p-4">
                  CPI Binned (High)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-500 p-4">Low</td>
                <td className="border border-slate-500 p-4">6.11</td>
                <td className="border border-slate-500 p-4">5.77</td>
                <td className="border border-slate-500 p-4">6.11</td>
              </tr>
              <tr>
                <td className="border border-slate-500 p-4">Medium</td>
                <td className="border border-slate-500 p-4">6.11</td>
                <td className="border border-slate-500 p-4">5.77</td>
                <td className="border border-slate-500 p-4">6.11</td>
              </tr>
              <tr>
                <td className="border border-slate-500 p-4">High</td>
                <td className="border border-slate-500 p-4">5.77</td>
                <td className="border border-slate-500 p-4">5.45</td>
                <td className="border border-slate-500 p-4">5.77</td>
              </tr>
            </tbody>
          </table>
          The chi-square test resulted in a chi-square statistic of 20.495 with
          a p-value of 0.0003987. Since the p-value is less than the
          significance level of 0.05, we reject the null hypothesis. This
          indicates that there is a significant association between Temperature
          and Crop Production Index.
        </p>
      </div>
    </Section>
  );
};

export default Methods;
