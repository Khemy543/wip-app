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
  

export default function GetUsers() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Create New User</h4>{/* 
              <p className={classes.cardCategoryWhite}>Complete your profile</p> */}
            </CardHeader>
            <CardBody>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Shop Id</StyledTableCell>
                        <StyledTableCell align="center">Name</StyledTableCell>
                        <StyledTableCell align="center">Campus</StyledTableCell>
                        <StyledTableCell align="center">Action</StyledTableCell>
                    
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    <StyledTableRow>
                    <StyledTableCell align="center">1</StyledTableCell>
                    <StyledTableCell align="center">Name</StyledTableCell>
                    <StyledTableCell align="center">here</StyledTableCell>
                    <StyledTableCell align="center" className={classes.tableActions}>
                <Tooltip
                id="tooltip-top"
                title="View Shop"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
                >
                <IconButton
                    aria-label="Edit"
                    className={classes.tableActionButton}
                >
                    <Visibility
                    color="primary"
                    className={
                        classes.tableActionButtonIcon + " " + classes.edit
                    }
                    />
                </IconButton>
                </Tooltip>
                {true?
                <Tooltip
                id="tooltip-top-block"
                title="Block Shop"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
                >
                
                <IconButton
                    color="secondary"
                    aria-label="Block"
                    className={classes.tableActionButton}
                >
                    <LockIcon
                    color="secondary"
                    className={
                        classes.tableActionButtonIcon + " " + classes.edit
                    }
                    />
                </IconButton>
                </Tooltip>
                :
                <Tooltip
                id="tooltip-top-unblock"
                title="Unblock Shop"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
                >
                <IconButton
                    color="success"
                    aria-label="Unblock"
                    className={classes.tableActionButton}
                >
                    <LockOpenIcon
                    color="success"
                    className={
                        classes.tableActionButtonIcon + " " + classes.edit
                    }
                    />
                </IconButton>
                </Tooltip>
                }
                <Tooltip
                id="tooltip-top-start"
                title="Delete Shop"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
                >
                <IconButton
                    color="secondary"
                    aria-label="Close"
                    className={classes.tableActionButton}
                >
                    <Close
                    className={
                        classes.tableActionButtonIcon + " " + classes.close
                    }
                    />
                </IconButton>
                
                </Tooltip>
                {/* <Modal 
                open={open}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >
                    <div style={modalStyle} className={classes.paper}>
                    <h5 id="simple-modal-title">Do you want to delete shop?</h5>
                    <Button color="danger" onClick={()=>handleDeleteShop()}>Yes</Button> <Button color="info" onClick={()=>setOpen(false)}>No</Button>
                    </div>
                </Modal> */}
            </StyledTableCell>
                </StyledTableRow>
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
