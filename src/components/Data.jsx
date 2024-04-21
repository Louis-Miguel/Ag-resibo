import Card from "./Card";
import Section from "./Section";

const Data = () => {
  return (
    <Section id="data" crosses>
      <h1 class="mb-6 text-center text-3xl font-bold md:text-5xl">
        We mined the internet for fake news data.
      </h1>
      <h2 class="text-center text-lg text-zinc-200 md:text-2xl">
        Proin odio consequat sapien vestibulum consequat lorem dolore feugiat.
      </h2>
      <div class="mx-auto my-16 flex max-w-6xl flex-wrap justify-center gap-8">
      <Card title={"Method"} description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi vero recusandae delectus veritatis ab facere"}/>
      <Card title={"Method"} description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi vero recusandae delectus veritatis ab facere"}/>
      <Card title={"Method"} description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi vero recusandae delectus veritatis ab facere"}/>
      <Card title={"Method"} description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi vero recusandae delectus veritatis ab facere"}/>
      <Card title={"Method"} description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi vero recusandae delectus veritatis ab facere"}/>
      </div>

      <a href="https://docs.google.com/spreadsheets/d/1gx7ilsIonUnIj6dw3_6q6TYysuj5v-BT3AAQr11UcOU/edit?usp=sharing" className="relative flex">
      <button className="mx-auto rounded-md bg-zinc-600 py-2 px-6 text-lg text-white">Visit our dataset
      </button>
      </a>
    </Section>
  );
};

export default Data;
