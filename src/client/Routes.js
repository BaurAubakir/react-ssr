import Home from './components/pages/Home';
import About from './components/pages/About';

export default [
  {
    ...Home,
    path: '/',
    exact: true
  },
  {
    ...About,
    path: '/about'
  }
];
