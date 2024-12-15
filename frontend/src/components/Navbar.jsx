// import React, { useContext, useState } from 'react';
// import { assets } from '../assets/assets';
// import { Link, NavLink } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';
// import './Navbar.css';

// const Navbar = () => {
//     const [visible, setVisible] = useState(false);

//     const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

//     const logout = () => {
//         navigate('/login');
//         localStorage.removeItem('token');
//         setToken('');
//         setCartItems({});
//     };

//     return (
//         <div className='navbar-container'>
//             <Link to='/'><img src={assets.logo} className='logo' alt="" /></Link>
//             <ul className='nav-links'>
//                 <NavLink to='/' className='nav-item'>
//                     <p>HOME</p>
//                     <hr className='underline' />
//                 </NavLink>
//                 <NavLink to='/collection' className='nav-item'>
//                     <p>COLLECTION</p>
//                     <hr className='underline' />
//                 </NavLink>
//                 <NavLink to='/electronicslist' className='nav-item'>
//                     <p>ELECTRONICS</p>
//                     <hr className='underline' />
//                 </NavLink>
//                 <NavLink to='/about' className='nav-item'>
//                     <p>ABOUT</p>
//                     <hr className='underline' />
//                 </NavLink>
//                 <NavLink to='/contact' className='nav-item'>
//                     <p>CONTACT</p>
//                     <hr className='underline' />
//                 </NavLink>
//             </ul>
//             <div className='nav-actions'>
//                 <img onClick={() => { setShowSearch(true); navigate('/collection') }} src={assets.search_icon} className='icon' alt="" />
//                 <div className='profile-menu'>
//                     <img onClick={() => token ? null : navigate('/login')} className='icon' src={assets.profile_icon} alt="" />
//                     {token &&
//                         <div className='dropdown-menu'>
//                             <div className='dropdown-content'>
//                                 <p className='menu-item'>My Profile</p>
//                                 <p onClick={() => navigate('/orders')} className='menu-item'>Orders</p>
//                                 <p onClick={logout} className='menu-item'>Logout</p>
//                             </div>
//                         </div>
//                     }
//                 </div>
//                 <Link to='/cart' className='cart'>
//                     <img src={assets.cart_icon} className='icon' alt="" />
//                     <p className='cart-count'>{getCartCount()}</p>
//                 </Link>
//                 <img onClick={() => setVisible(true)} src={assets.menu_icon} className='menu-icon' alt="" />
//             </div>
//             <div className={`sidebar ${visible ? 'visible' : ''}`}>
//                 <div className='sidebar-content'>
//                     <div onClick={() => setVisible(false)} className='back-button'>
//                         <img className='back-icon' src={assets.dropdown_icon} alt="" />
//                         <p>Back</p>
//                     </div>
//                     <NavLink onClick={() => setVisible(false)} className='sidebar-link' to='/'>HOME</NavLink>
//                     <NavLink onClick={() => setVisible(false)} className='sidebar-link' to='/collection'>COLLECTION</NavLink>
//                     <NavLink onClick={() => setVisible(false)} className='sidebar-link' to='/about'>ABOUT</NavLink>
//                     <NavLink onClick={() => setVisible(false)} className='sidebar-link' to='/contact'>CONTACT</NavLink>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Navbar;


import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import './Navbar.css';

const Navbar = () => {
    const [visible, setVisible] = useState(false);

    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

    const logout = () => {
        navigate('/login');
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});
    };

    return (
        <div className='navbar-container'>
            <Link to='/'><img src={assets.logo} className='logo' alt="" /></Link>
            <ul className='nav-links'>
                <NavLink to='/' className='nav-item'>
                    <p>HOME</p>
                    <hr className='underline' />
                </NavLink>
                <NavLink to='/collection' className='nav-item'>
                    <p>COLLECTION</p>
                    <hr className='underline' />
                </NavLink>
                <NavLink to='/electronicslist' className='nav-item'>
                    <p>ELECTRONICS</p>
                    <hr className='underline' />
                </NavLink>
                <NavLink to='/about' className='nav-item'>
                    <p>ABOUT</p>
                    <hr className='underline' />
                </NavLink>
                <NavLink to='/contact' className='nav-item'>
                    <p>CONTACT</p>
                    <hr className='underline' />
                </NavLink>
            </ul>
            <div className='nav-actions'>
                <img onClick={() => { setShowSearch(true); }} src={assets.search_icon} className='icon' alt="" />
                <div className='profile-menu'>
                    <img onClick={() => token ? null : navigate('/login')} className='icon' src={assets.profile_icon} alt="" />
                    {token &&
                        <div className='dropdown-menu'>
                            <div className='dropdown-content'>
                                <p className='menu-item'>My Profile</p>
                                <p onClick={() => navigate('/orders')} className='menu-item'>Orders</p>
                                <p onClick={logout} className='menu-item'>Logout</p>
                            </div>
                        </div>
                    }
                </div>
                <Link to='/cart' className='cart'>
                    <img src={assets.cart_icon} className='icon' alt="" />
                    <p className='cart-count'>{getCartCount()}</p>
                </Link>
                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='menu-icon' alt="" />
            </div>
            <div className={`sidebar ${visible ? 'visible' : ''}`}>
                <div className='sidebar-content'>
                    <div onClick={() => setVisible(false)} className='back-button'>
                        <img className='back-icon' src={assets.dropdown_icon} alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='sidebar-link' to='/'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='sidebar-link' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='sidebar-link' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='sidebar-link' to='/contact'>CONTACT</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navbar;