import { Button } from "@material-ui/core";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { StateContext } from "../../context/StateProvider";

function Notifications() {
  const { answerCall, call, callAccepted } = useContext(StateContext);

  return (
    <>
      {call?.isReceivedCall && !callAccepted && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography>{call.name} is calling</Typography>
          <Box marginX={4}>
            <Button color="primary" onClick={answerCall} variant="contained">
              Answer
            </Button>
          </Box>
        </div>
      )}
    </>
  );
}

export default Notifications;
