import style from "./RadioButton.module.scss";

function RadioButton() {
    return (
        <div className={style.input_block}>
            <input
                type="radio"
                id="searchRandom"
                value="random"
                name="search"
            />
            <label htmlFor="searchRandom">Random</label>
        </div>
    );
}

export default RadioButton;
