import Section from "./Section";
import TeamCard from "./TeamCard";
import luis from "../assets/images/luis.jpg"

const Team = () => {
  return (
    <Section id="about" crosses>
      <h1 class="mb-6 text-center text-xl font-bold md:text-3xl">
        Meet our Team!
      </h1>
      <div class="mx-auto my-16 flex max-w-7xl flex-wrap justify-center gap-8">
        <TeamCard
          title={"Louis Miguel Fermiza"}
          picture={"cs-132-project-portfolio/public/louis.jpg"}
          description={
            "A Computer Science Student with a passion for challenging himself with new things in life."
          }
        />
        <TeamCard
          title={"Alfonso Luis De Los Reyes"}
          picture={luis}
          description={
            "Transferee Computer Science Student waiting to transfer my ideas from paper to reality"
          }
        />
        <TeamCard
          title={"Anthony Aaron Lazaro"}
          picture={"cs-132-project-portfolio/public/anthony.jpg"}
        />
      </div>
    </Section>
  );
};

export default Team;
