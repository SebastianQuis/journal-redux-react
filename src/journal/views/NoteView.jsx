import { Typography, Grid, Button, TextField } from "@mui/material";
import React from "react";
import { ImageGallery } from "../components/ImageGallery";

export const NoteView = () => {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        // alignContent="center"
        // justifyContent="center"
        paddingY={"2rem"}
        paddingX={"2rem"}
        style={{ minHeight: "100vh", backgroundColor: "primary.main" }}
      >
        <Grid
          container
          justifyContent={"space-between"}
          direction={"row"}
          alignItems={"center"}
        >
          <Typography>28 de agosto, 2023</Typography>
          <Button sx={{ padding: "8px" }}>Guardar</Button>
        </Grid>

        <TextField
          variant="filled"
          type="text"
          style={{ marginTop: "1rem" }}
          placeholder="Título"
          fullWidth
          label="Título"
        />
        <TextField
          variant="filled"
          type="text"
          style={{ marginTop: "1rem" }}
          placeholder="¿Qué sucedio en el día de hoy?"
          fullWidth
          multiline
          minRows={5}
        />
        <ImageGallery />
      </Grid>
    </>
  );
};
