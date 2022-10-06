import React,{useState} from 'react'
import NavBar from '../../Components/NavBar'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import styles from './Thank.module.css'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import SendIcon  from '@mui/icons-material/SendAndArchiveOutlined';
import Button from '@mui/material/Button'
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const Thank = () => {
  return (
    <div>
        <NavBar/>
        <div className={styles.middle}>
            <Typography variant='h4'>
                THANK YOU
            </Typography>
            <Typography variant='h5'>
                FOR FILLING UP FEEDBACK FORM!
            </Typography>
            <Typography variant='h6'>
                You can contact your nearby police station incase of any emergency.
            </Typography>
        </div>
        <Box className={styles.middle2}>
        <Typography variant='h6'>
            :Name:
        </Typography>
        <Typography variant='h6'>
            Katargam police station
        </Typography>
        <Typography variant='h6'>
            :Address:
        </Typography>
        </Box>
    </div>
  )
}

export default Thank