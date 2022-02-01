import SearchBlock from "../SearchBlock";
import style from "./MainJokesBlock.module.scss";

function MainJokesBlock() {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <h1>MSI 2020</h1>
                <p className={style.header}>Hey!</p>
                <p className={style.title}>Let's try to find a joke for you:</p>
                <SearchBlock />
            </div>
        </div>
    );
}

export default MainJokesBlock;
