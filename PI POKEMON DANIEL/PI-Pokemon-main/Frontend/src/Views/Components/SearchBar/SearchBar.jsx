import style from './SearchBar.module.css'

const SearchBar = () => {

    return(
        <div className={style.SearchBar}>
            <input style={{backgroundColor: 'white', width:'50%', color: 'black'}}type="search" name="search" id="search" placeholder='Busca tu pokemon...' />
            <button>Search</button>
        </div>
    )
}
export default SearchBar;