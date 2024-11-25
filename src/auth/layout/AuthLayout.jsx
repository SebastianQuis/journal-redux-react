import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh", backgroundColor: "primary.main" }}
      >
        {/* TODO - CARD BODY */}
        <Grid
          item
          className="box-shadow"
          xs={3}
          sx={{
            backgroundColor: "white",
            margin: 2,
            padding: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant={"h3"}>{title}</Typography>

          {children}
        </Grid>
      </Grid>
    </>
  );
};
