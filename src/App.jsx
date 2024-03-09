import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import HomePage from "./pages/HomePage.jsx";
import NavigationBar from "./components/NavigationBar.jsx";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
