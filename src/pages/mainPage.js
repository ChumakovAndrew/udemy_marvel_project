import { useCallback, useState } from "react";

import RandomChar from "../components/randomChar/RandomChar";
import CharList from "../components/charList/CharList";
import CharInfo from "../components/charInfo/CharInfo";

import decoration from '../resources/img/vision.png';

const MainPage = ( ) => {
    const [selectedChar, setChar] = useState(null)

    const onCharSelected = useCallback((id) => {
        setChar(id)
    }, [])

    return(
        <>
            <RandomChar/>
            <div className="char__content">
                <CharList onCharSelected={onCharSelected}/>
                <CharInfo charId={selectedChar} />
            </div>
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
    )
}

export default MainPage