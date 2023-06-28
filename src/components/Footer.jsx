import React from 'react'
import CurrentTrack from './CurrentTrack'
import PlayerControls from './PlayerControls'
import Volume from './Volume'

const Footer = () => {
  return (
    <div style={{
      backgroundColor: '#181818',
      height: '100%',
      width: '100%',
      borderTop: '1px solid #282828',
      display: 'grid',
      gridTemplateColumns: '1fr 2fr 1fr',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 1rem',
    }}>
      <CurrentTrack></CurrentTrack>
      <PlayerControls></PlayerControls>
      <Volume></Volume>
    </div>
  )
}

export default Footer