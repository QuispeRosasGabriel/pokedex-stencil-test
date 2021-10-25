import React from "react";
import { useSelector } from "react-redux";
import PokeCard from "../../components/PokeCard";
import PokeInput from "../../components/PokeInput";
import "./styles.css";

const Pokedex = () => {
  const loading = useSelector((state) => state.pokemon.loading);
  const { data } = useSelector((state) => state.pokemon.pokemon);

  const transformTypesList = data?.types.map(({ type }) => type.name);

  const dataCard = {
    name: data?.name,
    imgSrc: data?.sprites?.front_default,
    types: transformTypesList,
  };

  return (
    <div>
      {!!loading ? (
        <p>Loading...</p>
      ) : (
        <div className="title-wrapper">
          <h1 className=''>Search a Pokémon and hover the card 😎</h1>
          <div className="components-wrapper">
            <div className="">
              <PokeInput />
            </div>
            <div>
              <PokeCard {...dataCard} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pokedex;
