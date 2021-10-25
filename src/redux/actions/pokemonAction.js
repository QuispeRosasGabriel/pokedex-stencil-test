import {
  SEARCH_POKEMON,
  SEARCH_POKEMON_ERROR,
  SEARCH_POKEMON_EXITO,
} from "../types";
import axiosClient from "../../config/clientAxios";
import Swal from "sweetalert2";

export const searchPokemon = (pokemonName) => async (dispatch) => {
  dispatch(startSearch());
  try {
    const pokeData = await axiosClient.get(`pokemon/${pokemonName}`);
    dispatch(successSearch(pokeData));
    Swal.fire("Success", "Here is the Pokemon info", "success");
  } catch (error) {
    console.log(error);
    dispatch(failedSearch(true));

    Swal.fire({
      icon: "error",
      title: "Something went wrong",
      text: "Try again",
    });
  }
};

const startSearch = () => ({
  type: SEARCH_POKEMON,
  paylaod: true,
});

const successSearch = (pokeData) => ({
  type: SEARCH_POKEMON_EXITO,
  payload: pokeData,
});

const failedSearch = (value) => ({
  type: SEARCH_POKEMON_ERROR,
  payload: value,
});
