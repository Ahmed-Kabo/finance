import { TextField } from "@mui/material";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

type InputTyps = {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  control: any;
};

const OriginalInput: FC<InputTyps> = ({
  name,
  label,
  type,
  placeholder,
  defaultValue,
  control,
}: InputTyps) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue ? defaultValue : ""}
      render={({ field }) => (
        <TextField
          fullWidth
          {...field}
          type={type ? type : "text"}
          placeholder={placeholder ? placeholder : ""}
          label={label}
          sx={{
            ".MuiOutlinedInput-notchedOutline": {
              borderRadius: "1rem",
            },
            label: {
              color: "var(--lightGray)",
              "&:focus": {
                background: "#000",
              },
            },
            ".MuiInputLabel-shrink": {
              color: "var(--mainColor)",
              background: "var(--lightColor)",
            },
          }}
        />
      )}
    />
  );
};

export default OriginalInput;
