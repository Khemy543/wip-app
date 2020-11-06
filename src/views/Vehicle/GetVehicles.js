import React from "react";
// @material-ui/core components
import { makeStyles,withStyles  } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Tooltip from "@material-ui/core/Tooltip";

import Visibility from "@material-ui/icons/Visibility";
import Close from "@material-ui/icons/Close";
import TablePagination from '@material-ui/core/TablePagination';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import _ from "lodash";
import CircularProgress from '@material-ui/core/CircularProgress';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Button from "components/CustomButtons/Button.js";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios"

var domain = 'https://wipap.herokuapp.com'
var user=localStorage.getItem('access_token');

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
  }
};

const useStyles = makeStyles(styles);

const StyledTableCell = withStyles((theme) => ({
    head: {
      color: theme.palette.common.black,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  

export default function GetVehicles(props) {
  const classes = useStyles();

  const [vehicles, setVehicles] = React.useState([]);
  const [id, setid] = React.useState(null);
  const [open, setOpen] = React.useState(false)

  React.useEffect(()=>{
    console.log(user)
  axios.get(`${domain}/api/wmc/vehicle/index`,
  {headers:{ 'Authorization':`Bearer ${user}`}})
  .then(res=>{
    console.log(res.data)
    setVehicles(res.data)
  })
  .catch(error=>{
    console.log(error);
  })
},[])

const handleDelete=(ide)=>{
    let tempData = [...vehicles]
    axios.delete(`${domain}/api/wmc/vehicle/${ide}/delete`,
    {headers:{ 'Authorization':`Bearer ${user}`}})
    .then(res=>{
        console.log(res.data);
        let newData = tempData.filter(item=>item.id !== ide)
        setVehicles(newData)
    })
    .catch(error=>{
        console.log(error)
    })
}



  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>All Vehicles</h4>{/* 
              <p className={classes.cardCategoryWhite}>Complete your profile</p> */}
            </CardHeader>
            <CardBody>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell align="center"> #</StyledTableCell>
                        <StyledTableCell align="center"> Vehicle Number</StyledTableCell>
                        <StyledTableCell align="center">GPS Module</StyledTableCell>
                        <StyledTableCell align="center">Garbage Type</StyledTableCell>
                        <StyledTableCell align="center">Created At</StyledTableCell>
                        <StyledTableCell align="center">Updated At</StyledTableCell>
                        <StyledTableCell align="center">Action</StyledTableCell>
                    
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {vehicles.map((value,key)=>(
                    <StyledTableRow>
                    <StyledTableCell align="center">{key+1}</StyledTableCell>
                    <StyledTableCell align="center">{value.vehicle_no}</StyledTableCell>
                    <StyledTableCell align="center">{value.gps_module}</StyledTableCell>
                    <StyledTableCell align="center">{value.garbage_type.garbage_type}</StyledTableCell>
                    <StyledTableCell align="center">{value.garbage_type.created_at}</StyledTableCell>
                    <StyledTableCell align="center">{value.garbage_type.updated_at}</StyledTableCell>
                    <StyledTableCell align="center" className={classes.tableActions}>
                    <Tooltip
                    id="tooltip-top-start"
                    title="View User"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                    >
                    <IconButton
                        color="primary"
                        aria-label="view"
                        className={classes.tableActionButton}
                        onClick={()=>props.history.push('/admin/edit-vehicle',{vehicle:value})}
                    >
                        <Visibility
                        className={
                            classes.tableActionButtonIcon + " " + classes.close
                        }
                        />
                    </IconButton>
                    
                    </Tooltip>

                    <Tooltip
                    id="tooltip-top-start"
                    title="Delete Vehicle"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                    >
                    <IconButton
                        color="secondary"
                        aria-label="Close"
                        className={classes.tableActionButton}
                        onClick={()=>{setid(value.id); setOpen(true)}}
                    >
                        <Close
                        className={
                            classes.tableActionButtonIcon + " " + classes.close
                        }
                        />
                    </IconButton>
                    
                    </Tooltip>
                <Modal 
                open={open}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >
                    <div  className={classes.paper}>
                    <h5 id="simple-modal-title">Do you want to delete Vehicle?</h5>
                    <Button color="danger" onClick={()=>handleDelete(id)}>Yes</Button> <Button color="info" onClick={()=>setOpen(false)}>No</Button>
                    </div>
                </Modal>
            </StyledTableCell>
                </StyledTableRow>
                ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
