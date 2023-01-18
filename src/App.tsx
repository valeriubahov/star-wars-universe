import { ThemeProvider } from "@mui/system";
import Home from "./pages/Home";
import StarWarsProvider from "./components/context/StarWarsProvider";
import { baseTheme } from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <StarWarsProvider>
        <Home />
      </StarWarsProvider>
    </ThemeProvider>
  );
};

export default App;
