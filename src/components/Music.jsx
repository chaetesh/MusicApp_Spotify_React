import React, { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constants";
import { styled } from "styled-components";

const Music = () => {
  const [{ token }, dispatch] = useStateProvider();
  const bodyRef = useRef();
  const [navBackground, setNavBackground] = useState(false);
  const [headerBackground, setHeaderBackground] = useState(false);

  const bodyScrolled = () => {
    bodyRef.current.scrollTop >= 30
      ? setNavBackground(true)
      : setNavBackground(false);
    bodyRef.current.scrollTop >= 268
      ? setHeaderBackground(true)
      : setHeaderBackground(false);
  };

  useEffect(() => {
    return () => {
      const getUserInfo = async () => {
        const { data } = await axios.get("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        const userInfo = {
          userId: data.id,
          username: data.display_name,
        };
        dispatch({ type: reducerCases.SET_USER, userInfo });
      };

      getUserInfo();
    };
  }, [dispatch, token]);

  return (
    <Container
      style={{
        maxWidth: "100vh",
        maxWidth: "100vw",
        overflow: "hidden",
        display: "grid",
        gridTemplateRows: "85vh 15vh",
      }}
    >
      <div
        className="music_body"
        style={{
          display: "grid",
          gridTemplateColumns: "15vw 85vw",
          height: "100%",
          width: "100%",
          background: "linear-gradient(0deg, rgba(0,0,0,1), transparent)",
          backgroundColor: "rgb(32,87,100)",
        }}
      >
        <Sidebar></Sidebar>

        <div
          className="body"
          style={{
            height: "100%",
            width: "100%",
            overflow: "auto",
          }}
          ref={bodyRef}
          onScroll={bodyScrolled}
        >
          <Navbar navBackground={navBackground}></Navbar>

          <div className="body_contents">
            <Body headerBackground={headerBackground}></Body>
          </div>
        </div>
      </div>

      <div className="music_footer">
        <Footer></Footer>
      </div>
    </Container>
  );
};

export default Music;

const Container = styled.div`
  &::-webkit-scrollbar {
    width: 1.7rem;
    &-thumb {
      background-color: rgba(255, 255, 255, 0.6);
    }
  }
`;
