import React from 'react';
import styled from 'styled-components/macro';

export let Panes = styled.main({
  display: 'flex',
  width: '100vw',
  height: '100vh'
});

let Header = styled.header({
  backgroundColor: 'lightgray',
  padding: '0.5em'
});

let Body = styled.div({
  overflow: 'auto'
});

let Container = styled.div(props => ({
  display: 'flex',
  flexDirection: 'column',
  ...props
}));

export function Pane({width, minWidth, header, body}) {
  return <Container {...{width, minWidth}}>
    <Header>{header}</Header>
    <Body>{body}</Body>
  </Container>
}