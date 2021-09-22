import { Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function ChatContainer() {
  return (
    <Grid container width="100%" sx={{ marginLeft: "20px", marginTop: "30px" }}>
      <Grid item>
        <Box>
          <Typography color="GrayText">UserName</Typography>
          <Typography color="CaptionText">Message</Typography>
        </Box>
        <Box marginY={4}>
          <TextField
            id="outlined-basic"
            label="Type Something"
            variant="outlined"
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default ChatContainer;
