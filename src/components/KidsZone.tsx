import React from "react";
import Grid from "@mui/material/Grid";
import Kids from '../imgs/kids.png'

type Props = {};

const KidsZone = (props: Props) => {
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
              <img src={Kids} alt="" />
            </div>
            <div>
              <h1 className="text-3xl">Create Profile For Kids</h1>
              <h2 className="text-1xl">
                Send kids on adventures with their favorite characters in a
                space
              </h2>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default KidsZone;
