import styled from "styled-components";

export const LoginContainer = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
  display: grid;
  place-items: center;
  padding: 0 2rem;
  text-align: center;
`;
export const LoginStyled = styled.section`
  position: relative;
  background: var(--mainColor);
  min-height: 100vh;
  overflow: hidden;
  @media screen and (max-width: 1200px) {
    overflow: scroll;
  }
  .logo {
    position: absolute;
    top: 5%;
    left: 4%;
    transform: translate(-2%, -4%);
  }
  .circle {
    position: absolute;
    top: 0;
    left: 0;
  }
  .fullCircle {
    width: 125px;
    height: 125px;
    border-radius: 50%;
    background: rgb(255 255 255 / 18%);
    position: absolute;
    top: -10%;
    left: 40%;
    transform: translate(-40%, 10%);
  }
`;

/* ---- start login form ---- */

export const FormStyled = styled.div`
  width: 70%;

  /* background: var(--lightColor); */
  border-radius: 1rem;
  padding: 2rem 0;
  text-align: left;
  @media screen and (max-width: 768px) {
    width: 90%;
    margin-top: 20%;
  }
  .inputConatiner {
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
    border-radius: 1rem;
    border: 1px solid var(--lightGray);

    svg {
      color: var(--lightGray);
    }
  }
`;
