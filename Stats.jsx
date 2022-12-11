import { useState } from "react"
import SectionHead from "./SectionHead"
import {ImQuotesLeft} from 'react-icons/im'
import Card from "../UI/Card"
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io'
import { stats } from "../data"
import jQuery from "jquery"






const Stats = () => {
    const [index, setIndex] = useState(0)
    const {name, type, moves, avatar} = stats[index];

    const prevStatHandler = () => {
        setIndex(prev => prev - 1); 

        if(index <= 0) {
            setIndex(stats.length - 1);
        }
    }

    const nextStatHandler = () => {
        setIndex(prev => prev + 1);

        if(index >= stats.length - 1) {
            setIndex(0)
        }
    }


  return (
    <section className="stats">
        <div className="container stats__container">
            <SectionHead icon={<ImQuotesLeft/>} title="Stats" className="stats__head"/>
            <Card className="stats">
                <div className="stats__avatar">
                    <img src={avatar} alt={name} />
                </div>
                <p className="stats__quote">{`"${type}"`}</p>
                <h5>{name}</h5>
                <small className="stats__title">{moves}</small>
            </Card>
            <div className="stats__btn-container">
                <button className="stats__btn" onClick={prevStatHandler}><IoIosArrowDropleftCircle/></button>
                <button className="stats__btn" onClick={nextStatHandler}><IoIosArrowDroprightCircle/></button>
            </div>
        </div>
    </section>
  )
}

export default Stats