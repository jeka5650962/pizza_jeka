import styles from "./Search.module.scss"

const Search = ({searchValue, setSearchValue}) => {
    return (
        <div className={styles.search}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <g id="search">
                    <path
                        d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z"/>
                </g>
            </svg>
            {
                searchValue &&
                <svg onClick={() => setSearchValue('')} viewBox="0 0 20 19.84" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.17,10l3.89-3.89a.37.37,0,1,0-.53-.53L9.64,9.43,5.75,5.54a.37.37,0,1,0-.53.53L9.11,10,5.22,13.85a.37.37,0,0,0,0,.53.34.34,0,0,0,.26.11.36.36,0,0,0,.27-.11l3.89-3.89,3.89,3.89a.34.34,0,0,0,.26.11.35.35,0,0,0,.27-.11.37.37,0,0,0,0-.53Z"/>
                </svg>
            }
            <input value={searchValue} onChange={event => setSearchValue(event.target.value)}
                   placeholder="Найти пиццу ..."/>
        </div>
    )
}

export default Search
