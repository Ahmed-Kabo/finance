import {
  Button,
  CircularProgress,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import UtilityBillTable from "./utilityBillTable";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../Hooks/hooks";
import { toast } from "react-toastify";
import {
  reset,
  uploadUtilityBill,
} from "../../Redux/Slice/UtitityBill/UtilityBillSlice";
import { useEffect, useState } from "react";
import { getTickets } from "../../Redux/Slice/Tickets/TicketsSlics";
import ModalConatiner from "../../Components/Modal/Modal";

function UtilityBill() {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const dispatch = useAppDispatch();
  const { isLodaing, message, isError, isSuccessUplode } = useAppSelector(
    (status) => status.utilityBill
  );

  const { tickets } = useAppSelector((status) => status.tickets);
  const ListOfTickets = tickets?.data;

  const {
    control,
    getValues,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = useForm();

  const TicktId = getValues("data");
  const hadleTickt = ListOfTickets?.find(
    (item: any) => item.ticket_id === TicktId
  );

  const HandelSumbit = async (data: any) => {
    const formData = new FormData();
    formData.append("file_path", data.file_path[0]);
    formData.append("ticket_id", hadleTickt?.ticket_id);
    formData.append("address", hadleTickt?.address);
    formData.append("service", hadleTickt?.address);
    formData.append("cost", hadleTickt?.cost);
    await dispatch(uploadUtilityBill(formData));
    await dispatch(reset());
  };

  useEffect(() => {
    dispatch(getTickets());

    if (isSuccessUplode) {
      toast.success("The File Upload Successfully");
    }
    if (isError) {
      toast.error(message);
    }
    dispatch(reset());
  }, [isSuccessUplode, isError, message, dispatch]);

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{
          background: "#121212",
          px: 3,
          borderRadius: 3,
          margin: "2rem auto",
          width: "260px",
          display: "flex",
        }}
        component="label"
      >
        Upload file
      </Button>
      {open && (
        <ModalConatiner open={open} onClose={onClose}>
          <Typography variant="h4" mb={3}>
            Uplode File
          </Typography>
          <form onSubmit={handleSubmit(HandelSumbit)}>
            <Controller
              control={control}
              name="data"
              defaultValue=""
              render={({ field }) => (
                <TextField
                  select
                  fullWidth
                  value={field.value}
                  onChange={field.onChange}
                  label="Choose Ticket"
                >
                  {ListOfTickets?.map((item: any) => (
                    <MenuItem key={item.ticket_id} value={item.ticket_id}>
                      {item.address}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />

            <Controller
              control={control}
              name="file_path"
              defaultValue=""
              render={({ field }) => (
                <input
                  onChange={(e) => {
                    field.onChange(e.target.files);
                  }}
                  multiple
                  type="file"
                  style={{ display: "block", margin: "1rem 0" }}
                />
              )}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ background: "#000", my: 2 }}
            >
              {isLodaing ? <CircularProgress /> : "Submit"}
            </Button>
          </form>
        </ModalConatiner>
      )}

      <UtilityBillTable />
    </>
  );
}

export default UtilityBill;
