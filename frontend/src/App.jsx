import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BossBuild from "./pages/BossBuild";
import CompletionTracker from "./pages/CompletionTracker";
import Grubs from "./pages/Grubs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boss-build" element={<BossBuild />} />
        <Route path="/completion" element={<CompletionTracker />} />
        <Route path="/grubs" element={<Grubs />} />
      </Routes>
    </BrowserRouter>
  );
}