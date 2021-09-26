import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { StateContext } from "../../context/StateProvider";

function ChatContainer() {
  const [text, setText] = useState("");
  const { sendMessage, chat } = useContext(StateContext);
  const submitMessage = (e) => {
    e.preventDefault();
    sendMessage(text);
    setText("");
  };
  return (
    <Grid
      container
      width="90%"
      sx={{
        marginLeft: "20px",
        marginTop: "30px",
        borderWidth: "1px",
        borderColor: "#000000",
        borderStyle: "solid",
        height: "60vh",
        overflowY: "scroll",
      }}
    >
      <Grid item>
        <Box paddingX={2}>
          {chat?.map((item, i) => {
            return (
              <div key={i}>
                <Typography color="GrayText">{item.id}</Typography>
                <Typography color="CaptionText">{item.message}</Typography>
              </div>
            );
          })}
        </Box>
        <Box
          position="absolute"
          bottom={180}
          width="100%"
          display="flex"
          marginY={4}
        >
          <form onSubmit={submitMessage}>
            <TextField
              id="outlined-basic"
              label="Type Something"
              variant="outlined"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button type="submit">Send</Button>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ChatContainer;
