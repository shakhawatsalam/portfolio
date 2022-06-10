import styled from 'styled-components';

export const LeftSection = styled.div`
  min-height: 70vh;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    min-height: 40vh;
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
