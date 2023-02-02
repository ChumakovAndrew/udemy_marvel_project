import { Component } from 'react';

import MarvelService from '../../services/MarvelService';

import './charList.scss';




class CharList extends Component{
    constructor(props){
        super(props)
        this.state = {
            chars:[]
        }
    }
    
    marvelService = new MarvelService

   componentDidMount(){
    this.updateChars()
   }

    onUpdateChars = (chars) => {
        this.setState({chars})
    }

    updateChars = () => {
        const {getAllCharacters, _transformCharacter} = this.marvelService
        let tempChars = []
        getAllCharacters()
            .then(res => {
                res.data.results.forEach(item => {
                    tempChars.push({..._transformCharacter(item)})   
                })
            this.onUpdateChars(tempChars)
            })
    }
    
    renderItems = (chars) => {
        
        const items =  chars.map((item) => {
            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            }
            console.log("я работаю")
            return (
                <li 
                    className="char__item"
                    key={item.id}>
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
        const {chars} = this.state
        const item = this.renderItems(chars);
        
        
        return (
            <div className="char__list">
                {item}
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;