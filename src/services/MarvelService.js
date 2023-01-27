
class MarvelSevice {
    getResourse = async (url) => {
        let res = await fetch(url);

        if(!res.ok){
            throw new Error (`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResourse("https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=210&apikey=ab5709f6705f5f9a400e1448fb37647c")
    }
    
}

export default MarvelSevice