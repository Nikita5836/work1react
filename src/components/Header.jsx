import Logo from './Logo';
import Nav from './Nav'
import Acount from './Acount'
import './styles/Header.css'

const Header = () => {
  return (
    <div className='header'>
      <Logo />
      <Nav />
      <Acount />
    </div>
  );
};

export default Header;
