import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Grid } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import { MicOff, Videocam, VideocamOff } from "@material-ui/icons";
import AppDrawer from "../components/AppDrawer";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    // padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerRight({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        {children}
        {/* <div

          style={{
            // backgroundColor: "#000000",
            position: "absolute",
            width: "80%",
            bottom: 0,
            height: 80,
          }}
        >
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <MicIcon />
              <MicOff />
              <Videocam />
              <VideocamOff />
            </Grid>
            <Grid item>
              <MicIcon />
              <MicOff />
              <Videocam />
              <VideocamOff />
            </Grid>
            <Grid item>
              <h1>Leave Meeting</h1>
            </Grid>
          </Grid>
        </div> */}
      </main>
      {/* <AppDrawer /> */}
    </div>
  );
}
