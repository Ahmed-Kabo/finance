import { Timer } from "@mui/icons-material";
import {
  Button,
  Chip,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect } from "react";
import { toast } from "react-toastify";

import styled from "styled-components";
import IMAGE_PDF from "../../Assets/pdf.svg";
import {
  ButtonPrimary,
  TableCellStyle,
  TableHeadStyled,
  TableRowStyle,
} from "../../Helper/Helper";
import { useAppDispatch, useAppSelector } from "../../Hooks/hooks";
import {
  getSiteSurvay,
  sendSiteSurvayToPm,
} from "../../Redux/Slice/siteSurvay/SiteSurvaySlice";

const SiteSurveyTable = () => {
  const dispatch = useAppDispatch();
  const { siteSurvay, isLodaingSend, isSuccessSend } = useAppSelector(
    (state) => state.siteSUrvay
  );
  const siteSurvayData = siteSurvay?.data?.data;
  console.log(siteSurvayData);

  useEffect(() => {
    dispatch(getSiteSurvay("1"));
  }, []);

  const SendToPm = async (id: any) => {
    await dispatch(sendSiteSurvayToPm(id));
    await dispatch(getSiteSurvay("1"));
  };

  useEffect(() => {
    if (isSuccessSend) toast.success("File Sent successfully ");
  }, [isSuccessSend]);

  return (
    <TableContainer component={Paper} sx={{ width: 1200, margin: "auto" }}>
      <Table sx={{ minWidth: 700 }}>
        <TableHeadStyled sx={{ background: "#191919", color: "#fff" }}>
          <TableRowStyle>
            <TableCell
              sx={{ color: "#fff", fontWeight: "bold", letterSpacing: "2px" }}
              align="center"
            >
              Adress
            </TableCell>
            <TableCell
              sx={{ color: "#fff", fontWeight: "bold", letterSpacing: "2px" }}
            >
              Cost
            </TableCell>
            <TableCell
              sx={{ color: "#fff", fontWeight: "bold", letterSpacing: "2px" }}
              align="center"
            >
              Status
            </TableCell>
            <TableCell
              sx={{ color: "#fff", fontWeight: "bold", letterSpacing: "2px" }}
              align="center"
            >
              Create at
            </TableCell>
            <TableCell
              sx={{ color: "#fff", fontWeight: "bold", letterSpacing: "2px" }}
              align="center"
            >
              Files
            </TableCell>
            <TableCell
              sx={{ color: "#fff", fontWeight: "bold", letterSpacing: "2px" }}
              align="center"
            >
              Action
            </TableCell>
          </TableRowStyle>
        </TableHeadStyled>
        <TableBody sx={{ boxShadow: "none" }}>
          {siteSurvayData?.map((item: any) => (
            <TableRowStyle key={item.id}>
              <TableCellStyle>{item?.address}</TableCellStyle>
              <TableCellStyle sx={{ fontWeight: 900 }}>
                ${item?.cost}
              </TableCellStyle>
              <TableCellStyle align="center">
                <Chip
                  variant="outlined"
                  color={item.status === "pending" ? "warning" : "success"}
                  icon={<Timer />}
                  label={item.status}
                />
              </TableCellStyle>
              <TableCellStyle align="center">
                {new Date(`${item.created_at}`).toDateString()}
              </TableCellStyle>
              <TableCellStyle align="center">
                <a href={item.file} target="_blank">
                  <img src={IMAGE_PDF} alt="pdf" width={80} />
                </a>
              </TableCellStyle>
              <TableCellStyle align="center">
                <Button
                  disabled={item.status === "send" ? true : false}
                  sx={{
                    background: "#000000",
                    color: "#fff",
                    padding: ".4rem 1rem",
                    borderRadius: "1rem",
                    "&:hover": { background: "#43a1d4" },
                    "&.Mui-disabled": {
                      background: "#b5b5b5",
                    },
                  }}
                  onClick={() => SendToPm(item.id)}
                >
                  {isLodaingSend ? (
                    <CircularProgress />
                  ) : item.status === "send" ? (
                    "File Sent "
                  ) : (
                    "Send to Pm"
                  )}
                </Button>
              </TableCellStyle>
            </TableRowStyle>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SiteSurveyTable;
