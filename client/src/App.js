import "./App.css";
import MainVideo from "./components/MainVideo";
import Notifications from "./components/Notifications";
import Options from "./components/Options";
import MainContainer from "./MainContainer";
function App() {
  return (
    <div>
      <MainContainer>
        <MainVideo />
        <Options>
          <Notifications />
        </Options>
      </MainContainer>
    </div>
  );
}

export default App;
