import { useState } from 'react';
import imageLogo from '../assets/logoimage.png';
const Header = () => {
    const [activeNavbar, setActiveNavbar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setActiveNavbar(true);
        } else {
            setActiveNavbar(false);
        }
    };
    window.addEventListener('scroll', changeBackground);
    return (
        <div>
            <header
                className={
                    (activeNavbar ? 'bg-white border-b-4 ' : 'bg-transparent') +
                    ' flex fixed w-full mx-auto justify-center  z-50  gap-48 px-5 py-1  m-auto items-center'
                }>
                <img src={imageLogo} className='h-24 opacity-90' />
                <ul className='flex gap-14 font-medium text-xl'>
                    <li>
                        <a href='#home'>Home</a>
                    </li>
                    <li>
                        <a href='#about'>About Us</a>
                    </li>
                    <li>
                        <a href='#testmonial'>Developers</a>
                    </li>
                </ul>
            </header>
        </div>
    );
};
export default Header;
