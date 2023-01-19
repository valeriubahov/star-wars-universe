import { CardMedia } from "@mui/material";

interface ImageBox {
  fileName: string;
  componentName: string;
}
const ImageContainer: React.FC<ImageBox> = ({ fileName, componentName }) => {
  return (
    <CardMedia
      component="img"
      loading={"lazy"}
      alt={fileName}
      image={require(`/src/images/${componentName}/${fileName
        .replaceAll(" ", "")
        .replaceAll("é", "e")
        .toLowerCase()}.png`)}
      sx={{
        pointerEvents: "none",
        height: "21rem",
        maxWidth: "83vw",
        maxHeight: "90vh",
        objectFit: "scale-down",
        overflow: "none",
      }}
    />
  );
};

export default ImageContainer;
