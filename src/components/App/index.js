import React from 'react'
import { Header, ImgHome } from '..'
import styled from 'styled-components'

const styledApp = styled.div`
.body {
  background-color: #CCC;
}

`

styledApp.displayName = 'styledApp'

export default function App () {
  return (
    <div>
      <styledApp>
        <Header />
        <ImgHome />
      </styledApp>
    </div>
  )
}
