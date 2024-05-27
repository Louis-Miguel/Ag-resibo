import Section from "./Section";
import TeamCard from "./TeamCard";
import luis from "../assets/images/luis.jpg"
import louis from "../assets/images/louis.jpg"
import anthony from "../assets/images/anthony.jpg"

const Team = () => {
  return (
    <Section id="about" crosses>
      <h1 class="mb-6 text-center text-xl font-bold md:text-3xl">
        Meet our Team!
      </h1>
      <div class="mx-auto my-16 flex max-w-7xl flex-wrap justify-center gap-8">
        <TeamCard
          title={"Louis Miguel Fermiza"}
          picture={louis}
          description={
            "A Computer Science Student with a passion for challenging himself with new things in life."
          }
        />
        <TeamCard
          title={"Alfonso Luis De Los Reyes"}
          picture={luis}
          description={
            "Second Year Computer Science Student. Likes Computers"
          }
          />
        <TeamCard
          title={"Anthony Aaron Lazaro"}
          picture={anthony}
          description={
            "Transferee Computer Science Student waiting to transfer my ideas from paper to reality"
          }
        />
      </div>
    </Section>
  );
};

export default Team;
