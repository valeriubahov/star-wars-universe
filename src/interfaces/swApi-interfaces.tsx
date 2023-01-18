export interface IFilm {
  type: "film";
  characters: string[] | IPeople[];
  created: Date;
  director: string;
  edited: Date;
  episode_id: string;
  opening_crawl: string;
  planets: string[] | IPlanet[];
  producer: string;
  release_date: Date;
  species: string[] | ISpecie[];
  starships: string[] | IStarship[];
  title: string;
  url: string;
  vehicles: string[] | IVehicle[];
  image?: string;
}
export interface IPeople {
  type: "person";
  birth_year: string;
  eye_color: string;
  films: string[] | IFilm[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string | IPlanet;
  mass: string;
  name: string;
  skin_color: string;
  created: Date;
  edited: Date;
  species: string[] | ISpecie[];
  starships: string[] | IStarship[];
  url: string;
  vehicles: string[] | IVehicle[];
  image?: string;
}
export interface IPlanet {
  type: "planet";
  climate: string;
  created: Date;
  diameter: string;
  edited: Date;
  films: string[] | IFilm[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[] | IPeople[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
  image?: string;
  id?: number;
}
export interface ISpecie {
  type: "specie";
  average_height: string;
  average_lifespan: string;
  classification: string;
  created: Date;
  designation: string;
  edited: Date;
  eye_colors: string;
  hair_colors: string;
  homeworld: string | IPlanet;
  language: string;
  name: string;
  people: string[] | IPeople[];
  films: string[] | IFilm[];
  skin_colors: string;
  url: string;
  image?: string;
}
export interface IStarship {
  type: "ship";
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: Date;
  crew: string;
  edited: Date;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  films: string[] | IFilm[];
  pilots: string[] | IPeople[];
  starship_class: string;
  url: string;
  image?: string;
}
export interface IVehicle {
  type: "vehicle";
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: Date;
  crew: string;
  edited: Date;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots: string[] | IPeople[];
  films: string[] | IFilm[];
  url: string;
  vehicle_class: string;
  image?: string;
}

export interface StarWarsProviderProps {
  children: React.ReactNode;
}

export interface FetchFilms {
  results: IFilm[];
}

export interface FetchPlanets {
  results: IPlanet[];
}

export interface StarWarsContextData {
  films: IFilm[];
  isLoading: boolean;
  handleSelectedFilm: (film: IFilm) => void;
  selectedFilm: IFilm | undefined;
  planets: IPlanet[] | undefined;
  species: ISpecie[] | undefined;
  characters: IPeople[] | undefined;
}
