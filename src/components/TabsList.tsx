import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import AboutFilm from "./AboutFilm";
import Characters from "./Characters";
import Planets from "./Planets";
import Species from "./Species";

const TabsList: React.FC = () => {
  const [currentTab, setCurrentTab] = useState("about");

  function handleTabChange(event: React.SyntheticEvent, newValue: string) {
    setCurrentTab(newValue);
  }
  return (
    <>
      <Tabs
        value={currentTab}
        onChange={handleTabChange}
        variant="fullWidth"
        indicatorColor="secondary"
        TabIndicatorProps={{
          style: { backgroundColor: "rgb(75, 213, 238)" },
        }}
      >
        <Tab value="about" label="About" />
        <Tab value="characters" label="Characters" />
        <Tab value="planets" label="Planets" />
        <Tab value="species" label="Species" />
      </Tabs>

      <Box py={2}>
        {currentTab === "about" && <AboutFilm />}
        {currentTab === "characters" && <Characters />}
        {currentTab === "planets" && <Planets />}
        {currentTab === "species" && <Species />}
      </Box>
    </>
  );
};

export default TabsList;
