import {Link} from 'react-router-dom'
import Image from '../images/main__header.jpeg'

const MainHeader = () => {
  return (
    <header className="main__header">
        <div className="container main__header-container">
            <div className="main__header-left">
               <h4>Pokèmon Silver & Gold</h4>
               <h1>Gotta Catch'em All!!!</h1>
               <p>
                Welcome to the Johto/Kanto region of the world of Pokèmon. This series of the game introduced Generation II pokèmon and an unique
                set of legendary pokèmon. This game in particular takes place three years after the events of Red & Blue.
               </p>
               <Link to="/info" className='btn lg'>Information</Link>
            </div>
            <div className="main__header-right">
               <div className="main__header-circle"></div>
               <div className="main__header-image">
                <img src={Image} alt="Main Header Image" />
            </div> 
        </div>
     </div>
      </header>
  )
}

export default MainHeader