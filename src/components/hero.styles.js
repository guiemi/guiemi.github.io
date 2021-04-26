import styled from "@emotion/styled"

export const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`


export const Container = styled.div`
  text-align: center;
  padding: 1rem 0;
  display: flex;
  flex-wrap: wrap;

  svg {
    margin: 0 1.5rem;
    padding: 0;
    font-size: 1.5rem;

    :hover {
      color: #6c757d;
      transition-duration: 0.2s;
    }
  }
`

