
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HeadPad from './components/HeadPad';
import SideNav from './components/SideNav';
import TaskList from './pages/TaskList';
import TaskScheduling from './pages/TaskScheduling';
import Integrations from './pages/Integrations';


function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'linear-gradient(120deg, #000000ff 0%, #18272eff  100%)' }}>
        <HeadPad />
        <div style={{ display: 'flex', flex: 1 }}>
          <SideNav />
          <main style={{ flex: 1, marginLeft: 220, marginTop: '5rem', padding: '0px 32px', color: '#fff' }}>
            <Routes>
              <Route path="/" element={<Navigate to="/task-list" replace />} />
              <Route path="/task-list" element={<TaskList />} />
              <Route path="/task-scheduling" element={<TaskScheduling />} />
              <Route path="/integrations" element={<Integrations />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App
