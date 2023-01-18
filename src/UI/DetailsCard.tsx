import { Box, DialogTitle, IconButton, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ImageContainer from "./ImageContainer";

interface DetailsCardInterface {
  name: string;
  component?: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DetailsCard: React.FC<DetailsCardInterface> = ({ onClose, name, component, children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: 0,
        backgroundColor: "black",
      }}
    >
      <Paper
        sx={{
          background: "transparent",
          borderBottom: 0,
          borderRadius: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            px: 2,
            pt: 2,
            border: 0,
          }}
        >
          <IconButton onClick={onClose} color="inherit">
            <CloseIcon sx={{ color: "#feda4a" }} />
          </IconButton>
        </Box>

        <Box>
          <DialogTitle
            sx={{
              display: "flex",
              fontSize: "3rem",
              fontWeight: 800,
              margin: 0,
              padding: 0,
              color: "#feda4a",
              textAlign: "center",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {component ? <ImageContainer fileName={name} componentName={component} /> : <>{name}</>}
          </DialogTitle>
        </Box>
      </Paper>

      <Paper
        variant="outlined"
        sx={{
          px: 0,
          pt: 0,
          pb: 0,
          border: "none",
          borderRadius: 0,
        }}
      >
        {children}
      </Paper>
    </Box>
  );
};

export default DetailsCard;
