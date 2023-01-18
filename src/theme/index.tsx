import { createTheme } from "@mui/material";

export const baseTheme = createTheme({
  palette: {
    secondary: {
      main: "#feda4a",
    },
  },
  typography: {
    fontFamily: "'Pathway Gothic One', sans-serif",
    h1: {
      fontSize: "2rem",
      color: "#feda4a",
      fontWeight: 700,
      textAlign: "center",
      // paddingBottom: "1rem",
    },
    h5: { fontSize: "1.2rem" },
    body1: {
      color: "#feda4a",
      fontSize: "0.875rem",
      fontFamily: "Century Gothic, CenturyGothic, AppleGothic, sans-serif",
      fontWeight: 600,
      letterSpacing: "1px",
      lineHeight: 1.43,
      margin: 0,
    },
    body2: {
      color: "#feda4a",
      fontSize: "0.875rem",
      fontFamily: "Century Gothic, CenturyGothic, AppleGothic, sans-serif",
      fontWeight: 600,
      letterSpacing: "1px",
      lineHeight: 1.43,
      margin: 0,
      textTransform: "capitalize",
    },
    caption: {
      fontSize: "1rem",
      color: "#feda4a",
      paddingLeft: "1rem",
    },
    button: {
      fontWeight: 700,
    },
  },
  components: {
    MuiCardHeader: {
      styleOverrides: {
        root: {
          paddingBottom: 0,
          textTransform: "capitalize",

          title: {
            fontWeight: 700,
          },
        },
        subheader: {
          opacity: 0.7,
          fontSize: "1.4rem",
          fontWeight: 700,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(2px)",
          backgroundColor: "rgba(0,0,20,0.4)",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          paddingTop: 0,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)",
          position: "relative",
          color: "#fff",
          margin: "0px !important",
        },
      },
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            borderRadius: 10,
            backgroundColor: "transparent",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            paddingBottom: "2rem",
            paddingTop: "2rem",
          },
        },
      ],
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        size: "small",
        fullWidth: true,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#F5F5F5",
          borderRadius: "20rem",
        },
        notchedOutline: {
          borderColor: "transparent",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "20rem",
          borderWidth: "1px",
          borderColor: "transparent",
          borderStyle: "solid",
          transitionDeration: "unset",
        },
        containedSecondary: {
          "&:hover": {
            backgroundColor: "#F5F5F5",
            borderColor: "rgba(0, 0, 0, 0.87)",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        colorSecondary: {
          color: "#c5c5c5",
          "&:hover": {
            backgroundColor: "#f5f5f5",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "#feda4a",
          "&.Mui-selected": {
            color: "rgb(75, 213, 238)",
            border: "1px solid rgb(75, 213, 238)",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          marginTop: "1rem",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthSm: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          px: "0px",
        },
      },
    },
  },
});
