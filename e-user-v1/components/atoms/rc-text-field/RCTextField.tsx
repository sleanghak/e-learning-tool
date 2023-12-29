import React from 'react';
import { IconButton } from '@mui/material';
import { Input, FormControl } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';


interface Props {
    startIcon?: string | ReactNode;
    placeholder: string;
    name: string;
    type: string;
    editIcon?: string | ReactNode;
}

export default function RCTextField({ startIcon, placeholder, name, type, editIcon }: Props) {
    return (
        <>
            <FormControl sx={{ '& > :not(style)': { m: 1 } }} fullWidth variant="standard">
                <Input
                    size="small"
                    fullWidth
                    required
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    startAdornment={
                        <InputAdornment position="start">
                            {startIcon}
                        </InputAdornment>
                    }
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton>
                                {editIcon}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl><br /><br />
        </>
    );
}
