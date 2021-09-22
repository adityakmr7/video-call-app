import { Grid, Typography } from "@mui/material";

import React, { useContext } from "react";
import { StateContext } from "../../context/StateProvider";

function MainVideo() {
  const { myVideo, stream, userVideo, name, callAccepted, callEnded, call } =
    useContext(StateContext);

  return (
    <Grid direction="row" justifyContent="center" alignItems="center" container>
      {stream && (
        <Grid item>
          {/* <Typography>{name || "Name"}</Typography> */}
          <video
            style={{ width: "100%", height: "300px" }}
            ref={myVideo}
            autoPlay={true}
            id="videoElement"
          />
        </Grid>
      )}

      {/* UserVideo */}
      {callAccepted && !callEnded && (
        <Grid item>
          <Typography>{call?.name || "Name"}</Typography>
          <video
            style={{ width: "100%", height: "300px" }}
            playsInline
            muted
            ref={userVideo}
            autoPlay
            id="videoElement2"
          />
        </Grid>
      )}
    </Grid>
  );
}

export default MainVideo;
