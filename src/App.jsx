import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Account from "./pages/Account"; // Account component
import Quiz from "./pages/Quiz"; // QuizGenerator component
import Home from "./pages/Home"; // Optional: Import a Home component
import QuizQuestions from "./pages/QuizQuestions";
import QuizResults from "./pages/QuizResults";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/account" element={<Account />} /> {/* Account route */}
        <Route path="/quiz" element={<Quiz />} /> {/* Quiz route */}
        <Route path="/quiz-questions" element={<QuizQuestions />} /> {/* QuizQuestions */}
        <Route path="/quiz-results" element={<QuizResults />} /> {/* QuizResults */}
      </Routes>
      </div>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
