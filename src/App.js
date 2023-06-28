import React, { useEffect } from "react";
import Login from "./components/Login";
import { useStateProvider } from "./utils/StateProvider";
import { reducerCases } from "./utils/Constants";
import Music from "./components/Music";

const App = () => {
  const [{ token }, dispatch] = useStateProvider();

  useEffect(() => {
    const url = window.location.hash;
    const token = url.substring(1).split("&")[0].split("=")[1];
    dispatch({type: reducerCases.SET_TOKEN,token});
  }, [token,dispatch]);

  return (
    <div>
      {token? <Music></Music> : <Login></Login>}
    </div>
  );
};

export default App;
