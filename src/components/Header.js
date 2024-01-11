import React from "react";
import { Box, Typography } from "@mui/material";
import "./Header.css";
import App from "./../App";

const Header = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="10vh"
      className="header"
      backgroundColor="#145DA0"
    >
      <Typography variant="h4" style={{ color: "white" }}>
        Weather App
      </Typography>
    </Box>
  );
};

export default Header;
