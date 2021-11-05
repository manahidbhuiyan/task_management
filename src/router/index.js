import Vue from 'vue'
import VueRouter from 'vue-router'
import login from "../views/register/Login";
import Signup from "../views/register/Signup";
import ForgotPass from "../views/register/ForgotPass";
import Taskdevide from "../views/Taskdevide";
import Dashboard from "../views/personal/Dashboard";
import HeadDashBoard from "../views/Dashboard/HeadDashBoard";
import LeadDashboard from "../views/Dashboard/LeadDashboard";
import Sidebar from "../components/Sidebar";
import CreateTask from "../views/common/CreateTask";
import Tasklist from "../views/personal/Tasklist";
import Profile from "../views/common/Profile";
import Notification from "../views/common/Notification";
import New_Notification from "../views/notification/New_Notification";
import All_Notification from "../views/notification/All_Notification";
import Massage_box from "../views/common/Massage_box";
import Teams from "../views/common/Teams";
import Tearms from "../views/about-site/Tearms";
import Privacy from "../views/about-site/Privacy";
import About from "../views/about-site/About";
import Setting from "../views/about-site/Setting";
import CreateTeam from "../views/personal/CreateTeam";
import CreateProject from "../views/personal/CreateProject";

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'default',
    component: () => import("../views/register/Login")
  },

  {
    path: '/login',
    name: 'Login',
    component: login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/forgot',
    name: ForgotPass,
    component: ForgotPass
  },
  {
    path: '/taskdevide',
    name: Taskdevide,
    component: Taskdevide
  },
  {
    path: '/dashboard',
    name: Dashboard,
    component: Dashboard
  },
  {
    path: '/sidebar',
    name: Sidebar,
    component: Sidebar
  },
  {
    path: '/create-task',
    name: CreateTask,
    component: CreateTask
  },
  {
    path: '/task-list',
    name: Tasklist,
    component: Tasklist
  },
  {
    path: '/profile',
    name: Profile,
    component: Profile
  },
  {
    path: '/h-dashboard',
    name: HeadDashBoard,
    component: HeadDashBoard
  },
  {
    path: '/l-dashboard',
    name: LeadDashboard,
    component: LeadDashboard
  },
  {
    path: '/notification',
    name: Notification,
    component: Notification
  },
  {
    path: '/new-notification',
    name: New_Notification,
    component: New_Notification
  },
  {
    path: '/all-notification',
    name: All_Notification,
    component: All_Notification
  },
  {
    path: '/massage-box',
    name: Massage_box,
    component: Massage_box
  },
  {
    path: '/teams',
    name: Teams,
    component: Teams
  },
  {
    path: '/terms_conditions',
    name: Tearms,
    component: Tearms
  },
  {
    path: '/privacy',
    name: Privacy,
    component: Privacy
  },
  {
    path: '/about',
    name: About,
    component: About
  },
  {
    path: '/setting & privacy',
    name: Setting,
    component: Setting
  },
  {
    path: '/create-project',
    name: CreateProject,
    component: CreateProject
  },
  {
    path: '/create-team',
    name: CreateTeam,
    component: CreateTeam
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
