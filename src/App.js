import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Add from "./components/Add";
import Header from "./components/Header";
import Watched from "./components/Watched";
import Watchlist from "./components/Watchlist";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/" element={<Add />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
