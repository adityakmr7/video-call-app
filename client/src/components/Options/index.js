import {
  Button,
  Container,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { Assignment, PhoneDisabled } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { StateContext } from "../../context/StateProvider";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  gridContainer: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  container: {
    width: "600px",
    margin: "35px 0",
    padding: 0,
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
  margin: {
    marginTop: 20,
  },
  padding: {
    padding: 20,
  },
  paper: {
    padding: "10px 20px",
    border: "2px solid black",
  },
}));
function Options({ children }) {
  const { me, name, setName, callEnded, callAccepted, leaveCall, callUser } =
    useContext(StateContext);
  const [idToCall, setIdToCall] = useState("");
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Paper className={classes.paper}>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid contianer className={classes.gridContainer}>
            <Grid item xs={12} md={6} className={classes.padding}>
              <Typography gutterBottom variant="h6">
                Account Info
              </Typography>
              <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <CopyToClipboard text={me} className={classes.margin}>
                <Button variant="contained" color="primary" fullWidth>
                  <Assignment /> Copy your ID
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6} className={classes.padding}>
              <Typography gutterBottom variant="h6">
                Make a call
              </Typography>
              <TextField
                label="ID to call"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
              />
              {callAccepted && !callEnded ? (
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<PhoneDisabled />}
                  onClick={leaveCall}
                  className={classes.margin}
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
            </Grid>
          </Grid>
        </form>
      </Paper>
      {children}
    </Container>
  );
}

export default Options;
