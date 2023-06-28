import React from "react";

const Login = () => {
  const handleClick = () => {
    const clientId = "40e8eb81a80f4fb3a8b75b03a96e95e8";
    const redirectUrl = "http://localhost:3000/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-email",
      "user-read-private",
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "user-read-playback-position",
      "user-top-read",
      "user-read-recently-played",
    ];
    // When clicking connect Spotify, url will be the following
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(" ")}&response_type=token&show_dialog=true`;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#1db954",
        gap: "5rem",
      }}
    >
      <img
        style={{
          height: "20vh",
        }}
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
        alt=""
      />
      <button
        style={{
          padding: "1rem 5rem",
          borderRadius: "5rem",
          border: "none",
          fontSize: "1.5rem",
          cursor: "pointer",
          backgroundColor: "black",
          color: "white",
        }}
        onClick={handleClick}
      >
        Connect Spotify
      </button>
    </div>
  );
};

export default Login;
