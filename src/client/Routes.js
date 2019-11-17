import Home from './components/pages/Home';
import About from './components/pages/About';
import { loadData } from './components/users/Users';

export default [
  {
    loadData,
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/about',
    component: About
  }
];
