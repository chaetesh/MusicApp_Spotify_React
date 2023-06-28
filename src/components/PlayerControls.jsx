import React from "react";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsShuffle,
} from "react-icons/bs";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import { FiRepeat } from "react-icons/fi";
import { useStateProvider } from "../utils/StateProvider";
import { styled } from "styled-components";
import axios from "axios";
import { reducerCases } from "../utils/Constants";

const PlayerControls = () => {
  const [{ token, playerState }, dispatch] = useStateProvider();

  const changeState = async () => {
    const state = playerState ? "pause" : "play";
    await axios.put(
      `https://api.spotify.com/v1/me/player/${state}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    dispatch({
      type: reducerCases.SET_PLAYER_STATE,
      playerState: !playerState,
    });
  };

  const changeTrack = async (type) => {
    await axios.post(
      `https://api.spotify.com/v1/me/player/${type}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );

    const newResponse = await axios.get(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log(newResponse);
    if (newResponse) {
      const currentlyPlaying = {
        id: newResponse.data.item.id,
        name: newResponse.data.item.name,
        artists: newResponse.data.item.artists.map((artist) => artist.name),
        image: newResponse.data.item.album.images[2].url,
      };
      dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying });
      dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: true });
    } else {
      dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying: null });
    }
  };

  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
      }}
    >
      <div className="shuffle">
        <BsShuffle></BsShuffle>
      </div>
      <div className="previous">
        <CgPlayTrackPrev
          onClick={() => changeTrack("previous")}
        ></CgPlayTrackPrev>
      </div>
      <div className="state">
        {playerState ? (
          <BsFillPauseCircleFill onClick={changeState} />
        ) : (
          <BsFillPlayCircleFill onClick={changeState} />
        )}
      </div>
      <div className="next">
        <CgPlayTrackNext onClick={() => changeTrack("next")}></CgPlayTrackNext>
      </div>
    </Container>
  );
};

export default PlayerControls;

const Container = styled.div`
  svg {
    color: #b3b3b3;
    transition: 0.2s ease-in-out;
    &:hover {
      color: white;
    }
  }
  .state {
    svg {
      color: white;
    }
  }
  .previous,
  .next,
  .state {
    font-size: 2rem;
  }
`;
