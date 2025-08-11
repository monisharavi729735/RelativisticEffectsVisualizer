import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import ConceptPage from './pages/RelativityConceptPage';
import FeedbackPage from './pages/FeedbackPage';
import ChatbotPage from './pages/ChatbotPage';
import RelativityPage from './pages/RelativityPage';
import ComingSoon from './pages/ComingSoon';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="/concept" element={<ConceptPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/relativity" element={<RelativityPage />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Route>
    )
  );
  return (
    <RouterProvider router={router} />
  )
}

export default App
