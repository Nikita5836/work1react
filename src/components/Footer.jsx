import './styles/Footer.css'
import ColorButs from './ColorButs';
import AddButton from './AddButton';
import Info from './Info';

const Footer = () => {
  return (
    <div className='footer'>
      <ColorButs />
      <AddButton />
      <Info />
    </div>
  );
};

export default Footer;
