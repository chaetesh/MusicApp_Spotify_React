import React from "react";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import styled from "styled-components";
import Playlists from "./Playlists";

const Sidebar = () => {
  return (
    <Container
      className="container"
      style={{
        backgroundColor: "black",
        color: "#b3b3b3",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
    >
      <div
        className="top_links"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="logo"
          style={{
            textAlign: "center",
            margin: "1rem 0",
            blockSize: "auto",
          }}
        >
          <img
            style={{
              maxInlineSize: "80%",
            }}
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
            alt=""
          />
        </div>

        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "1rem",
          }}
        >
          <li>
            <MdHomeFilled />
            <span>Home</span>
          </li>
          <li>
            <MdSearch />
            <span>Search</span>
          </li>
          <li>
            <IoLibrary />
            <span>Your Library</span>
          </li>
        </ul>
      </div>
      <Playlists></Playlists>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  .top_links{
    ul {
      li {
        display: flex;
        gap: 1rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: white;
        }
      }
    }
  }
  }
`;
