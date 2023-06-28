import React from "react";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";

const Volume = () => {

  const [{ token }] = useStateProvider();
  const setVolume = async (e) => {
    await axios.put(
      "https://api.spotify.com/v1/me/player/volume",
      {},
      {
        params: {
          volume_percent: parseInt(e.target.value),
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
  };

  return <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  }}>
    <input type="range" min={0} max={100} onMouseUp={e=>setVolume(e)} style={{
        width: '15rem',
        borderRadius: '2rem',
        height: '0.5rem',
    }} />
  </div>;
};

export default Volume;
