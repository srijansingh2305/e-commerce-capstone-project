import React, { useContext, useState } from 'react'; // Importing necessary hooks and libraries
import { assets } from '../assets/assets'; // Importing assets
import { Link, NavLink } from 'react-router-dom'; // Importing navigation components
import { ShopContext } from '../context/ShopContext'; // Importing context for shop data
import './Navbar.css'; // Importing CSS file for styling

const Navbar = () => {
    const [visible, setVisible] = useState(false); // State to handle sidebar visibility

    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext); // Destructuring values from the context

    const logout = () => {
        navigate('/login'); // Navigate to the login page
        localStorage.removeItem('token'); // Remove token from local storage
        setToken(''); // Reset token in state
        setCartItems({}); // Reset cart items in state
    };

    return (
        <div className='navbar-container'> {/* Main container for the navbar */}
            <Link to='/'><img src={assets.logo} className='logo' alt="" /></Link> {/* Company logo and home link */}
            <ul className='nav-links'> {/* Navigation links */}
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
            <div className='nav-actions'> {/* Actions section */}
                <img onClick={() => { setShowSearch(true); }} src={assets.search_icon} className='icon' alt="" /> {/* Search icon */}
                <div className='profile-menu'> {/* Profile menu */}
                    <img onClick={() => token ? null : navigate('/login')} className='icon' src={assets.profile_icon} alt="" /> {/* Profile icon */}
                    {token &&
                        <div className='dropdown-menu'> {/* Dropdown menu for authenticated users */}
                            <div className='dropdown-content'>
                                <p className='menu-item'>My Profile</p>
                                <p onClick={() => navigate('/orders')} className='menu-item'>Orders</p>
                                <p onClick={logout} className='menu-item'>Logout</p>
                            </div>
                        </div>
                    }
                </div>
                <Link to='/cart' className='cart'> {/* Cart link */}
                    <img src={assets.cart_icon} className='icon' alt="" />
                    <p className='cart-count'>{getCartCount()}</p>
                </Link>
                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='menu-icon' alt="" /> {/* Mobile menu icon */}
            </div>
            <div className={`sidebar ${visible ? 'visible' : ''}`}> {/* Sidebar for mobile view */}
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

export default Navbar; // Exporting Navbar component
