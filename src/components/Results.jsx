import React from "react";
import Section from "./Section";
import correlation2 from "../assets/images/correlation2.png";
const Results = () => {
  return (
    <Section id="results" crosses>
      <div>
        <div className="container">
          <h2 class="mb-12 text-center font-bold h3">
            Here's What We Found Out About the Data We Analyzed and Modeled
          </h2>

          <h1 class="mb-4 font-bold h4">
            From Interpreting Our Data Analysis Graphs for Research Question 1:
          </h1>
          <div className="relative z-1 grid gap-5 lg:grid-cols-2 mb-8">
            <div className="relative min-h-[39rem] border border-white rounded-3xl overflow-hidden">
              <div className="absolute inset-0 flex flex-col justify-start p-8 bg-gradient-to-b from-zinc-800/0 to-zinc-800/90 lg:p-15">
                <h4 className="h4 mb-4">Results</h4>
                <p className="body-2 mb-[1rem] text-zinc-100">
                  According to the graph, climate change, particularly
                  increasing temperatures between 25.2°C to 26.8°C, seems to
                  positively affect crop productivity in the Philippines. We
                  also calculated the correlation values between the temperature
                  and crop production index, and precipitation and crop
                  production index. We can see that the correlation value for
                  temperature and crop production is 0.7993778605672287. As for
                  the correlation between precipitation and crop production, the
                  correlation value is 0.37392240826750744
                </p>
              </div>
            </div>
            <div className="relative z-1 grid gap-5 lg:grid-rows-2">
              <div className="p-4  bg-gradient-to-b from-zinc-800/0 to-zinc-800/90 border border-white rounded-3xl overflow-hidden lg:min-h-[23rem]">
                <div className="py-8 px-4 xl:px-8">
                  <h4 className="h4 mb-4">Implications</h4>
                  <p className="body-2 mb-[1rem] text-zinc-100">
                    This means that as the temperature rises within this
                    specific range, crop production is likely to increase. The
                    closer the value is to 1(or -1) the stronger the positive
                    (or negative) correlation is, and the closer the value is to
                    0, the weaker the correlation is. The correlation value
                    between temperature and crop production indicates that there
                    is a positive correlation between temperature and crop
                    yields. This means that the higher the temperature (at the
                    specified range), the more crop yield there will be. The
                    correlation value between precipitation and crop production
                    suggests that the amount of precipitation (within the
                    specified range) does not have a very significant impact on
                    the yield of crops.
                  </p>
                </div>
              </div>
              <div className="p-4  bg-gradient-to-b from-zinc-800/0 to-zinc-800/90 border border-white rounded-3xl overflow-hidden lg:min-h-[23rem]">
                <div className="py-8 px-4 xl:px-8">
                  <h4 className="h4 mb-4">Limitations</h4>
                  <p className="body-2 mb-[1rem] text-zinc-100">
                    However, this analysis is limited to the observed range, and
                    the impact of temperatures outside this range, along with
                    other factors such as changes in precipitation, extreme
                    weather events, and CO2 levels are not addressed in this
                    particular graph. The increase in crop productivity can also
                    not be necessarily attributed to temperature, because there
                    is a clear linear rate of increase in CPI from 1961 - 2022,
                    and while there is a slight rate of increase in temperature
                    along the same date range, improvements in agriculture
                    technologies were sure to have affected crop productivity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h1 class="mb-4 font-bold h4">
            From Interpreting Our Data Analysis Graphs for Research Question 2:
          </h1>
          <div className="relative z-1 grid gap-5 lg:grid-cols-2 mb-8">
            <div className="relative min-h-[39rem] border border-white rounded-3xl overflow-hidden h-[50rem] md:h-full">
              <div className="absolute inset-0 flex flex-col justify-start p-8 bg-gradient-to-b from-zinc-800/0 to-zinc-800/90 lg:p-15]">
                <h4 className="h4 mb-4">Results</h4>
                <p className="body-2 mb-[1rem] text-zinc-100">
                  The data, as shown very obviously from the plot, shows an
                  almost exact indirect correlation between Agriculture,
                  forestry, and fishing, value added (% of GDP of the
                  Philippines) and the CO2 emissions of the Philippines in
                  metric tons.
                </p>
                <p className="body-2 mb-[1rem] text-zinc-100">
                  The dip in CO2 emissions from 2019 - 2020 we believe is
                  because of the COVID - 19 lockdowns, and subsequently,
                  agriculture became a bigger % of GDP.
                </p>

                <p className="body-2 mb-[1rem] text-zinc-100">
                  Another significant dip in the data is in between 1990 and
                  2000, which we believe was caused by the 1997 Asian Financial
                  Crisis. Agriculture, forestry, and fishing as a % of GDP
                  decreased from 18% in 1996 to 16.44% in 1997. GHG Emissions
                  increased from 132.63 metric tons in 1996 to 140.75 metric
                  tons in 1997, showcasing another indirect correlation.
                </p>

                <p className="body-2 mb-[1rem] text-zinc-100">
                  Shown below is the output of the correlation between the two
                  sets of data using numpy's correlation coefficient function
                  (which calculates the Pearson product-moment correlation
                  coefficient).
                </p>
                <img className="border " src={correlation2} />
              </div>
            </div>
            <div className="relative z-1 grid gap-5 lg:grid-rows-2">
              <div className="p-4  bg-gradient-to-b from-zinc-800/0 to-zinc-800/90 border border-white rounded-3xl overflow-hidden lg:min-h-[23rem]">
                <div className="py-8 px-4 xl:px-8">
                  <h4 className="h4 mb-4">Implications</h4>
                  <p className="body-2 mb-[1rem] text-zinc-100">
                    This means that as the temperature rises within this
                    specific range, crop production is likely to increase. The
                    closer the value is to 1 (or -1) the stronger the positive
                    (or negative) correlation is, and the closer the value is to
                    0, the weaker the correlation is. The correlation value
                    between temperature and crop production indicates that there
                    is a positive correlation between temperature and crop
                    yields. This means that the higher the temperature (at the
                    specified range), the more crop yield there will be. The
                    correlation value between precipitation and crop production
                    suggests that the amount of precipitation (within the
                    specified range) does not have a very significant impact on
                    the yield of crops.
                  </p>
                </div>
              </div>
              <div className="p-4  bg-gradient-to-b from-zinc-800/0 to-zinc-800/90 border border-white rounded-3xl overflow-hidden lg:min-h-[23rem]">
                <div className="py-8 px-4 xl:px-8">
                  <h4 className="h4 mb-4">Limitations</h4>
                  <p className="body-2 mb-[1rem] text-zinc-100">
                    However, this analysis is limited to the observed range, and
                    the impact of temperatures outside this range, along with
                    other factors such as changes in precipitation, extreme
                    weather events, and CO2 levels are not addressed in this
                    particular graph. The increase in crop productivity can also
                    not be necessarily attributed to temperature, because there
                    is a clear linear rate of increase in CPI from 1961 - 2022,
                    and while there is a slight rate of increase in temperature
                    along the same date range, improvements in agriculture
                    technologies were sure to have affected crop productivity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h1 class="mb-4 font-bold h4">From Modeling Our Data:</h1>
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-white rounded-3xl overflow-hidden h-[60rem]">
              <div className="absolute inset-0 flex flex-col justify-start p-8 bg-gradient-to-b from-zinc-800/0 to-zinc-800/90 lg:p-15">
                <h4 className="h4 mb-4">Results</h4>
                <p className="body-2 mb-[1rem] text-zinc-100">
                  We created a linear regression model with the temperature and
                  precipitation data for the input and the crop production index
                  for the output. Using a 70/30 train-test split of our data, we
                  were able to get a Mean Squared Error of 278.08 and an
                  r-squared of 0.66. This indicates that our model does not
                  necessarily explain the correlation in our dataset.
                </p>
                <p className="body-2 mb-[1rem] text-zinc-100">
                  Our CPI data only starts at the year 1961, but our temperature
                  and precipitation data started at 1950. In order to further
                  gauge the accuracy of the model, we used it to predict the CPI
                  from 1950-1960. We got these results:
                </p>
                <table className="my-5 border-collapse border border-slate-500 text-sm text-center">
                  <thead>
                    <tr>
                      <th className="border border-slate-500 p-2">Year</th>
                      <th className="border border-slate-500 p-2">
                        Temperature
                      </th>
                      <th className="border border-slate-500 p-2">
                        Precipitation (mm)
                      </th>
                      <th className="border border-slate-500 p-2">
                        Predicted Crop Production Index
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-500 p-2">1950</td>
                      <td className="border border-slate-500 p-2">25.42</td>
                      <td className="border border-slate-500 p-2">2272.83</td>
                      <td className="border border-slate-500 p-2">44.776975</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-500 p-2">1951</td>
                      <td className="border border-slate-500 p-2">25.81</td>
                      <td className="border border-slate-500 p-2">2332.30</td>
                      <td className="border border-slate-500 p-2">63.783039</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-500 p-2">1952</td>
                      <td className="border border-slate-500 p-2">25.71</td>
                      <td className="border border-slate-500 p-2">2554.01</td>
                      <td className="border border-slate-500 p-2">58.640287</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-500 p-2">1953</td>
                      <td className="border border-slate-500 p-2">25.62</td>
                      <td className="border border-slate-500 p-2">2441.81</td>
                      <td className="border border-slate-500 p-2">54.366231</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-500 p-2">1954</td>
                      <td className="border border-slate-500 p-2">25.42</td>
                      <td className="border border-slate-500 p-2">2444.73</td>
                      <td className="border border-slate-500 p-2">44.581539</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-500 p-2">1955</td>
                      <td className="border border-slate-500 p-2">25.90</td>
                      <td className="border border-slate-500 p-2">2481.72</td>
                      <td className="border border-slate-500 p-2">68.014778</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-500 p-2">1956</td>
                      <td className="border border-slate-500 p-2">25.65</td>
                      <td className="border border-slate-500 p-2">2785.98</td>
                      <td className="border border-slate-500 p-2">55.442144</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-500 p-2">1957</td>
                      <td className="border border-slate-500 p-2">25.54</td>
                      <td className="border border-slate-500 p-2">2220.40</td>
                      <td className="border border-slate-500 p-2">50.705407</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-500 p-2">1958</td>
                      <td className="border border-slate-500 p-2">25.57</td>
                      <td className="border border-slate-500 p-2">2346.96</td>
                      <td className="border border-slate-500 p-2">52.028724</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-500 p-2">1959</td>
                      <td className="border border-slate-500 p-2">25.72</td>
                      <td className="border border-slate-500 p-2">2520.63</td>
                      <td className="border border-slate-500 p-2">59.167305</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-500 p-2">1960</td>
                      <td className="border border-slate-500 p-2">25.56</td>
                      <td className="border border-slate-500 p-2">2375.12</td>
                      <td className="border border-slate-500 p-2">51.507640</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="relative z-1 grid gap-5 lg:grid-rows-2">
              <div className="p-4  bg-gradient-to-b from-zinc-800/0 to-zinc-800/90 border border-white rounded-3xl overflow-hidden lg:min-h-[23rem]">
                <div className="py-8 px-4 xl:px-8">
                  <h4 className="h4 mb-4">Implications</h4>
                  <p className="body-2 mb-[1rem] text-zinc-100">
                    If you look at our data, the crop production index in 1961
                    is 26.42, 28.08 in 1962, 29.12 in 1963, with a clear
                    increasing trend, the indices never going below the lowest
                    value of 26.42. Our model predicted 51.51 in 1960, which
                    clearly does not match the trend in the actual data,
                    signifying that our model is inaccurate, and temperature and
                    precipitation may not have a large correlation with crop
                    productivity.
                  </p>
                </div>
              </div>
              <div className="p-4  bg-gradient-to-b from-zinc-800/0 to-zinc-800/90 border border-white rounded-3xl overflow-hidden lg:min-h-[23rem]">
                <div className="py-8 px-4 xl:px-8">
                  <h4 className="h4 mb-4">Recommendations</h4>
                  <p className="body-2 mb-[1rem] text-zinc-100">
                    There is a clear lack of available data from what we were
                    able to gather, so in order to increase the accuracy of a
                    future model, we recommend gathering data from other
                    countries as well, not just the Philippines. This will allow
                    more data points that extends beyond the available 1961-2022
                    data. If limiting to the Philippines, then we suggest trying
                    to look for data with smaller intervals (monthly data, not
                    yearly, etc.), in order to increase the number of samples
                    available. More data will hopefully lead to a more
                    generalizable and accurate prediction.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h1 class="my-12 text-center font-bold h3">
            Here's What We Concluded on Our Project
          </h1>
          <div className="p-4  bg-gradient-to-b from-zinc-800/0 to-zinc-800/90 border border-white rounded-3xl overflow-hidden lg:min-h-[23rem] mb-8">
            <div className="py-8 px-4 xl:px-8">
              <p className="body mb-[1rem] text-zinc-100 text-lg">
                This research embarked unravel the intricate relationships
                between climate change and agricultural productivity in the
                Philippines, guided by two questions: How does climate change
                affect crop productivity? And how does the percentage of
                agriculture in GDP correlate with CO2 emissions in the
                Philippines?
              </p>

              <p className="body mb-[1rem] text-zinc-100 text-lg">
                Our study revealed that while rising temperatures might
                initially appear beneficial for crop yields within a limited
                scope, relying solely on such simple correlations can be
                misleading. The inadequacy of predicting agricultural output
                based solely on readily available climate data emphasizes the
                significant influence of technological advancements and policies
                - crucial factors often overlooked. Answering the question of
                climate change's impact on crop productivity requires a more
                nuanced approach that considers the full gauge of these
                contributing factors.
              </p>

              <p className="body mb-[1rem] text-zinc-100 text-lg">
                The finding that there is a strong negative correlation between
                agriculture's contribution to GDP and Philippine CO2 emissions
                presents a compelling paradox. Uncovering the intricacies of
                this correlation is crucial: does increased reliance on
                agriculture inherently lead to lower emissions, or are there
                other factors at play? Answering this question is essential for
                creating effective climate and agriculture policies.
              </p>

              <p className="body mb-[1rem] text-zinc-100 text-lg">
                To address the complexities and limitations revealed by our
                study, we suggest a more comprehensive data collection.
                Expanding the data set to include things like agricultural
                practices and government policies will enable the development of
                robust predictive models capable of accurately predicting
                climate change's impact on crop productivity.
              </p>

              <p className="body mb-[1rem] text-zinc-100 text-lg">
                By continuing along this path of sustainable development, the
                Philippines can move towards a future where growth and
                environmental sustainability go hand in hand.
              </p>
            </div>
          </div>
          <a
            href="https://colab.research.google.com/drive/1bceuZEUp_aa5SboKdizb--ch80gvxGPh?usp=sharing#scrollTo=ArWQzKx_UFaX"
            className="relative flex"
          >
            <button className="mx-auto rounded-md bg-zinc-600 py-2 px-6 text-lg text-white">
              Check how our data are analyzed and modeled
            </button>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Results;
