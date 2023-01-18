import { CardActionArea, CardContent, CardHeader, Dialog } from "@mui/material";

import { IPeople } from "../interfaces/swApi-interfaces";
import { useStarWarsContext } from "./context/StarWarsProvider";
import { getIdFromUrl, sortAscByField } from "../helpers/helpers";
import { useState } from "react";
import GridLayout from "../UI/GridLayout";
import GridCell from "../UI/ModalCard";
import CharacterDetails from "./CharacterDetails";

const Characters: React.FC = () => {
  const { selectedFilm, characters } = useStarWarsContext();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<IPeople>();

  const charactersList = selectedFilm!.characters.map((char: IPeople | string) => {
    if (typeof char === "string") {
      const id = getIdFromUrl(char.toString());
      const filterData = characters?.filter((data) => {
        const charId = getIdFromUrl(data.url);
        return charId === id;
      });
      return filterData![0];
    }
    return undefined;
  });

  const sortedCharacters = sortAscByField(charactersList, "name");

  const handleCardClick = (character: IPeople) => {
    handleDialog();
    setSelectedCharacter(character);
  };

  const handleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <GridLayout>
      {sortedCharacters!.map((char: IPeople | undefined, index: number) => (
        <GridCell key={index}>
          <CardActionArea onClick={() => handleCardClick(char!)}>
            <CardHeader title={char!.name} sx={{ color: "#feda4a", textAlign: "center" }} />
            <CardContent />
          </CardActionArea>
        </GridCell>
      ))}

      <Dialog
        open={isDialogOpen}
        fullWidth={true}
        maxWidth="sm"
        scroll="body"
        onClose={handleDialog}
        BackdropProps={{ style: { backgroundColor: "transparent" } }}
      >
        <CharacterDetails character={selectedCharacter} onClose={handleDialog} />
      </Dialog>
    </GridLayout>
  );
};

export default Characters;
