import React from 'react'

const MapSection = () => {
  return (
  <iframe
  src="https://www.google.com/maps/embed?...youraddress..."
  width="100%"
  height="350"
  style={{ border: 0 }}
  allowFullScreen={true}
  loading="lazy"
></iframe>

  )
}

export default MapSection