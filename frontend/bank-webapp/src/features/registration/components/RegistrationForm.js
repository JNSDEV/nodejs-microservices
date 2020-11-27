import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { connect } from "react-redux";

const styles = (theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", firstname: "", lastname: "" };

    this.switch = props.switch;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    const url = `${process.env.REACT_APP_GATEWAY_URL}${process.env.REACT_APP_REGISTRATION}`;

    const dispatch = this.props.dispatch;

    axios
      .post(
        url,
        {
          email: this.state.email,
          password: this.state.password,
          firstname: this.state.firstname,
          lastname: this.state.lastname,
        },
        {
          "Content-Type": "Application/json; charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        }
      )
      .then(function (response) {
        console.log(response);
        dispatch({ type: "LOGIN", user: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });

    event.preventDefault();
  }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="firstname"
          label="Firstname"
          name="firstname"
          autoComplete="firstname"
          autoFocus
          value={this.state.firstname}
          onChange={this.handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="lastname"
          label="Lastname"
          name="lastname"
          autoComplete="lastname"
          autoFocus
          value={this.state.lastname}
          onChange={this.handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={this.state.email}
          onChange={this.handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={this.handleChange}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign Up
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2" onClick={() => this.switch(true)}>
              {"Already have an account? Sign In"}
            </Link>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default connect()(withStyles(styles)(RegistrationForm));
