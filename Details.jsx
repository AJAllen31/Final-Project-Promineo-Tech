import {FaCrown} from 'react-icons/fa'
import SectionHead from './SectionHead'
import {details} from '../data'
import Card from '../UI/Card'
import {Link} from 'react-router-dom'
import {AiFillCaretRight} from 'react-icons/ai'

const Details = () => {
  return (
    <section className="details">
    <div className="container details__container">
          <SectionHead icon={<FaCrown/>} title="Details"/>
    
    <div className="programs__wrapper">
       {
          details.map(({id, icon, title, info, path}) => {
            return (
              <Card className="details__detail" key={id}>
                   <span>{icon}</span>
                   <h4>{title}</h4>
                   <small>{info}</small>
                   <Link to={path} className="btn sm">Learn More <AiFillCaretRight/></Link>
              </Card>
            )
          })
       }
    </div>
    </div>
    </section>
  )
}

export default Details