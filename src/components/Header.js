import Navbar from './Navbar';
import logo from '../logo.svg';
import { useContext } from 'react';
import { ThemeContext } from '../App';

const Header = () => {
    const {theme} = useContext(ThemeContext);

    const background = theme === 'light' ? 'lightgray' : '#000'

    return <header style={{background, display: 'flex',  padding: '4px 18px', justifyContent: 'space-between'}}>
        <img src={logo} height={32} alt="logo" />

        <Navbar/>
    </header>;
}

export default Header;