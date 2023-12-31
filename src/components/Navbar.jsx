import React from "react";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useStateProvider } from "../utils/StateProvider";
import { styled } from "styled-components";

const Navbar = ({ navBackground }) => {
  const [{ userInfo }] = useStateProvider();

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2rem",
        height: "15vh",
        position: "sticky",
        top: "0",
        transition: "0.3s ease-in-out",
      }}
      navBackground={navBackground}
    >
      <div className="search_bar">
        <FaSearch></FaSearch>
        <input type="text" placeholder="Artists, Songs or Podcasts"></input>
      </div>
      <div className="avatar">
        <a href="#">
          <CgProfile></CgProfile>
          <span>{userInfo ? userInfo.username : ""}</span>
        </a>
      </div>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  background-color: ${({ navBackground }) =>
    navBackground ? "rgba(0,0,0,0.7)" : "none"};
  .search_bar {
    background-color: white;
    width: 30%;
    padding: 0.4rem 1rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    input {
      border: none;
      height: 2rem;
      width: 100%;
      &:focus {
        outline: none;
      }
    }
  }
  .avatar {
    background-color: black;
    padding: 0.3rem 0.4rem;
    padding-right: 1rem;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      color: white;
      font-weight: bold;
      svg {
        font-size: 1.3rem;
        background-color: #282828;
        padding: 0.2rem;
        border-radius: 1rem;
        color: #c7c5c5;
      }
    }
  }
`;
