import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { StateContext } from "../../context/StateProvider";

function Notifications() {
  const { answerCall, call, callAccepted } = useContext(StateContext);

  return (
    <>
      {call?.isReceivedCall && !callAccepted && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>{call.name} is calling</h1>
          <Button onClick={answerCall} variant="contained">
            Answer
          </Button>
        </div>
      )}
    </>
  );
}

export default Notifications;
