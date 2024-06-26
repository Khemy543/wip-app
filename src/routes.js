/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import ExpandMore from '@material-ui/icons/ExpandMore';
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import CreateUser from "views/Users/CreateUser.js"
import GetUsers from "views/Users/GetUsers";
import CreateVehicle from "views/Vehicle/CreateVehicle";
import GetVehicles from "views/Vehicle/GetVehicles";
import EditVehicle from "views/Vehicle/EditVehicles";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    header:"dashboard",
    icon:ExpandMore,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: ExpandMore,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/create-user",
    name: "Create User",
    header:"user",
    icon: ExpandMore,
    component: CreateUser,
    layout: "/admin"
  },
   {
    path: "/get-all-users",
    name: "All User",
    header:"user",
    icon: ExpandMore,
    component: GetUsers,
    layout: "/admin"
  },
  {
    path: "/create-vehicle",
    name: "Create Vehicle",
    header:"vehicle",
    icon: ExpandMore,
    component: CreateVehicle,
    layout: "/admin"
  },
  {
    path: "/get-vehicle",
    name: "View Vehicle",
    header:"vehicle",
    icon: ExpandMore,
    component: GetVehicles,
    layout: "/admin"
  },
  {
    path: "/edit-vehicle",
    name: "Edit Vehicle",
    header:"vehicle",
    invisible:true,
    icon: ExpandMore,
    component: EditVehicle,
    layout: "/admin"
  },
  /* {
    path: "/table",
    name: "Table List",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  } */
];

export default dashboardRoutes;
