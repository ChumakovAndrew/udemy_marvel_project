import { useHttp } from '../hooks/http.hook'

const useMarvelService = () => {

    const _apiBase = "https://gateway.marvel.com:443/v1/public/"
    const _apiKey = "apikey=ab5709f6705f5f9a400e1448fb37647c"

    const {request, loading, error, clearError} = useHttp()


    const getAllCharacters = (offset = 200, limit = 9) => {
        return request(`${_apiBase}characters?limit=${limit}&offset=${offset}&${_apiKey}`);
    }

    const getCharacter = (id) => {
        return request(`${_apiBase}characters/${id}?${_apiKey}`);
    }

    const getAllComics = (offset = 0, limit = 8) => {
        return request(`${_apiBase}comics?limit=${limit}&offset=${offset}&${_apiKey}`)
    }

    const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description ? char.description : 'There is no description for this character',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }

    const transformComics = (comics) => {
        return {
            id: comics.id,
            title: comics.title,
            description: comics.description ? comics.description : 'There is no description for this character',
            thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
            prices: comics.prices[0].price
        }
    }

    return {loading, error, clearError, getAllCharacters, getCharacter, _transformCharacter, getAllComics, transformComics}
}


export default useMarvelService;