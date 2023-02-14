import {useEffect, useState } from 'react';

import useMarvelService from '../../services/MarvelService';
import Spiner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './charList.scss';


const CharList = (props) => {

    const [ chars , setChars ] = useState( [] )
    const [ offset, setOffset ] = useState( '200' )
    const [ moreCharsLoading, setMoreCharsLoading ] = useState( false )
    
    
    const {loading, error, getAllCharacters, _transformCharacter} = useMarvelService()

    useEffect(() => {
        updateChars()
    }, [])



    const updateChars = () => {
        
        getAllCharacters(offset)
            .then(res => {
                const newChars = res.data.results.map(item => ({..._transformCharacter(item)}))
                const newOffset = +offset + 9
                    setChars(chars => [...chars, ...newChars]) 
                    setOffset(newOffset) 
                    setMoreCharsLoading(false)        
            })    
    }

    const onLoadMoreChars = () => {
        setMoreCharsLoading(true) 
        updateChars()
    }
    
    const renderItems = (chars) => {
        const items =  chars.map((item) => {
            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            }
            
            return (
                <li 
                    className="char__item"
                    key={item.id}
                    onClick={() => {props.onCharSelected(item.id)}}>
                        <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                        <div className="char__name">{item.name}</div>
                </li>
            ) 
        });

        return(
            <ul className="char__grid">
                    {items}
                </ul>
        )
    }
    

    const items = renderItems(chars);

    const spiner = loading ? <Spiner/> : null
    const errorMassage = error ? <ErrorMessage/> : null
    
    return (
        <div className="char__list">
            {errorMassage}
            {items} 
            {spiner} 
            <button 
                className="button button__main button__long" 
                onClick={onLoadMoreChars}
                disabled={moreCharsLoading}>
                <div className="inner">load more</div>
        </button>
        </div>
     
    )
}

export default CharList;