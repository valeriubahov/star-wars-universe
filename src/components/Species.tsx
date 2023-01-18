import { CardActionArea, CardContent, CardHeader, Dialog } from "@mui/material";
import { ISpecie } from "../interfaces/swApi-interfaces";
import { useStarWarsContext } from "./context/StarWarsProvider";
import { getIdFromUrl, sortAscByField } from "../helpers/helpers";
import { useState } from "react";
import SpecieDetails from "./SpecieDetails";
import GridLayout from "../UI/GridLayout";
import GridCell from "../UI/ModalCard";

const Species: React.FC = () => {
  const { selectedFilm, species } = useStarWarsContext();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedSpecie, setSelectedSecie] = useState<ISpecie>();

  const speciesList = selectedFilm!.species.map((specie: ISpecie | string) => {
    if (typeof specie === "string") {
      const id = getIdFromUrl(specie.toString());
      const filterData = species?.filter((data) => {
        const specId = getIdFromUrl(data.url);
        return specId === id;
      });
      return filterData![0];
    }
    return undefined;
  });

  const sortedSpecies = sortAscByField(speciesList, "name");

  const handleCardClick = (specie: ISpecie) => {
    setIsDialogOpen(true);
    setSelectedSecie(specie);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <GridLayout>
      {sortedSpecies &&
        sortedSpecies.map((specie: ISpecie | undefined, index: number) => (
          <GridCell key={index}>
            <CardActionArea onClick={() => handleCardClick(specie!)}>
              <CardHeader title={specie!.name} sx={{ color: "#feda4a", textAlign: "center" }} />
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
        <SpecieDetails specie={selectedSpecie} onClose={handleCloseDialog} />
      </Dialog>
    </GridLayout>
  );
};

export default Species;
