import style from "./FavouriteJokesBlock.module.scss";

function FavouriteJokesBlock() {
    return (
        <div className={style.main}>
            <div className={style.content}>
                <h3>Favourite</h3>
                <div className={style.favouriteList}>_ _ _</div>
            </div>
        </div>
    );
}

export default FavouriteJokesBlock;
