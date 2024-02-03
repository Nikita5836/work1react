import group from './imgs/Group.svg'
import cart from  './imgs/cart.svg'
import avatar from  './imgs/avatar.svg'
import './styles/Acount.css'

const Acount = () => {
  return (
    <div className='acount'>
        <img src={group} alt="group" />
        <img src={cart} alt="cart" />
        <img src={avatar} alt="avatar" />
    </div>
  )
}

export default Acount