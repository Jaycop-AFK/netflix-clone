import React from "react";
import Grid from "@mui/material/Grid";

type Props = {};

const Enjoy = (props: Props) => {
  return (
    <div className="bg-slate-950 flex flex-col gap-5 justify-center items-center h-screen text-white">
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        style={{ height: "100%" }}
      >
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <h1 className="text-3xl">Enjoy on your TV</h1>
          <h2 className="text-1xl">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h2>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={4}
          className="flex items-center justify-center" // Centering the Grid item
        >
          <div className="h-15 w-25">
            <video className="rounded-xl" controls autoPlay>
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Enjoy;
