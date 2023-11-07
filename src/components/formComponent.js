import {
    TextField,
    InputAdornment,
  } from "@mui/material";
  
  const formComponent = ({
    helperText,
    size,
    label,
    fullWidth,
    customIcon,
  }) => {
    return (
      <TextField
        helperText={helperText}
        size={size}
        label={label}
        fullWidth={fullWidth}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {customIcon}
            </InputAdornment>
          ),
        }}
      />
    );
  };
export default formComponent;