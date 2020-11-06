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
import Alert from '@material-ui/lab/Alert';

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

export default function EditVehicle(props) {
  const [types,setTypes]= React.useState([])
  const [type, setType] = React.useState(props.location.state.vehicle.garbage_type.id);
  const [gps, setGPS] = React.useState(props.location.state.vehicle.gps_module);
  const [vehicle, setVehicle] = React.useState(props.location.state.vehicle.vehicle_no)
  const [message, setMessage]  = React.useState("");
  const [color,setColor] = React.useState("");
  const [visible, setVisible] = React.useState(false)
  const classes = useStyles();

  React.useEffect(()=>{
    axios.get(`${domain}/api/garbage/types`,
    {headers:{ 'Authorization':`Bearer ${user}`}})
    .then(res=>{
      console.log(res.data);
      setTypes(res.data)
    })
    .catch(error=>{
      console.log(error)
    });
  },[])

  const handleSubmit=(e)=>{
      e.preventDefault();
      axios.patch(`${domain}/api/wmc/vehicle/${props.location.state.vehicle.id}/update`,
    {
      garbage_type_id:type,
      vehicle_no:vehicle,
      gps_module:gps
    },
    {headers:{ 'Authorization':`Bearer ${user}`}})
    .then(res=>{
      console.log(res.data);
      setVisible(true);
      setMessage("Vehicle Upaded Successfully");
      setColor("success");
      setTimeout(
          function(){
            props.history.push('/admin/get-vehicle')
          },1500
      )

    })
    .catch(error=>{
      console.log(error)
      setVisible(true);
      setMessage(error.response.data.errors.garbage_type || error.response.data.errors.vehicle_no || error.response.data.errors.gps_module);
      setColor("error")
    })
  }


  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8} style={{marginTop:"30px", marginLeft:"auto", marginRight:"auto"}}>
        {visible?
            <Alert severity={`${color}`}>{message}</Alert>
            :
            <></>
            }
          <Card>
            <form className={classes.form} onSubmit={handleSubmit}>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit Vehicle Details</h4>{/* 
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
                    id="Vehicle_no"
                    label="Vehicle Number"
                    name="vehicle_no"
                    autoComplete="Vehicle_no"
                    type="text"
                    autoFocus
                    value={vehicle}
                    onChange={e=>setVehicle(e.target.value)}
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
                    id="gps"
                    label="GPS Module"
                    name="gps"
                    autoComplete="gps"
                    value={gps}
                    type="text"
                    onChange={e=>setGPS(e.target.value)}
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
                  <GridItem md={12}>
                  <FormControl variant="outlined" className={classes.formControl} >
                      <InputLabel id="demo-simple-select-outlined-label">Role</InputLabel>
                      <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={type}
                      onChange={e=>setType(e.target.value)}
                      label="Role"
                      >
                      {types.map((value,key)=><MenuItem value={value.id}>{value.garbage_type}</MenuItem>)}
                      </Select>
                  </FormControl>
                    </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button type="submit" color="primary">Update</Button>
            </CardFooter>
              </form>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
