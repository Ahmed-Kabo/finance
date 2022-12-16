import { memo } from "react";
import styled from "styled-components";
import Image from "../../Assets/message.svg";

const NotFound = () => {
  return (
    <ImageStyled>
      <img src={Image} alt="messages" />
    </ImageStyled>
  );
};

const ImageStyled = styled.div`
  width: 100%;
  height: 94vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
  img {
    width: 400px;
    object-fit: contain;
  }
`;

export default memo(NotFound);
