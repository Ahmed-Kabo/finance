import { TextField } from "@mui/material";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

type InputTyps = {
  label: string;
  name: string;

  type?: string;
  placeholder?: string;
  defaultValue?: string;
};

const InputControllar: FC<InputTyps> = ({
  name,
  label,
  type,
  placeholder,
  defaultValue,
}: InputTyps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

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
          error={!!errors[name]}
          // helperText={errors[name].message ?? ""}
          sx={{
            ".MuiOutlinedInput-notchedOutline": {
              border: "none",
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

export default InputControllar;
