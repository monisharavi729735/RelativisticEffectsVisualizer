import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import ConceptPage from './pages/ConceptPage';
import FeedbackPage from './pages/FeedbackPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/concept" element={<ConceptPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Route>
    )
  );
  return (
    <RouterProvider router={router} />
  )
}

export default App
