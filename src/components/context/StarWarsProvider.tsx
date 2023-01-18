import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { sortAscByField, ENDPOINTS } from "../../helpers/helpers";
import {
  IFilm,
  IPeople,
  IPlanet,
  ISpecie,
  StarWarsContextData,
  StarWarsProviderProps,
} from "../../interfaces/swApi-interfaces";

export const StarWarsContext = createContext<StarWarsContextData | undefined>(undefined);

const StarWarsProvider: React.FC<StarWarsProviderProps> = ({ children }) => {
  const [films, setFilms] = useState<IFilm[]>();
  const [characters, setCharacters] = useState<IPeople[]>([]);
  const [planets, setPlanets] = useState<IPlanet[]>([]);
  const [species, setSpecies] = useState<ISpecie[]>([]);

  const [selectedFilm, setSelectedFilm] = useState<IFilm>();
  const [isLoading, setIsLoading] = useState(true);

  const fetchApi = useCallback(async (url: string, type: string) => {
    const response = await fetch(url);
    const data = await response.json();

    switch (type) {
      case "films":
        const sortedFilms: IFilm[] = sortAscByField(data.results, "episode_id");
        const arrayWithFilms = sortedFilms.map((film) => {
          return { ...film, image: require(`/src/images/films/episode${film.episode_id}.jpg`) };
        });
        setFilms(arrayWithFilms);
        setSelectedFilm(arrayWithFilms[0]);
        break;
      case "planets":
        const planetsData: IPlanet[] = data.results;
        setPlanets((prev) => prev && [...prev, ...planetsData]);

        // recursive call till API have no more data
        if (data.next !== null) {
          await fetchApi(data.next, "planets");
        }
        break;
      case "species":
        const speciesData: ISpecie[] = data.results;

        setSpecies((prev) => prev && [...prev, ...speciesData]);

        // recursive call till API have no more data
        if (data.next !== null) {
          await fetchApi(data.next, "species");
        }
        break;
      case "characters":
        const charactersData: IPeople[] = data.results;

        setCharacters((prev) => prev && [...prev, ...charactersData]);

        // recursive call till API have no more data to return
        if (data.next !== null) {
          await fetchApi(data.next, "characters");
        }
        setIsLoading(false);
        break;
    }
  }, []);

  useEffect(() => {
    ENDPOINTS.forEach((endpoint) => {
      fetchApi(endpoint.url, endpoint.type);
    });
  }, [fetchApi]);

  const handleSelectedFilm = (film: IFilm) => {
    setSelectedFilm(film);
  };

  if (!films) {
    return <div></div>;
  }

  return (
    <StarWarsContext.Provider
      value={{
        films,
        isLoading,
        handleSelectedFilm,
        selectedFilm,
        planets,
        species,
        characters,
      }}
    >
      {children}
    </StarWarsContext.Provider>
  );
};

export const useStarWarsContext = () => {
  const context = useContext(StarWarsContext);

  if (!context) {
    throw Error("Cannot use `useStarWarsContext` outside of `StarWarsProvider`");
  }

  return context;
};

export default StarWarsProvider;
