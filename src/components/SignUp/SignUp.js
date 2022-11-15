import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

import "./SignUp.css";

const theme = createTheme();

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  const handleFname = (event) => {
    setFname(event.target.value);
  };
  const handleLname = (event) => {
    setLname(event.target.value);
  };
  const handleDob = (event) => {
    setDob(event.target.value);
  };
  const handleGender = (event) => {
    setGender(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const postData = {
      fname: fname,
      lname: lname,
      email: email,
      password: password,
      dob: dob,
      gender: gender,
    };

    console.log(postData);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="/Images/avatar-logo.png"
            sx={{ width: 56, height: 56 }}
          />
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            validate="true"
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={fname}
                  autoFocus
                  onChange={handleFname}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={lname}
                  autoComplete="family-name"
                  onChange={handleLname}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel id="select-dob-label">DOB</InputLabel>
                <TextField
                  type="date"
                  labelid="select-dob-label"
                  required
                  fullWidth
                  id="dob"
                  name="dob"
                  value={dob}
                  onChange={handleDob}
                />
                {/* <Select
                  labelId="select-age-label"
                  fullWidth
                  required
                  id="select-age"
                  label="Age"
                  value={age}
                  name="age"
                  onChange={handleAge}
                >
                  <MenuItem value={"24"}>24</MenuItem>
                  <MenuItem value={"25"}>25</MenuItem>
                  <MenuItem value={"N"}>prefer not to say</MenuItem>
                </Select> */}
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel id="select-gender-label">Gender</InputLabel>
                <Select
                  labelId="select-gender-label"
                  fullWidth
                  required
                  id="select-gender"
                  label="Gender"
                  value={gender}
                  name="gender"
                  onChange={handleGender}
                >
                  <MenuItem value={"F"}>F</MenuItem>
                  <MenuItem value={"M"}>M</MenuItem>
                  <MenuItem value={"N"}>Other</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  autoComplete="email"
                  type="email"
                  onChange={handleEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={password}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handlePassword}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link className="link-btn-login" to="/login">
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
