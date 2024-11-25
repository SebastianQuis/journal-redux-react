import { StadiumOutlined, StartOutlined } from "@mui/icons-material";
import { colors, Grid, Typography } from "@mui/material";
import React from "react";

export const NothingSelectedView = () => {
  return (
    <>
      {/* <Grid
            container
            spacing={ 0 }
            direction='column'
            alignItems='center'
            justifyContent='center'
            sx={{ minHeight: '100vh', backgroundColor: 'secondary.main' }}
        >

            <Grid item xs={12}>
                <StartOutlined sx={{ fontSize: '100px', color: 'grey' }} />
            </Grid>
            <Grid item xs={12}>
                <Typography>Selecciona o crea una cuenta</Typography>
            </Grid>

        </Grid> */}

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems={"center"}
        justifyContent="center"
        style={{ minHeight: "100vh", backgroundColor: "primary.main" }}
      >
        <Grid item sx={{ color: "grey" }}>
          <StadiumOutlined sx={{ fontSize: 100 }} />
        </Grid>
        <Grid item>
          <Typography variant="h5" />
          Nothing selected
          <Typography />
        </Grid>
      </Grid>
    </>
  );
};
