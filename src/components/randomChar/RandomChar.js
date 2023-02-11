import { useEffect, useState } from 'react';

import MarvelService from '../../services/MarvelService';
import Spiner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './randomChar.scss';

import mjolnir from '../../resources/img/mjolnir.png';


const RandomChar = (props) => {

    const [char, setChar] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const marvelService = new MarvelService();

    useEffect(() => {
        updateChar()
    },[])


    const onError = () => {
        setLoading(false)
        setError(true)
    }
    
    
    const updateChar = () => {
        const {getCharacter, _transformCharacter} = marvelService
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        
        getCharacter(id)
            .then(res => {
                const result = _transformCharacter(res.data.results[0])
                setChar(result)
                setLoading(false)
            })
            .catch(onError)
    }


    const onUpdateChar = () => {
        setLoading(true)
        setError(false)

        updateChar()
    }


        const {name, description, thumbnail, homepage, wiki } = char
        
        let descr = (description && description.length >= 210) ? description.slice(0, 210) + "..." : description

        let imgStyle = null

        if(thumbnail && thumbnail.slice(-23) === 'image_not_available.jpg'){
           imgStyle = {objectFit: "contain"}
        }

        const blockRandomChar = <div className="randomchar__block">
                                    <img src={thumbnail} alt="Random character" className="randomchar__img" style={imgStyle} />
                                    <div className="randomchar__info">
                                        <p className="randomchar__name">{name}</p>
                                        <p className="randomchar__descr">
                                            {descr}
                                        </p>
                                        <div className="randomchar__btns">
                                            <a href={homepage} className="button button__main">
                                                <div className="inner">homepage</div>
                                            </a>
                                            <a href={wiki} className="button button__secondary">
                                                <div className="inner">Wiki</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

        const spiner = loading ? <Spiner/> : null
        const errorMassage = error ? <ErrorMessage/> : null
        


        return (
            <div className="randomchar">
                { spiner }
                { errorMassage }
                { !(loading || error) ? blockRandomChar : null }
                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button className="button button__main">
                        <div className="inner"
                            onClick={onUpdateChar}>try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
                </div>
            </div>
        )
}

export default RandomChar;