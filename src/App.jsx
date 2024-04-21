import Data from "./components/Data";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Top from "./components/Top";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Top />
        <Overview />
        <Data />
      </div>
    </>
  );
}

export default App;
