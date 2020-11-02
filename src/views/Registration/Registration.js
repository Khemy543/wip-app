import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from "components/CustomButtons/Button.js";
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import BusinessIcon from '@material-ui/icons/Business';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import axios from 'axios'
/* function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="!#">
        wipapp.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
} */

var domain = 'https://wipap.herokuapp.com'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    width: '100%',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Registration(props) {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [cpassword, setCPassword] = React.useState("");
    const [company_name, setCompany_name] = React.useState("");
    const [company_email, setCompany_email] = React.useState("");
    const [company_address, setCompany_address] = React.useState("");
    const [company_phone, setCompany_phone] = React.useState("");
    const [title, setTitle] = React.useState("Mr")
    const [visible, setVisible] = React.useState(false);
    const [eye, setEye] = React.useState(false);
    const [eye2, setEye2] = React.useState(false);
    const [logo, setLogo] = React.useState(null);
    const [business_cert , setBusiness_Cert] = React.useState(null)
    const [message, setMessage] = React.useState("");
    const [percentage, setPercentage] = React.useState(0);
    const [color, setColor] = React.useState("");

    const classes = useStyles();
    const toggleEye =()=> setEye(!eye);
    const toggleEye2 =()=> setEye2(!eye2);
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(e);
        var bodyFormData = new FormData();
        bodyFormData.append('name', username);
        bodyFormData.append('email', email);
        bodyFormData.append('phone', phone);
        bodyFormData.append('company_name',company_name);
        bodyFormData.append('company_email', company_email);
        bodyFormData.append('company_phone', company_phone);
        bodyFormData.append('company_address', company_address);
        bodyFormData.append('business_cert', business_cert);
        bodyFormData.append('logo', logo);
        bodyFormData.append('title', title);
        bodyFormData.append('password', password)
        

        if(cpassword === password){
            axios({
                method:'post',
                url:`${domain}/api/wmc/auth/register`,
                data:bodyFormData,
                headers: {'Content-Type': 'multipart/form-data' },
                onUploadProgress: (progressEvent) => {
                    const {loaded , total} = progressEvent;
                    let percentage = Math.floor(loaded * 100 / total);
                    console.log(percentage)
                    if(percentage<100){
                        setPercentage(percentage);
                    }
                    else{
                        setPercentage(100)
                    }
            }})
            .then(res=>{
                console.log("data",res.data);
                setVisible(true);
                setMessage("Registration Successful");
                setColor("success")
            })
            .catch(error=>{
                console.log(error.response.data);
                setVisible(true)
                setMessage(error.response.data.errors.name || error.response.data.errors.email || error.response.data.errors.phone || error.response.data.errors.company_name
                    || error.response.data.errors.company_email || error.response.data.errors.company_phone || error.response.data.errors.company_address || error.response.data.errors.business_cert
                    || error.response.data.errors.title || error.response.data.errors.logo)
                setColor("error")
            })
        }
        else{
            setVisible(true);
            setMessage("Password Do Not Match!!")
            setColor("error")
        }
    }

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create Account
        </Typography>
        {visible?
        <Alert severity={`${color}`}>{message}</Alert>
        :
        <></>
        }
        <form className={classes.form} onSubmit={handleSubmit}>
        <Container>
        <GridContainer>
        <GridItem md={6}>
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            id="Name"
            label="Full Name"
            name="full name"
            autoComplete="full name"
            autoFocus
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            InputProps={{
                endAdornment:<InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                >
                  <PersonIcon />
                </IconButton>
              </InputAdornment>
            }}
          />
          </GridItem>
          <GridItem md={6}>
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            name="Email"
            label="Email"
            type="email"
            id="email"
            autoComplete="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            InputProps={{
                endAdornment:<InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                >
                  <EmailIcon />
                </IconButton>
              </InputAdornment>
            }}
          />
          </GridItem>
        </GridContainer>

        <GridContainer>
        <GridItem md={6}>
        <FormControl variant="outlined" className={classes.formControl} >
            <InputLabel id="demo-simple-select-outlined-label">Title</InputLabel>
            <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={title}
            onChange={e=>setTitle(e.target.value)}
            label="Title"
            >
            <MenuItem value="Mr">Mr</MenuItem>
            <MenuItem value="Mrs">Mrs</MenuItem>
            <MenuItem value="Miss">Miss</MenuItem>
            </Select>
        </FormControl>
          </GridItem>
        <GridItem md={6}>
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            id="Phone Number"
            label="Phone Number"
            name="phone"
            autoComplete="Phone"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            InputProps={{
                endAdornment:<InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                >
                  <PhoneIcon />
                </IconButton>
              </InputAdornment>
            }}
          />
          </GridItem>
          
        </GridContainer>
        
        <GridContainer>
        <GridItem md={6}>
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            name="Company Name"
            label="Company Name"
            type="text"
            id="cname"
            autoComplete="company_name"
            value={company_name}
            onChange={(e)=>setCompany_name(e.target.value)}
            InputProps={{
                endAdornment:<InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                >
                <BusinessIcon/>
                </IconButton>
              </InputAdornment>
            }}
          />
          </GridItem>
        <GridItem md={6}>
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            id="CompanyEmail"
            label="Company Email"
            name="cemail"
            autoComplete="cemail"
            value={company_email}
            onChange={(e)=>setCompany_email(e.target.value)}
            InputProps={{
                endAdornment:<InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                >
                  <EmailIcon />
                </IconButton>
              </InputAdornment>
            }}
          />
          </GridItem>
         
        </GridContainer>

        <GridContainer>
        <GridItem md={6}>
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            label="Company Phone"
            type="text"
            value={company_phone}
            onChange={(e)=>setCompany_phone(e.target.value)}
            InputProps={{
                endAdornment:<InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                >
                    <PhoneIcon />
                </IconButton>
              </InputAdornment>
            }}
          />
          </GridItem>
        <GridItem md={6}>
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            label="Company Address"
            value={company_address}
            onChange={(e)=>setCompany_address(e.target.value)}
            InputProps={{
                endAdornment:<InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                >
                <HomeIcon/>
                </IconButton>
              </InputAdornment>
            }}
          />
          </GridItem>
         
        </GridContainer>

        <GridContainer>
        <GridItem md={6}>
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            id="Password"
            label="Password"
            type={eye?"text":"password"}
            name="password"
            autoComplete="passowrd"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            InputProps={{
                endAdornment:<InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={toggleEye}
                >
                  {eye ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }}
          />
          </GridItem>
          <GridItem md={6}>
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            name="password"
            label="Confirm Password"
            type={eye2?"text":"password"}
            id="password"
            autoComplete="current-password"
            value={cpassword}
            onChange={(e)=>setCPassword(e.target.value)}
            InputProps={{
                endAdornment:<InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={toggleEye2}
                >
                  {eye2 ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }}
          />
          </GridItem>
          </GridContainer>
            <br/>
          <GridContainer>
        <GridItem md={6}>
        <label htmlFor="upload-photo">
        Upload Logo
        </label>
        <br/>
        <input
            id="upload-photo"
            name="upload-photo"
            type="file"
            onChange={e=>setLogo(e.target.files[0])}
        />

        {/* <Fab
            color="secondary"
            size="small"
            component="span"
            aria-label="add"
            variant="extended"
        >
            <AddIcon /> Upload Logo
        </Fab>
        <br />
        <br />

        <Fab color="primary" size="small" component="span" aria-label="add">
            <AddIcon />
        </Fab> */}
          </GridItem>
          <GridItem md={6}>
          <label htmlFor="upload-cert">
            Upload Business Cert
            </label>
            <br/>
            <input
                id="upload-cert"
                name="upload-cert"
                type="file"
                onChange={e=>setBusiness_Cert(e.target.files[0])}
            />

           {/*  <Fab
                color="secondary"
                size="small"
                component="span"
                aria-label="add"
                variant="extended"
            >
                <AddIcon /> Upload Business Cert
            </Fab>
            <br />
            <br />

            <Fab color="primary" size="small" component="span" aria-label="add">
                <AddIcon />
            </Fab> */}
          </GridItem>
          </GridContainer>
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
                Forgot password?
              </Link> */}
            </Grid>
            <Grid item>
              <Link href="/auth/login-page" variant="body2">
                {"Already Have An Account? Sign In"}
              </Link>
            </Grid>
          </Grid>
          </Container>
        </form>
      </div>
    </Container>
  );
}
