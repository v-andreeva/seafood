import Searchbar from './Searchbar.jsx';
import logo from '../assets/Logo.png';
import './header.css';

export default function Header(){
    return (
        <header>
        <img src={logo} alt='' id='logo'/>
        <Searchbar />
        </header>
    );
} 