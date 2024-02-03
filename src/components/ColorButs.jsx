import './styles/ColorButs.css';
import Buts from './imgs/color.svg';

const ColorButs = () => {
  return (
    <div className='buts'>
      <h2>CHOOSE COLOR : </h2>,
      <img className='butsImg' src={Buts} alt="Buts" />
    </div>
  );
};

export default ColorButs;
