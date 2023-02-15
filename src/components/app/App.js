// import { useCallback, useState } from "react";

import ComicsList from "../comicsList/ComicsList"
import AppHeader from "../appHeader/AppHeader";
// import RandomChar from "../randomChar/RandomChar";
// import CharList from "../charList/CharList";
// import CharInfo from "../charInfo/CharInfo";

// import decoration from '../../resources/img/vision.png';

const App = () => {
    
    // const [selectedChar, setChar] = useState(null)

    // const onCharSelected = useCallback((id) => {
    //     setChar(id)
    // }, [])



    return (
        <div className="app">
            <AppHeader/>
            <main>
                <ComicsList/>
                {/* <RandomChar/>
                <div className="char__content">
                    <CharList onCharSelected={onCharSelected}/>
                    <CharInfo charId={selectedChar} />
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/> */}
            </main>
        </div>
    )
}

export default App;