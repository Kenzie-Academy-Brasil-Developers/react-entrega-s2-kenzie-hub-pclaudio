import { Controller } from "react-hook-form";
import { FormHelperText, InputLabel, Select } from "@material-ui/core";
import { CustomFormControl, CustomMenuItem } from "./styles";

const SelectCourseModule = ({ control, errors }) => {
  const modules = [
    "Primeiro módulo (Introdução ao Frontend)",
    "Segundo módulo (Frontend Avançado)",
    "Terceiro módulo (Introdução ao Backend)",
    "Quarto módulo (Backend Avançado)",
  ];

  return (
    <CustomFormControl fullWidth error={!!errors.courseModule}>
      <InputLabel id="courseModuleLabel">Módulo</InputLabel>
      <Controller
        render={({ field }) => (
          <Select
            {...field}
            variant="filled"
            labelId="courseModuleLabel"
            id="courseModuleHelper"
          >
            {modules.map((module, index) => (
              <CustomMenuItem key={index} value={module}>
                {module}
              </CustomMenuItem>
            ))}
          </Select>
        )}
        name="course_module"
        control={control}
        defaultValue=""
      />

      <FormHelperText>
        {!!errors.course_module ? errors.course_module.message : " "}
      </FormHelperText>
    </CustomFormControl>
  );
};

export default SelectCourseModule;
