import styled from 'styled-components'

export const Wrapper = styled.div`
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    border: 8px solid #fff;
    border-radius: 50%;
    border-top: 8px solid var(--color-purple);
    width: 80px;
    height: 80px;
    -webkit-animation: spin 0.6s linear infinite; /* Safari */
    animation: spin 0.6s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
