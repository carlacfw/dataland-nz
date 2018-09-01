import styled from 'styled-components'

const StyledDesktopHeader = styled.div`
  width: 1300px;
  height: 100px;
  background-color: #CCC;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: -8px;
  border-bottom: 2px solid black;
`
StyledDesktopHeader.displayName = 'StyledDesktopHeader'

const StyledDesktopHeaderLegal = styled.div`
  width: 300px;
  font-family: 'Lobster', cursive;
  font-size: 50px;
  font-weight: 400;
  line-height: 0.84;
  color: #000000;
  margin-right: 250px;
`
StyledDesktopHeaderLegal.displayName = 'StyledDesktopHeaderLegal'

const StyledDesktopHeaderLink = styled.div`
  opacity: 0.53;
  font-family: Avenir, sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #000000;
  margin-right: 220px;
`
StyledDesktopHeaderLink.displayName = 'StyledDesktopHeaderLink'

export {
  StyledDesktopHeader,
  StyledDesktopHeaderLegal,
  StyledDesktopHeaderLink
}
