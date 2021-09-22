import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import { Assignment, PhoneDisabled } from "@mui/icons-material";
import { Box, style } from "@mui/system";
import React, { useContext, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { StateContext } from "../../context/StateProvider";
const styles = {
  root: {
    // display: "flex",
    // flexDirection: "column",
  },
  gridContainer: {
    width: "100%",
    flexDirection: "row",
    // [theme.breakpoints.down("xs")]: {
    //   flexDirection: "column",
    // },
  },
  container: {
    width: "100%",
    // margin: "35px 0",
    padding: 0,
    // [theme.breakpoints.down("xs")]: {
    //   width: "80%",
    // },
  },
  margin: {
    marginTop: 20,
  },
  padding: {
    padding: 20,
  },
  paper: {
    padding: "10px 20px",
    // border: "2px solid black",
  },
};
function Options({ children }) {
  const { me, name, setName, callEnded, callAccepted, leaveCall, callUser } =
    useContext(StateContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <Container sx={styles.container}>
      {/* <Paper className={classes.paper}> */}
      <form sx={styles.root} noValidate autoComplete="off">
        <Grid contianer direction="row" display="flex">
          <Grid item xs={12} md={6}>
            <Typography gutterBottom variant="h6">
              Account Info
            </Typography>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Box sx={{ width: "200px" }}>
              <CopyToClipboard text={me} sx={{ marginTop: "10px" }}>
                <Button variant="contained" color="primary" fullWidth>
                  <Assignment /> Copy your ID
                </Button>
              </CopyToClipboard>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography gutterBottom variant="h6">
              Make a call
            </Typography>
            <TextField
              style={{ marginBottom: "20px" }}
              label="ID to call"
              value={idToCall}
              onChange={(e) => setIdToCall(e.target.value)}
            />
            <Box width="200px" display="flex" maringX={4}>
              {callAccepted && !callEnded ? (
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<PhoneDisabled />}
                  onClick={leaveCall}
                  sx={styles.margin}
                >
                  Hang Up
                </Button>
              ) : (
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  onClick={() => callUser(idToCall)}
                >
                  Call
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>
      </form>
      {/* </Paper> */}
      {children}
    </Container>
  );
}

export default Options;
