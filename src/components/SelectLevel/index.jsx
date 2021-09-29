import { Controller } from "react-hook-form";
import { FormHelperText, InputLabel, Select } from "@material-ui/core";
import { CustomFormControl, CustomMenuItem } from "./styles";

const SelectLevel = ({ control, errors }) => {
  const levels = ["Iniciante", "Intermediário", "Avançado"];

  return (
    <CustomFormControl fullWidth error={!!errors.courseModule}>
      <InputLabel id="courseLevelLabel">Nível</InputLabel>
      <Controller
        render={({ field }) => (
          <Select
            {...field}
            variant="filled"
            labelId="courseLevelLabel"
            id="courseLevelHelper"
          >
            {levels.map((level, index) => (
              <CustomMenuItem key={index} value={level}>
                {level}
              </CustomMenuItem>
            ))}
          </Select>
        )}
        name="status"
        control={control}
        defaultValue=""
      />

      <FormHelperText>
        {!!errors.status ? errors.status.message : " "}
      </FormHelperText>
    </CustomFormControl>
  );
};

export default SelectLevel;
