import { useEffect, useState } from 'react';
import  useMarvelService  from '../../services/MarvelService'

import Spiner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import './comicsList.scss';

const ComicsList = () => {

    const [comics, setComics] = useState([])
    const [moreComicsLoading, setMoreComicsLoading] = useState( false )
    const [offset, setOffset] = useState( 0 )


    const {loading, error, getAllComics, transformComics} = useMarvelService()

    useEffect(() => {
        updateComics()
    }, [])
    

    const onLoadMoreComics = () => {
        setMoreComicsLoading(true) 
        updateComics()
    }



    const updateComics = () => {
        
        getAllComics(offset, 8)
            .then(res => {
                const newOffset = offset + 8
                const result = res.data.results.map(item => ({...transformComics(item)}))
                setComics(comics => [...comics , ...result] )
                setMoreComicsLoading(false)
                setOffset(newOffset)
            })  
    }

    const renderComicsItem = () => {
        const items = comics.map((item, i) => {
            return (
                <li className="comics__item" key={i}>
                    <a href="#">
                        <img src={item.thumbnail} alt={item.title} className="comics__item-img"/>
                        <div className="comics__item-name">{item.title}</div>
                        <div className="comics__item-price">{item.prices}</div>
                    </a>
                </li>
            )
        })

        return (
            <ul className="comics__grid">
               {items}
            </ul>
        )
    }

    const items = renderComicsItem()
    const spiner = loading ? <Spiner/> : null
    const errorMessage = error ? <ErrorMessage/> : null

    return (
        <div className="comics__list">
            {errorMessage}
            {items}
            {spiner}
            <button 
                className="button button__main button__long"
                disabled={moreComicsLoading}
                onClick={onLoadMoreComics}
            >
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;