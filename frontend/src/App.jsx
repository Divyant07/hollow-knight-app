import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BossBuild from "./pages/BossBuild";
import CompletionTracker from "./pages/CompletionTracker";
import Grubs from "./pages/Grubs";
import Bosses from "./pages/Bosses";
import Charms from "./pages/Charms";
import Equipment from "./pages/Equipment";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boss-build" element={<BossBuild />} />
        <Route path="/completion" element={<CompletionTracker />} />
        <Route path="/grubs" element={<Grubs />} />
        <Route path="/bosses" element={<Bosses />} />
        <Route path="/charms" element={<Charms />} />
        <Route path="/equipment" element={<Equipment />} />
      </Routes>
    </BrowserRouter>
  );
}