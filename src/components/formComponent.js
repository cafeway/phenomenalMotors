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
    bottom,
    top,
  }) => {
    return (
      <TextField
        marginBottom={bottom}
        marginTop={top}
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