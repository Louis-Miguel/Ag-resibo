import Section from "./Section";

const Top = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="top"
    >
      <div className="container relative h-screen">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">Hi. We are Louisians</h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-neutral-200 lg:mb-8">
            And this is our project, <b className="text-rose-400"> Ag-resibo </b>, a statistical analysis
            on the effects of climate change on the crop productivity of the
            Philippine Agricultural system. It also seeks to find possible
            correlations between recent Philippine policy changes addressing
            climate change and the rate of greenhouse gas emissions in the
            Philippines.
          </p>
          <ul className="body-2 max-w-3xl mx-auto mb-6 text-neutral-200 lg:mb-8 ">
            <h5 className="h5">Data Science Team</h5>
            <li className="my-4">De Los Reyes, Alfonso Luis, WFZ Winter</li>
            <li className="my-4">Fermiza, Louis Miguel, WFZ Winter</li>
            <li className="my-4">Lazaro, Anthony Aaron, WFZ Winter</li>
          </ul>
        </div>
      </div>
      &nbsp;
    </Section>
  );
};

export default Top;
