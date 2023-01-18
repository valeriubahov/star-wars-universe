import { CardActionArea, CardContent, CardHeader, Dialog } from "@mui/material";

import { IPlanet } from "../interfaces/swApi-interfaces";
import { useStarWarsContext } from "./context/StarWarsProvider";
import { getIdFromUrl, sortAscByField } from "../helpers/helpers";
import GridLayout from "../UI/GridLayout";
import GridCell from "../UI/ModalCard";
import { useState } from "react";
import PlanetDetails from "./PlanetDetails";

const Planets: React.FC = () => {
  const { selectedFilm, planets } = useStarWarsContext();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState<IPlanet>();

  const planetsList = selectedFilm!.planets.map((char: IPlanet | string) => {
    if (typeof char === "string") {
      const id = getIdFromUrl(char.toString());
      const filterData = planets?.filter((data) => {
        const charId = getIdFromUrl(data.url);
        return charId === id;
      });
      return filterData![0];
    }
    return undefined;
  });

  const sortedPlanets = sortAscByField(planetsList, "name");

  const handleCardClick = (character: IPlanet) => {
    setIsDialogOpen(true);
    setSelectedPlanet(character);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  return (
    <GridLayout>
      {sortedPlanets!.map((planet: IPlanet | undefined, index: number) => (
        <GridCell key={index}>
          <CardActionArea onClick={() => handleCardClick(planet!)}>
            <CardHeader title={planet!.name} sx={{ color: "#feda4a", textAlign: "center" }} />
            <CardContent />
          </CardActionArea>
        </GridCell>
      ))}
      <Dialog
        open={isDialogOpen}
        fullWidth={true}
        maxWidth="sm"
        scroll="body"
        onClose={handleCloseDialog}
        BackdropProps={{ style: { backgroundColor: "transparent" } }}
      >
        <PlanetDetails planet={selectedPlanet} onClose={handleCloseDialog} />
      </Dialog>
    </GridLayout>
  );
};

export default Planets;
