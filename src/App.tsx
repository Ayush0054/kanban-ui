import "./index.css";
import Navbar from "./components/navbar";
import ListTitle from "./components/listTitle";
import PlainCard from "./components/plainCard";
import Kanban from "./components/kanban";
import Header from "./components/header";

function App() {
  const title = "hey";
  return (
    <main>
      <Navbar />
      <Header />
      <ListTitle props={title} />
      <PlainCard />
      <Kanban />
    </main>
  );
}

export default App;
