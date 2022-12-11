import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'




const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className='logo'>
                    <img src={Logo} alt="Footer Logo" />
                </Link>
                <p>
                    Pokèmon Gold & Silver releases in 2000 on GameBoy Color Handheld consoles
                    and published by Nintendo Company. 
                </p>
                <div className="footer__socials">
                    <a href="https://Serebii.net/" target="-blank" rel='noreferrer noopener'><FaLinkedin/></a>
                    <a href="https://Serebii.net/" target="-blank" rel='noreferrer noopener'><FaFacebook/></a>
                    <a href="https://Serebii.net/" target="-blank" rel='noreferrer noopener'><AiOutlineTwitter/></a>
                    <a href="https://Serebii.net/" target="-blank" rel='noreferrer noopener'><AiOutlineInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/info">Info</Link>
                <Link to="/pokemon">Pokèmon</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Generation II</Link>
                <Link to="/s">Guides</Link>
                <Link to="/s">Communities</Link>
                <Link to="/s">FAQs</Link>
            </article>
            <article>
                <h4>Feedback</h4>
                <Link to="/contact">Contact Us</Link>
                <Link to="/s">Support</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>2022 POKÈMON &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer