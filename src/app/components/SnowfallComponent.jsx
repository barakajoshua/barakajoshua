"use client"

import Snowfall from 'react-snowfall'

export default function SnowfallComponent() {
  return (
    <Snowfall 
      color="#64FFDA" 
      speed={[0.5, 2]} 
      wind={[-0.5, 1]} 
      radius={[0.5, 3]}
      snowflakeCount={50}
    />
  )
}
