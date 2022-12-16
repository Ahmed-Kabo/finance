import {
  Button,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import styled from "styled-components";

interface image {
  w: any;
  h: any;
  of: any;
  op: any;
  ds: any;
  br: any;
  m: any;
}

export const Heading = styled.h1`
  font-size: ${(props: any) => props.fz};
  line-height: ${(props: any) => props.lh};
  font-weight: ${(props: any) => props.fw};
  color: ${(props: any) => props.color};
  margin: ${(props: any) => props.m};
  padding: ${(props: any) => props.p};
  text-transform: ${(props: any) => props.tt};
  text-align: ${(props: any) => props.ta};
  display: ${(props: any) => props.d};
  border-bottom: ${(props: any) => props.bb};
`;

export const Paragraph = styled.p`
  font-size: ${(props: any) => props.fz};
  line-height: ${(props: any) => props.lh};
  font-weight: ${(props: any) => props.fw};
  color: ${(props: any) => props.color};
  margin: ${(props: any) => props.m};
  padding: ${(props: any) => props.p};
  text-transform: ${(props: any) => props.tt};
  text-align: ${(props: any) => props.ta};
  letter-spacing: ${(props: any) => props.ls};
`;

export const ImageController = styled.img`
  width: ${(props: image) => props.w};
  height: ${(props: image) => props.h};
  object-fit: ${(props: image) => props.of};
  object-position: ${(props: image) => props.op};
  filter: drop-shadow(${(props: image) => props.ds});
  margin: ${(props: image) => props.m};
  border-radius: ${(props: image) => props.br};
`;

export const ButtonPrimary = styled(Button)`
  && {
    background: ${(props: any) => (props.bg ? props.bg : "var(--mainColor)")};
    color: ${(props: any) => (props.c ? props.c : "var(--lightColor)")};
    border-radius: ${(props: any) => (props.br ? props.br : "1rem")};
    /* display: block; */
    padding: 0.6rem 1rem;
    /* min-width: 200px; */
    /* background: ; */
    width: ${(props: any) => props.w};
    text-transform: capitalize;
    letter-spacing: 2px;
    margin: ${(props: any) => (props.m ? props.m : "1rem 0")};
    transition: all 0.3s;
    box-shadow: ${(props: any) => props.bs};
    font-size: 0.9rem;
    font-weight: ${(props: any) => props.fw};
    &:hover {
      background: var(--lightColor);
      color: var(--mainColor);
      box-shadow: 0px 0px 0px 2px var(--mainColor);
    }
    &.taskBtn {
      width: 265px;
      display: block;
      margin: 1rem auto;
    }
  }
`;

export const InputStyled = styled(TextField)`
  && {
    .MuiOutlinedInput-notchedOutline {
      border: none;
    }
    label {
      color: var(--lightGray);
      &:focus {
        background: #000;
      }
    }
    .MuiInputLabel-shrink {
      color: var(--mainColor);
      background: var(--lightColor);
    }
  }
`;

export const TableRowStyle = styled(TableRow)`
  && {
    border: none;
  }
`;
export const TableCellStyle = styled(TableCell)`
  && {
    /* background: #000; */
    border: none;
    font-size: 0.9rem;
    color: var(--gray);
    .image {
      display: flex;
      align-items: center;
    }
  }
`;
export const TableHeadStyled = styled(TableHead)`
  box-shadow: none;
  border-radius: 0;
`;
