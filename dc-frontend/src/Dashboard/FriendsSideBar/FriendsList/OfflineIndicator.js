import React from 'react';
import { Box } from '@mui/system';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'


const OfflineIndicator = ({ isOnline }) => {
    return (
        <Box sx={{
            color: 'red',
            display: 'flex',
            alignItems: 'center',
            position: 'absolute',
            right: '5px',
        }}>
            <FiberManualRecordIcon />
        </Box>
    );
};

export default OfflineIndicator;