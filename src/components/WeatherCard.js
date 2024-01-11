import React from "react";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { Box, Typography } from "@mui/material";

const WeatherCard = ({ weatherDetails }) => {
  // Use optional chaining to handle undefined properties

  const locationName = weatherDetails?.location?.name;
  const locationCountry = weatherDetails?.location?.country;

  const tempCelcius = weatherDetails?.current?.temp_c;
  const tempFahrenheit = weatherDetails?.current?.temp_f;
  const conditionIcon = weatherDetails?.current?.condition?.icon;
  const conditionIconAlt = weatherDetails?.current?.condition?.icon;
  const conditionText = weatherDetails?.current?.condition?.text;
  const windSpeed = weatherDetails?.current?.wind_kph;
  const humidity = weatherDetails?.current?.humidity;
  const cloudCoverage = weatherDetails?.current?.cloud;
  const lastUpdate = weatherDetails?.current?.last_updated;

  console.log(weatherDetails);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      border="1px solid #ccc" // Add a border around the content
      borderRadius="8px" // Optional: Add border radius for rounded corners
      padding="16px" // Optional: Add padding to the box
      marginBottom="16px" // Optional: Add margin at the bottom
    >
      {/* <Typography variant="h4">
        {locationName && locationCountry ? (
          `${locationName}, ${locationCountry}`
        ) : (
          <Typography mt={2}>No Matching Found</Typography>
        )}
      </Typography> */}

      {locationName && locationCountry ? (
        <Container>
          <Typography variant="h4" marginBottom={3}>
            {locationName}, {locationCountry}
            <img
              src={conditionIcon}
              alt={conditionIconAlt}
              style={{ width: "25%", marginBottom: "8px" }}
            />
          </Typography>
          <Box>
            <Grid container spacing={2}>
              {/* leftcolumn */}
              <Grid item xs={6}>
                <Typography variant="h6">Temperature:</Typography>
                <Typography variant="h6">Condition:</Typography>
                <Typography variant="h6">Wind Speed:</Typography>
                <Typography variant="h6">Humidity:</Typography>
                <Typography variant="h6">Cloud Coverage:</Typography>
                <Typography variant="h6">Last Update:</Typography>
              </Grid>
              {/* rightColumn */}
              <Grid item xs={6}>
                <Typography variant="h6">
                  {`${tempCelcius}°C / ${tempFahrenheit}°F`}
                </Typography>
                <Typography variant="h6">{`${conditionText}`}</Typography>
                <Typography variant="h6">{`${windSpeed}km/h`}</Typography>
                <Typography variant="h6">{`${humidity}%`}</Typography>
                <Typography variant="h6">{`${cloudCoverage}%`}</Typography>
                <Typography variant="h6">{`${lastUpdate}`}</Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      ) : (
        <Typography mt={2}>No Matching Found</Typography>
      )}
    </Box>
  );
};

export default WeatherCard;
