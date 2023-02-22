import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import Spiner from '../../components/spinner/Spinner';

import './singleComic.scss';


const SingleComicPage = () => {
    const [comic, setComic] = useState({})

    const {comicId} = useParams()
    const {loading, error, getComic, transformComics} = useMarvelService()


    useEffect(() => {
        getComic(comicId)
            .then(res => {
                const comic = transformComics(res.data.results[0])
                setComic(comic)
            }
        )
    }, [])


    const renderSingleComic = (comic) => {
        const {title, description, price, thumbnail, pageCount, language} = comic

        return (
            <>
                <img src={thumbnail} alt={title} className="single-comic__img"/>
                <div className="single-comic__info">
                        <h2 className="single-comic__name">{title}</h2>
                        <p className="single-comic__descr">{description}</p>
                        <p className="single-comic__descr">{pageCount}</p>
                        <p className="single-comic__descr">{language}</p>
                        <div className="single-comic__price">{price}$</div>
                </div>
            </>
        )
    }

    

    const spiner = loading ? <Spiner/> : null
    const errorMassage = error ? <ErrorMessage/> : null

    const SingleComic = !error ? renderSingleComic(comic) : null
    return (

        <>
        {spiner}
        {errorMassage}
        <div className="single-comic">
            {SingleComic}
        </div>
        </>
    )
}

export default SingleComicPage;