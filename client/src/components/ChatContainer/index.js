import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { StateContext } from "../../context/StateProvider";

function ChatContainer() {
  const [text, setText] = useState("");
  const { sendMessage, chat } = useContext(StateContext);
  const submitMessage = () => {
    sendMessage(text);
    setText("");
  };
  return (
    <Grid container width="100%" sx={{ marginLeft: "20px", marginTop: "30px" }}>
      <Grid item>
        <Box>
          <Typography color="GrayText">UserName</Typography>
          <Typography color="CaptionText">Message</Typography>
          {chat?.map((item, i) => {
            return (
              <div key={i}>
                <p>{item.id}</p>
                <p>{item.message}</p>
              </div>
            );
          })}
        </Box>
        <Box display="flex" marginY={4}>
          <TextField
            id="outlined-basic"
            label="Type Something"
            variant="outlined"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button onClick={() => submitMessage()}>Send</Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ChatContainer;
