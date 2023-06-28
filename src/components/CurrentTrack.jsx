import React, { useEffect } from "react";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constants";
import axios from "axios";

const CurrentTrack = () => {
  const [{ token, currentlyPlaying }, dispatch] = useStateProvider();

  useEffect(() => {
    const getCurrentTrack = async () => {
        console.log("here");
      const response = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      if (response.data) {
        const currentlyPlaying = {
          id: response.data.item.id,
          name: response.data.item.name,
          artists: response.data.item.artists.map((artist) => artist.name),
          image: response.data.item.album.images[2].url,
        };
        dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying });
      } else {
        dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying: null });
      }
      //   getCurrentTrack();
    };
    getCurrentTrack();
  }, [token, dispatch]);

  return (
    <div>
      {currentlyPlaying && (
        <div
          className="track"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div className="track_image">
            <img src={currentlyPlaying.image} alt="" />
          </div>
          <div
            className="track_info"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.3rem",
            }}
          >
            <h4 style={{ color: "white", margin: "0px 0px" }}>
              {currentlyPlaying.name}
            </h4>
            <h6 style={{ color: "#b3b3b3", margin: "0px 0px" }}>
              {currentlyPlaying.artists.join(", ")}
            </h6>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentTrack;
