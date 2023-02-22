import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Spiner from "../spinner/Spinner";
import AppHeader from "../appHeader/AppHeader";

const Page404 = lazy(() => import('../../pages/404'))
const MainPage = lazy(() => import('../../pages/mainPage'))
const ComicsPage = lazy(() => import('../../pages/comicsPage'))
const SingleComicPage = lazy(() => import('../../pages/singleComicPage/SingleComic'))


const App = () => {
    return (
        <Router>
        <div className="app">
            <AppHeader/>
            <main>
                <Suspense fallback={<Spiner/>}>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/comics" element={<ComicsPage/>}/>
                        <Route path="/comics/:comicId" element={<SingleComicPage/>}/>
                        <Route path="*" element={<Page404/>}/>
                    </Routes>
                </Suspense>
            </main>
        </div>
        </Router>
    )
}

export default App;