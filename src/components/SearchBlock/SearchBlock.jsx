import RadioButton from "../RadioButton";
import style from "./SearchBlock.module.scss";

function SearchBlock() {
    return (
        <div className={style.btn_container}>
            <form>
                <RadioButton />
                <RadioButton />
                <RadioButton />
                <button className={style.btn_search}>Get a joke</button>
            </form>
        </div>
    );
}

export default SearchBlock;
