import { yupResolver } from "@hookform/resolvers/yup";
import { MenuItem, TextField } from "@mui/material";
import { useEffect } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";

const data = [
  { id: 1, name: "a" },
  { id: 2, name: "2" },
  { id: 3, name: "3" },
  { id: 4, name: "4" },
  { id: 5, name: "5" },
  { id: 6, name: "6" },
];

const data2 = [
  { id: 1, name: "a" },
  { id: 2, name: "2" },
  { id: 3, name: "3" },
  { id: 4, name: "4" },
  { id: 5, name: "5" },
  { id: 6, name: "6" },
];

const FormHook = ({ newData }: any) => {
  const schema = yup.object({
    salary: yup.number().required("The fied  is Required"),
    tax: yup.number().required("The field is Required"),
  });

  const methods = useForm({
    resolver: yupResolver(schema),
    // defaultValues: newData,
  });

  useEffect(() => {
    // methods.setValue("salary", "2");
    console.log(methods.getValues());
    methods.reset({
      salary: 2,
      tax: 3,
    });
  }, []);

  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <Controller
          name="salary"
          control={methods.control}
          defaultValue={newData.salary}
          render={({ field }) => (
            <TextField
              {...field}
              select
              fullWidth
              //   value={methods.getValues("salary")}
            >
              {data.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </TextField>
          )}
        />

        <Controller
          name="tax"
          control={methods.control}
          defaultValue={newData.tax}
          render={({ field }) => (
            <TextField {...field} select fullWidth>
              {data2.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
      </form>
    </FormProvider>
  );
};

export default FormHook;
