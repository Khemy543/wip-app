import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import TextField from '@material-ui/core/TextField';
import Person from "@material-ui/icons/Person";
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LockIcon from '@material-ui/icons/Lock';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import axios from "axios"
import avatar from "assets/img/faces/marc.jpg";
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

var domain = 'https://wipap.herokuapp.com'
let user=localStorage.getItem('access_token');
const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  formControl: {
    width: '100%',
  },
};

const useStyles = makeStyles(styles);

export default function CreateUser() {
  const [roles, setRoles] = React.useState([])
  const [title, setTitle] = React.useState("Mr");
  const [role, setRole] = React.useState(2);
  const [name,setName] = React.useState("");
  const [email,setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const classes = useStyles();

  React.useEffect(()=>{
    axios.get(`${domain}/api/get/roles`,
    {headers:{ 'Authorization':`Bearer ${user}`}})
    .then(res=>{
      console.log(res.data);
      setRoles(res.data)
    })
    .catch(error=>{
      console.log(error)
    })
  },[])


  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post(`${domain}/api/wmc/super_admin/create/admin`,
    {
      name:name,
      title:title,
      role_id:role,
      phone:phone,
      email:email
    },
    {headers:{ 'Authorization':`Bearer ${user}`}})
    .then(res=>{
      console.log(res.data)

    })
    .catch(error=>{
      console.log(error.response.data)
    })
  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8} style={{marginTop:"30px", marginLeft:"auto", marginRight:"auto"}}>
          <Card>
            <form className={classes.form} onSubmit={handleSubmit}>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Create New User</h4>{/* 
              <p className={classes.cardCategoryWhite}>Complete your profile</p> */}
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required={true}
                    fullWidth
                    id="Username"
                    label="Full Name"
                    name="username"
                    autoComplete="Full Name"
                    type="text"
                    autoFocus
                    value={name}
                    onChange={e=>setName(e.target.value)}
                    InputProps={{
                      endAdornment:<InputAdornment position="end">
                      <IconButton>
                        <Person/>
                      </IconButton>
                    </InputAdornment>
                  }}
                  />
                  </GridItem>

                  <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required={true}
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                    type="email"
                    onChange={e=>setEmail(e.target.value)}
                    InputProps={{
                      endAdornment:<InputAdornment position="end">
                      <IconButton>
                        <MailIcon/>
                      </IconButton>
                    </InputAdornment>
                  }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required={true}
                    fullWidth
                    id="Phone"
                    label="Phone"
                    name="phone"
                    autoComplete="phone"
                    value={phone}
                    onChange={e=>setPhone(e.target.value)}
                    InputProps={{
                      endAdornment:<InputAdornment position="end">
                      <IconButton>
                        <PhoneIcon/>
                      </IconButton>
                    </InputAdornment>
                  }}
                  />
                  </GridItem>

                  <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required={false}
                    fullWidth
                    id="Phone"
                    label="Phone (Optional)"
                    name="phone"
                    autoComplete="phone"
                    InputProps={{
                      endAdornment:<InputAdornment position="end">
                      <IconButton>
                        <PhoneIcon/>
                      </IconButton>
                    </InputAdornment>
                  }}
                  />
                </GridItem>
              </GridContainer>
              <br/>
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
                  <FormControl variant="outlined" className={classes.formControl} >
                      <InputLabel id="demo-simple-select-outlined-label">Role</InputLabel>
                      <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={role}
                      onChange={e=>setRole(e.target.value)}
                      label="Role"
                      >
                      {roles.map((value,key)=><MenuItem value={value.id}>{value.role}</MenuItem>)}
                      </Select>
                  </FormControl>
                    </GridItem>
              </GridContainer>
              {/* <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required={true}
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    autoComplete="password"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    InputProps={{
                      endAdornment:<InputAdornment position="end">
                      <IconButton>
                        <LockIcon/>
                      </IconButton>
                    </InputAdornment>
                  }}
                  />
                  </GridItem>

                  <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required={true}
                    fullWidth
                    id="password"
                    label="Confirm Password"
                    name="password"
                    autoComplete="password"
                    value={confirmPassword}
                    onChange={e=>setConfirmPassword(e.target.value)}
                    InputProps={{
                      endAdornment:<InputAdornment position="end">
                      <IconButton>
                        <LockIcon/>
                      </IconButton>
                    </InputAdornment>
                  }}
                  />
                </GridItem>
              </GridContainer> */}
            </CardBody>
            <CardFooter>
              <Button type="submit" color="primary">Create User</Button>
            </CardFooter>
              </form>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
