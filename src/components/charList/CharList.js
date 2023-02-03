import { Component } from 'react';

import MarvelService from '../../services/MarvelService';
import Spiner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './charList.scss';


class CharList extends Component{
        state = {
            chars:[],
            error: false,
            loading: true,
        }
    
    marvelService = new MarvelService()

    componentDidMount(){
        this.updateChars();
    }

    updateChars = () => {
        const {getAllCharacters, _transformCharacter} = this.marvelService

        getAllCharacters()
            .then(res => {
                this.setState({
                    chars: res.data.results.map(item => ({..._transformCharacter(item)})),
                    loading: false
                })  
            })
            .catch(this.onError)
            
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }
    
    renderItems = (chars) => {
        const items =  chars.map((item) => {
            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            }
            
            return (
                <li 
                    className="char__item"
                    key={item.id}
                    onClick={() => {this.props.onCharSelected(item.id)}}>
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
    

    render(){
        const {chars, loading, error} = this.state
        const item = this.renderItems(chars, );

        const spiner = loading ? <Spiner/> : null
        const errorMassage = error ? <ErrorMessage/> : null
        const cardsChar = !(loading || error) ? item : null
        
        return (
            <div className="char__list">
                {spiner}
                {errorMassage}
                {cardsChar}
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;