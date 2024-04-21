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
            And this is our project, Project Title, a short explanation of the
            project objectives. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <ul className="body-2 max-w-3xl mx-auto mb-6 text-neutral-200 lg:mb-8">
            Data Science Team
            <li>Student's name, section</li>
            <li>Student's name, section</li>
            <li>Student's name, section</li>
          </ul>
        </div>
      </div>
      &nbsp;
    </Section>
  );
};

export default Top;
