import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpeg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'




import './contact.css'

const Contact = () => {
  return (
    <>
    <Header title="Catch'em All" image={HeaderImage}>
      Gotta Catch'em All Pokèmon!!!
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:anthonyallen3119@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
          <a href="mailto:anthonyallen3119@gmail.com" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
          <a href="mailto:anthonyallen3119@gmail.com" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact