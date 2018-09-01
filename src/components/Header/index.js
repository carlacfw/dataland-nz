import React from 'react'
import {
  StyledDesktopHeader,
  StyledDesktopHeaderLegal,
  StyledDesktopHeaderLink
} from './Style'

export default function DesktopHeader () {
  return (
    <StyledDesktopHeader>
      <StyledDesktopHeaderLegal>Lifechangers</StyledDesktopHeaderLegal>
      <StyledDesktopHeaderLink href='/'>Home</StyledDesktopHeaderLink>
      <StyledDesktopHeaderLink>About</StyledDesktopHeaderLink>
      <StyledDesktopHeaderLink>Help</StyledDesktopHeaderLink>
    </StyledDesktopHeader>
  )
}
