
# Music App using Spotify API with React
This project is a music player that uses the Spotify API. It allows users to search for songs, albums, and artists, and then play them back.
The purpose of this project is to learn how to use the Spotify API with React. It is also a way to create a useful and interactive music player for users.

## Screenshots

![App Screenshot](https://i.ibb.co/4JPzPPD/Screenshot-2023-06-28-183921.png)


## Features

- Search for songs, albums, and artists
- Play songs
- Control playback (play/pause, next/previous, volume)
- Add songs to a queue
- Get Songs from your Playlist
## Tech Stack

**Client:** React, Redux

**Server:** Spotify API


## API Reference

#### Get all items

```http
  GET https://api.spotify.com/v1/me/playlists
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Pause Song

```http
  GET https://api.spotify.com/v1/me/player/pause
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |



## Deployment

To deploy this project run

```bash
  npm run deploy
```

