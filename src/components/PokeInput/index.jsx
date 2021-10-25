import React, { useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchPokemon } from "../../redux/actions/pokemonAction";
import "./styles.css";

const PokeInput = () => {
    const dispatch = useDispatch();
    const searchTerm = useRef('');

    const handleCallPokemon = (pokeName) => dispatch(searchPokemon(pokeName));

    const handleSearch = (e) => e.code === 'Enter' && handleCallPokemon(searchTerm.current.value.toLowerCase())
    

  return (
    <div className="demo">
      <div className="input search" style={{ marginTop: "10px" }}>
        <input type="submit" value="" />
        <input
          className="input__inner"
          type="text"
          name="my_input"
          placeholder="Search"
          ref={searchTerm}
          onKeyDown={(e) => handleSearch(e)}
        />
        <span className="input__border"></span>
      </div>
    </div>
  );
};

export default PokeInput;
