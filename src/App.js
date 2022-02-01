import "./App.scss";
import FavouriteJokes from "./components/FavouriteJokesBlock";
import MainJokesBlock from "./components/MainJokesBlock";

function App() {
    return (
        <div className="wrapper">
            <MainJokesBlock />
            <FavouriteJokes />
        </div>
    );
}

export default App;
