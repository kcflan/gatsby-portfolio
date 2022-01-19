import React from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
      padding: "1em 2em 1em 1em",
    },
  },
  form: {
    margin: "auto",
    width: "75%",
    maxWidth: "400px",
    textAlign: "center",
  },
}));

function ContactForm() {
  const handleSubmit = e => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: {
        name: name,
        email: email,
        messsage: message,
      },
    }).then(response => {
      if (response.data.msg === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    });
  };

  const resetForm = () => {
    document.getElementById("contact-form").reset();
  };
  const classes = useStyles();
  return (
    <div className={classes.form}>
      <Card>
        <CardContent>
          <form
            id='contact-form'
            onSubmit={handleSubmit}
            method='POST'
            className={classes.root}
            noValidate
            autoComplete='off'
          >
            <div className='form-group'>
              <TextField
                required
                id='name'
                label='Name'
                defaultValue='&nbsp;'
                variant='outlined'
              />
              {/* <label for='name'>Name</label> */}
              {/* <input type='text' className='form-control' id='name' /> */}
            </div>
            <div className='form-group'>
              <TextField
                required
                id='email'
                label='Email'
                defaultValue='&nbsp;'
                variant='outlined'
              />
              {/* <label for='exampleInputEmail1'>Email address</label>
          <input
            type='email'
            className='form-control'
            id='email'
            aria-describedby='emailHelp'
          /> */}
            </div>
            <div className='form-group'>
              <TextField
                required
                id='message'
                label='Message'
                multiline
                rows='8'
                defaultValue='&nbsp;'
                variant='outlined'
              />
              {/* <label for='message'>Message</label>
          <textarea className='form-control' rows='5' id='message'></textarea> */}
            </div>
            <Button variant='contained' disabled color='primary' type='submit'>
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default ContactForm;
