import { Grid, Typography } from "@material-ui/core";

import React, { useContext } from "react";
import { StateContext } from "../../context/StateProvider";

function MainVideo() {
  const { myVideo, stream, userVideo, name, callAccepted, callEnded, call } =
    useContext(StateContext);

  return (
    <Grid direction="row" justifyContent="center" alignItems="center" container>
      {stream && (
        <Grid item xs={12} md={6}>
          <Typography>{name || "Name"}</Typography>
          <video ref={myVideo} autoPlay={true} id="videoElement" />
        </Grid>
      )}

      {/* UserVideo */}
      {callAccepted && !callEnded && (
        <Grid item xs={6} md={6}>
          <Typography>{call?.name || "Name"}</Typography>
          <video
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
