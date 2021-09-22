import { Grid } from "@mui/material";
import "./App.css";
import ChatContainer from "./components/ChatContainer";
import MainVideo from "./components/MainVideo";
import Notifications from "./components/Notifications";
import Options from "./components/Options";
import MainContainer from "./MainContainer";
function App() {
  return (
    <div>
      <MainContainer>
        <Grid container>
          <Grid item xs={4}>
            <MainVideo />
          </Grid>
          <Grid item xs={8}>
            <ChatContainer />
            <Options>
              <Notifications />
            </Options>
          </Grid>
        </Grid>
      </MainContainer>
    </div>
  );
}

export default App;
