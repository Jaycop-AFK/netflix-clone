import React from "react";
import Grid from "@mui/material/Grid";
import Mobile from "../imgs/mobile.png";
import Boxshot from "../imgs/boxshot.png";

type Props = {};

const Streaming = (props: Props) => {
  return (
    <div className="bg-gray-950 flex flex-col gap-5 justify-center items-center h-screen text-white">
      <Grid container spacing={2} justifyContent="center">
        <Grid
          className=" items-center justify-center "
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <div className="flex flex-wrap-reverse justify-center items-center">
            <div className="justify-center items-center">
              <h1 className="text-4xl">Watch everywhere</h1>
              <h3 className="text-2xl">
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </h3>
            </div>
            <div>
              
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Streaming;
