import React from 'react';
import Grid from '@mui/material/Grid';
import Mobile from '../imgs/mobile.png';
import Boxshot from '../imgs/boxshot.png';

type Props = {};

const Download = (props: Props) => {
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
            <div className='justify-center items-center'>
              <img src={Mobile} alt="" />
              <div className="w-auto border flex justify-center items-center rounded-lg mx-16">
                <div className="flex gap-2 ">
                  <img className="h-20" src={Boxshot} alt="" />
                  <div>
                    <h2 className="text-2xl">Stranger Thing</h2>
                    <div className='flex justify-between'>
                      <h3 className="flex start text-sky-700">Downloading...</h3>
                      <span className="loading loading-spinner"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-3xl">ดาวน์โหลดเนื้อหาไว้รับชมออฟไลน์</h1>
              <h2 className="text-2xl">
                บันทึกเนื้อหาโปรดได้ง่ายๆ และมีความบันเทิงพร้อมให้รับชมอยู่เสมอ
              </h2>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Download;
