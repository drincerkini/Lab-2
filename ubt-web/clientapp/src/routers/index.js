import Home from "../pages/HomePage.vue";
import Register from "../pages/RegisterPage.vue";
import Login from "../pages/LoginPage.vue";
import CreateNewsPage from '../pages/CreateNewsPage.vue'
import ApplicationPage from '../pages//ApplicationPages/ApplicationPage.vue'
import ContactPage from '../pages/ContactPages/ContactPage.vue'
import AdminDashboardPage from '../pages/AdminDashboardPage.vue'
import ContactListPage from '../pages/ContactPages/ContactListPage.vue'
import ApplicationListPage from '../pages/ApplicationPages/ApplicationListPage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ActivityPage from '../pages/ActivityPages/ActivityPage.vue'
import CreateActivityPage from '../pages/ActivityPages/CreateActivityPage.vue'

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
    path: "/activities",
    name: "activities",
    component: ActivityPage
  },

  {
    path: "/create-activities",
    name: "create-activities",
    component: CreateActivityPage
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
    path: "/about",
    name: "about",
    component: AboutPage
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
