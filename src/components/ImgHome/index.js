import styled from 'styled-components'
import React from 'react'
import Results from './Results.JPG'

const ImgResult = styled.div`
margin-top: 60px;
`

ImgResult.displayName = 'ImgResult'

export default function ImgHome () {
  return (
    <ImgResult>
      <div className='logo'>
        <img src={Results} width='100%' height='400' />
      </div>
    </ImgResult>
  )
}
