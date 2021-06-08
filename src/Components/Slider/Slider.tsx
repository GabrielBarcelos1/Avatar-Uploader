import React from 'react'
import { SliderStyled } from './SliderStyle'

type TProps = {
  zoom: number
  setZoom: React.Dispatch<React.SetStateAction<number>>
}

export default function Slider({ zoom, setZoom, ...rest }: TProps) {
  return (
    <SliderStyled
      value={zoom}
      min={1}
      max={3}
      step={0.1}
      onChange={(_e, ValueSlidier:number | number[]) => setZoom(Number(ValueSlidier))}
      style={{ color: '#3F80FF' }}
      {...rest}
    />
  )
}
