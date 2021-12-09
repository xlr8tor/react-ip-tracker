import { useState, useEffect } from "react";
import "./App.css";

//Components
import Header from "./Components/Header/Header";
import Info from "./Components/Info/Info";
import SearchBar from "./Components/SearchBar/SearchBar";
import Map from "./Components/Map/Map";

//Styles
import { GlobalStyles } from "./GlobalStyles";

function App() {
  const [state, setState] = useState({
    ip: "",
    location: "",
    timezone: "",
    isp: "",
  });

  const [inputText, setInputText] = useState("");
  const [coordinates, setCoordinates] = useState({
    latitude: "",
    longitude: "",
  });

  useEffect(() => {
    const BaseURL = `https://geo.ipify.org/api/v2/country?apiKey=at_1eOwaoyynv2OrKjDZSIHyo0VvVlnf&ipAddress=${inputText}`;
    const getData = async (BaseURL) => {
      const {
        ip,
        location: { region: location },
        location: { timezone },
        isp,
      } = await (await fetch(BaseURL)).json();
      setState({ ip, location, timezone, isp });
      const API_KEY = "d7cb34113fd755abda85adc2bfdf5aba";
      const BaseURI = `http://api.positionstack.com/v1/reverse?access_key=${API_KEY}&query=${ip}`;

      const result = await (await fetch(BaseURI)).json();
      const { latitude, longitude } = result.data[0];
      setCoordinates({ latitude, longitude });
    };

    getData(BaseURL);
  }, [inputText]);

  const submit = (text) => {
    setInputText(text);
  };

  return (
    <div className="App">
      <div>
        <Header text={"IP Address Tracker"} />
        <SearchBar onSubmit={submit} />
        <Info state={state} />
      </div>

      <Map coordinates={coordinates} />
      <GlobalStyles />
    </div>
  );
}

export default App;
