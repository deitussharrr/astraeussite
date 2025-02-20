import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from '../pages/Index';
import Poetry from '../pages/poetry';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/poetry" element={<Poetry />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;