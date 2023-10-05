import * as React from 'react';
import Button from '@mui/material/Button';

export default function CustomButton({label, onClick}) {
  return (
     <Button variant="outlined" onClick={onClick}>
        {label}
      </Button>
  );
}
