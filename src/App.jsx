import Data from "./components/Data";
import Header from "./components/Header";
import Methods from "./components/Methods";
import Overview from "./components/Overview";
import Results from "./components/Results";
import Team from "./components/Team";
import Top from "./components/Top";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Top />
        <Overview />
        <Data />
        <Methods />
        <Results />
        <Team />
      </div>
    </>
  );
}

export default App;
