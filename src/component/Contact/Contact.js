import React, { useRef } from 'react';
import { Button, Icon, Paper, TextareaAutosize, TextField } from '@material-ui/core';
import emailjs from 'emailjs-com';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Contact = () => {
  
  const classes = useStyles();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_mv7wwgr', 'template_e6cj4tb', form.current, 'user_RSRB3E9qUCWykVevCMZzb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };


    return (
        <div id='index[3]' style={{marginBottom:'100px'}}>
          
          <h2 className=" my-12 text-center text-3xl font-medium">Contact Me</h2>
          
          <form ref={form} onSubmit={sendEmail}>

          <TextField style={{width:'45%', marginBottom:'10px'}} type="text" id="standard-basic" label="Name" name="Name"/><br/>
          <TextField style={{width:'45%', marginBottom:'10px'}} type="email" id="standard-basic" label="E-mail" name="E-mail" /><br/>
          {/* <TextField style={{width:'45%', marginBottom:'10px'}} type="number" id="standard-basic" label=" Number" /> */}
          <TextareaAutosize style={{width:'45%', marginTop:'10px',border:'1px solid gray'}} aria-label="minimum height" minRows={3}  name="message" placeholder="Comment "/>
<br/>
          <Button
          type="submit" value="Send"
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>

          </form>

        

        </div>
    );
};

export default Contact;


      