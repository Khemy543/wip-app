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
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Person from "@material-ui/icons/Person";
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

import avatar from "assets/img/faces/marc.jpg";
import axios from "axios"

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
    marginTop:'20px'
  },
};

const useStyles = makeStyles(styles);
let user=localStorage.getItem('access_token');
var domain = 'https://wipap.herokuapp.com';

export default function UserProfile() {
  const [name, setName] =React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [role, setRole] = React.useState('')

  const [businessCert, setBusinessCert] = React.useState("");
  const [logo, setLogo] = React.useState("")
  const [companyName, setCompanyName] = React.useState("");
  const [companyEmail, setCompanyEmail] = React.useState("");
  const [companyAddress, setCompanyAddress] = React.useState("");
  const [companyPhone, setCompanyPhone]= React.useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = React.useState('');


  React.useEffect(()=>{
  console.log(user)
  axios.get(`${domain}/api/wmc/auth/admin`,
  {headers:{ 'Authorization':`Bearer ${user}`}})
  .then(res=>{
    console.log(res.data);
    setName(res.data.name);
    setEmail(res.data.email);
    setPhone(res.data.phone);
    setTitle(res.data.title);
    setRole(res.data.role.role);
    
    setCompanyName(res.data.company.company_name);
    setCompanyEmail(res.data.company.company_email);
    setCompanyAddress(res.data.company.company_address);
    setCompanyPhone(res.data.company.company_phone);
    setBusinessCert(res.data.company.business_cert);
    setLogo(res.data.company.logo)
  })
  .catch(error=>{
    console.log(error.response.data)
  })
  },[])

  const _handleImageChange=(e)=>{
    e.preventDefault();
  
    let reader = new FileReader();
    let file = e.target.files[0];
  
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
      setLogo(file)
    }
  
    reader.readAsDataURL(file)
  }

  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8} style={{marginLeft:"auto" , marginRight:"auto"}}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
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
              <GridContainer>
              <GridItem md={6}>
              <TextField
                    variant="outlined"
                    margin="normal"
                    required={true}
                    fullWidth
                    id="Title"
                    label="Title"
                    name="title"
                    autoComplete="title"
                    value={title}
                    onChange={e=>setTitle(e.target.value)}
                    disabled={true}
                    InputProps={{
                      endAdornment:<InputAdornment position="end">
                      <IconButton>
                        <SupervisorAccountIcon/>
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
                    id="Role"
                    label="Role"
                    name="role"
                    autoComplete="role"
                    value={role}
                    onChange={e=>setRole(e.target.value)}
                    disabled={true}
                    InputProps={{
                      endAdornment:<InputAdornment position="end">
                      <IconButton>
                        <SupervisorAccountIcon/>
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
                    id="company_name"
                    label="Company Name"
                    name="company_name"
                    autoComplete="Company Name"
                    autoFocus
                    value={companyName}
                    onChange={e=>setCompanyName(e.target.value)}
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
                    id="company_email"
                    label="Company Email"
                    name="compnay_email"
                    autoComplete="company_email"
                    value={companyEmail}
                    onChange={e=>setCompanyEmail(e.target.value)}
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
                    id="company_phone"
                    label="Company Phone"
                    name="company_phone"
                    autoComplete="company_phone"
                    value={companyPhone}
                    onChange={e=>setCompanyPhone(e.target.value)}
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
                    id="company_address"
                    label="Company Address"
                    name="company_address"
                    autoComplete="company_address"
                    value={companyAddress}
                    onChange={e=>setCompanyAddress(e.target.value)}
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
              <GridContainer>
              <GridItem md={6}>
                  <small>
                      Company Logo
                    </small>
                    <img
                      alt="..."
                      src={imagePreviewUrl}
                      style={ {width: "150px",height:"150px",marginBottom:"20px", borderRadius:"50%"} }
                    ></img>
                    <br/>
                <input type="file" 
                              onChange={(e)=>_handleImageChange(e)} />
                </GridItem>

                  <GridItem md={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required={true}
                    fullWidth
                    id="Role"
                    label="Role"
                    name="role"
                    autoComplete="role"
                    value={role}
                    onChange={e=>setRole(e.target.value)}
                    disabled={true}
                    InputProps={{
                      endAdornment:<InputAdornment position="end">
                      <IconButton>
                        <SupervisorAccountIcon/>
                      </IconButton>
                    </InputAdornment>
                  }}
                  />
                    </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary">Update Profile</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
