import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import { appPaths } from './components/layout/app-paths';
import Staff from './pages/staff/staff';
import './App.css';
import AppLayout from './components/layout/app-layout';
function App() {
  return (
    <Router>
      <Routes>
        <Route path={appPaths.home} element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path={appPaths.staff} element={<Staff />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
