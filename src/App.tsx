import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LessonPage from "./pages/LessonPage";
import Library from "./pages/Library";
import MyWords from "./pages/MyWords";
import StoryPage from "./pages/StoryPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Library />} />
      <Route path="/story/:storyId" element={<StoryPage />} />
      <Route path="/lessons" element={<Home />} />
      <Route path="/lesson/:lessonId" element={<LessonPage />} />
      <Route path="/words" element={<MyWords />} />
    </Routes>
  );
}
