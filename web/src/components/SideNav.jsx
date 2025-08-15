import { NavLink } from 'react-router-dom';
import './SideNav.css';

const navItems = [
  { name: 'Task List', path: '/task-list' },
  { name: 'Task Scheduling', path: '/task-scheduling' },
  { name: 'Integrations', path: '/integrations' },
];

export default function SideNav() {
  return (
    <nav className="sidenav outfit-font">
      <ul>
        {navItems.map(item => (
          <li key={item.path}>
            <NavLink to={item.path} className={({ isActive }) => isActive ? 'active' : ''}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
