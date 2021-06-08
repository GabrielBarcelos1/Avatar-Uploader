import React from 'react'
import { ImImage } from 'react-icons/im'
import {
  BoxlabelInfos, BoxTitle, LabelDescription, InputFile,
} from './LogoEmptyStyle'

type TProps = {
  handleAddFile: (e: React.ChangeEvent<HTMLInputElement>) => void
  responsiveBox?: number
}

export default function LogoEmpty({ handleAddFile, responsiveBox }: TProps) {
  return (
    <>
      <InputFile
        onChange={handleAddFile}
        accept="image/*"
        type="file"
        results={responsiveBox}
        data-testid="InputFile"
      />
      <BoxlabelInfos>
        <BoxTitle>
          <ImImage size={15} />
          <p>Organization Logo</p>
        </BoxTitle>
        <LabelDescription>Drop the image here or click to browse.</LabelDescription>
      </BoxlabelInfos>
    </>
  )
}
