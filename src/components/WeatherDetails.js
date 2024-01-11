import React, { useState } from "react";
import Header from "./Header";
import { TextField, Typography, Box } from "@mui/material";
import axios from "axios";
import WeatherCard from "./WeatherCard";
// Remove unused import
// import { SnackbarProvider, enqueueSnackbar } from "notistack";

const WeatherDetails = () => {
  const [weatherDetails, setWeatherDetails] = useState({});
  const [debounceTimeout, setDebounceTimeout] = useState(null);
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    debounceSearch(value, debounceTimeout);
  };

  const debounceSearch = (location, timeout) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    let newTimeout = setTimeout(() => {
      performSearch(location);
    }, 500);

    setDebounceTimeout(newTimeout);
  };

  const performSearch = async (location) => {
    // Perform your search based on the location
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=7756e849a1704d53b7554357241101&q=${location}&aqi=no`
      );
      setError(false);
      setWeatherDetails(response.data);
      //   console.log(weatherDetails);
    } catch (error) {
      setError(true);
      // Uncomment and modify this part if you want to use SnackbarProvider and enqueueSnackbar
      // if (error.response && error.response.status === 400) {
      //   enqueueSnackbar(error.response.data.message, { variant: "error" });
      // } else {
      //   enqueueSnackbar("Could not fetch the weather location details", {
      //     variant: "error",
      //   });
      // }
    }
  };

  return (
    <>
      <Header />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="20vh"
      >
        <TextField
          label="Enter Location"
          onChange={handleChange}
          style={{ width: "300px", textAlign: "center" }}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {error ? (
          <Typography mt={2}>No Matching Found</Typography>
        ) : (
          <WeatherCard weatherDetails={weatherDetails} />
        )}
      </Box>
    </>
  );
};

export default WeatherDetails;
