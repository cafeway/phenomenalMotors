import { Directions, DirectionsCarFilled } from "@mui/icons-material";
import { InputAdornment, MenuItem, Stack, TextField, Typography } from "@mui/material";

const selectComponent = ({
    select,
    size,
    helperText,
    label,
    fullWidth,
    data,
    options,
    icon,
}) => {
    return (
        <TextField
            select ={select}
            size={size}
            helperText = {helperText}
            label = {    
            <Stack direction="row">
                {icon}
                <Typography sx={{fontSize:'14px'}}>{label}</Typography>
                
            </Stack>
            }
            
            fullWidth = {fullWidth}
        >
            {data.map((item)=>(
                <MenuItem key={item.name} value={item.name}>
                    {item.name}
                </MenuItem>
            ))}
        </TextField>
    );
}

export default selectComponent;