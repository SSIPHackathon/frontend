/* eslint-disable */
import { Box, TextareaAutosize, Typography } from '@mui/material'
import React,{useEffect, useState} from 'react'
import NavBar from '../../Components/NavBar/index'
import OtpInput from 'react-otp-input'
import styles from './Citizen.module.css'
import InputLabel from '@mui/material/InputLabel'
import CallIcon from '@mui/icons-material/Call';
import Input from '@mui/material/Input';
import SendIcon  from '@mui/icons-material/SendAndArchiveOutlined';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Footer from '../../Components/Footer'


const Citizen = () => {
const [otp, setotp] = useState('');
const [number, setnumber] = useState('')
const [eror, seteror] = useState('')
if(otp.length==6){
    seteror('otp success')
}
const verify = () => {

}
const subb = () =>{

}
  return (
    <div>
    <NavBar/>
    <Box className={styles.otpbox}>
        <Typography>
        Please verify your mobile number to fill up
Feedback Form
        </Typography>
        <br />
        <FormControl>
        <InputLabel htmlFor="input-with-icon-adornment">
         Enter mobile number:
        </InputLabel>
        <Input
        required
        maxlength="10" 
        placeholder='+91'
        type='tel'
        onChange={(e)=>setnumber(e.target.value)}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <CallIcon />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position='end'>
                {
                    number.length!=10?(<><Button disabled={true} onClick={verify}>Verify</Button></>):(
                    <Button onClick={verify}>Verify</Button>
                    )
                }
            </InputAdornment>
          }
        />
        <br />
        <Typography>
            Enter the otp:
        </Typography>
        <div className={styles.center}>
    <OtpInput
        value={otp}
        onChange={setotp}
        numInputs={6}
        separator={<span>-</span>}
      />
      <label className={styles.error}>{eror}</label>
      
      </div>
      <br />
      <Typography>
      <h6>Please tick this box to continue</h6>
      </Typography>
      <br />
          <Button onClick={subb} className={styles.submit} variant="contained" endIcon={<SendIcon />}>
        Submit
      </Button>
      </FormControl>
    </Box>
    <Typography style={{top:'87%',position:'absolute',left:'24%'}} textAlign='center'>
       <p> Are you admin.<a href='admin-login'>Click here</a></p>
    </Typography>

    <img src='logossip.png'/>

    <Footer/>

    </div>
  )
}

export default Citizen