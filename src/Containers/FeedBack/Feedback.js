import React,{useState} from 'react'
import NavBar from '../../Components/NavBar'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import styles from './Feedback.module.css'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import SendIcon  from '@mui/icons-material/SendAndArchiveOutlined';
import Button from '@mui/material/Button'



const Feedback = () => {
    const [feedback1, setfeedback1] = useState('own');
    const [feedback2, setfeedback2] = useState('imm');
    const [feedback3, setfeedback3] = useState('');
  return (
    <div>
<NavBar/>
<div className={styles.form}>
    <FormControl>
      <FormLabel style={{fontWeight:'bolder'}} id="demo-radio-buttons-group-label">1.How did you come to police station.</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={feedback1}
        onChange={(e)=>setfeedback1(e.target.value)}
        name="radio-buttons-group"
      >
        <FormControlLabel  value="relative" control={<Radio />} label="Through a person known to a police officer" />
        <FormControlLabel value="neighbour" control={<Radio />} label="With a neighbour/ local leader" />
        <FormControlLabel value="own" control={<Radio />} label="On your own" />
      </RadioGroup>
      <br />
      <FormLabel style={{fontWeight:'bolder'}} id="demo-radio-buttons-group-label">2. After how much time you were heard in PS</FormLabel>
      <RadioGroup
      onChange={(e)=>setfeedback2(e.target.value)}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={feedback2}
        name="radio-buttons-group"
      >
        <FormControlLabel  value="15plus" control={<Radio />} label="More than 15 minutes" />
        <FormControlLabel value="15" control={<Radio />} label="15 minutes" />
        <FormControlLabel value="10" control={<Radio />} label="10 minutes" />
        <FormControlLabel value="5" control={<Radio />} label="5 minutes" />
        <FormControlLabel value="imm" control={<Radio />} label="Immediately" />
      </RadioGroup>
      <br />
      <FormLabel style={{fontWeight:'bolder'}} id="demo-radio-buttons-group-label">3. How would you describe your experience with police officers in the police station?</FormLabel>
    <TextareaAutosize
      aria-label="minimum height"
      minRows={3}
      placeholder="Maximum 300 characters allowed."
      onChange={(e)=>setfeedback3(e.target.value)}
      style={{ width: 200 }}
    />
    <br />
<Button className={styles.submit} variant="contained" endIcon={<SendIcon />}>Submit</Button>
    </FormControl>
    </div>
    </div>
  )
}

export default Feedback