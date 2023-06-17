import Home from "../pages/HomePage.vue";
import Register from "../pages/RegisterPage.vue";
import Login from "../pages/LoginPage.vue";
import CreateNewsPage from '../pages/CreateNewsPage.vue'
import CreateDepartmentPage from '../pages/CreateDepartmentPage.vue'
import DepartmentCardComponent from '../pages/DepartmentPage.vue'
import BranchPage from '../pages/BranchPage.vue'
import CreateBranchPage from '../pages/CreateBranchPage.vue'
import ProfessorPage from '../pages/ProfessorPage.vue'
import CreateProfessorPage from '../pages/CreateProfessorPage.vue'
import ApplicationPage from '../pages/ApplicationPage.vue'
import ContactPage from '../pages/ContactPage.vue'
import AdminDashboardPage from '../pages/AdminDashboardPage.vue'
import ContactListPage from '../pages/ContactListPage.vue'
import ApplicationListPage from '../pages/ApplicationListPage.vue'

import { onAuthStateChanged, getAuth } from "firebase/auth";
import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },

  {
    path: "/create-news",
    name: "create-news",
    component: CreateNewsPage
  },

  {
    path: "/create-department",
    name: "create-department",
    component: CreateDepartmentPage
  },

  {
    path: "/departments",
    name: "departments",
    component: DepartmentCardComponent
  },

  {
    path: "/branches",
    name: "branches",
    component: BranchPage
  },

  {
    path: "/create-branch",
    name: "create-branch",
    component: CreateBranchPage
  },

  {
    path: "/create-professor",
    name: "create-professor",
    component: CreateProfessorPage
  },

  {
    path: "/professors",
    name: "professors",
    component: ProfessorPage
  },

  {
    path: "/application",
    name: "application",
    component: ApplicationPage
  },

  {
    path: "/application-list",
    name: "application-list",
    component: ApplicationListPage
  },

  {
    path: "/contact",
    name: "contact",
    component: ContactPage
  },

  {
    path: "/contact-list",
    name: "contact-list",
    component: ContactListPage
  },

  {
    path: "/dashboard",
    name: "dashboard",
    component: AdminDashboardPage
  },

  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

//admin in dashboard

router.beforeEach((to, from, next) => {
  onAuthStateChanged(getAuth(), async (user) => {
    const shouldBeLoggedIn = (record) =>
      record.meta.isAuthenticated || record.meta.isAdmin;

    if (to.matched.some((record) => shouldBeLoggedIn(record))) {
      if (!user) {
        next("/login");
      } else {
        const tokenResult = await getAuth().currentUser.getIdTokenResult();
        const isAdmin = tokenResult.claims.admin;
        if (isAdmin && to.matched.some((record) => !record.meta.isAdmin)) {
          next("/admin");
        } else if (to.matched.some((record) => record.meta.isAdmin)) {
          if (!tokenResult.claims.admin) {
            alert("You are not authorized to access this page.");
            next("/");
          } else {
            next();
          }
        } else {
          next();
        }
      }
    } else {
      next();
    }
  });
});


//User in different paths
router.beforeEach((to, from, next) => {
  onAuthStateChanged(getAuth(), async (user) => {
    const shouldBeLoggedIn = (record) =>
      record.meta.isAuthenticated || record.meta.isUser;

    if (to.matched.some((record) => shouldBeLoggedIn(record))) {
      if (!user) {
        next("/login");
      } else {
        const token = await getAuth().currentUser.getIdTokenResult();
        const isUser = token.claims.user;
        if (isUser && to.matched.some((record) => !record.meta.isUser)) {
          next();
        }  else {
          next();
        }
      }
    } else {
      next();
    }
  });
});
export default router;
