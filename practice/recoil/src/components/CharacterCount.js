import React from 'react'
import { useRecoilValue } from 'recoil'
import { charCountState } from '../App'

export default function CharacterCount() {

    const count = useRecoilValue(charCountState)
    
  return (
    <div>
      chararterCount : {count}
    </div>
  )
}
