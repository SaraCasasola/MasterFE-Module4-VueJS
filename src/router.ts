import Router, { RouteConfig } from "vue-router";
import { LoginPageContainer } from "./pages/login";
import { RecipeListPageContainer } from "./pages/recipe/list";
import { EditRecipePageContainer } from "./pages/recipe/edit";

export const baseRoutes = {
  root: {
    name: "root",
    path: "/"
  },
  login: {
    name: "login", 
    path: "/login"
  },
  recipe: {
    name: "recipe", 
    path:"/recipe"
  },
  edit: {
    name: "edit", 
    path:"/recipe/:id"
  }
};

export const localStorageUserKey = "user";

export type BaseRoutes = typeof baseRoutes;

const routes: RouteConfig[] = [
  { name: baseRoutes.root.name, path: baseRoutes.root.path, redirect: baseRoutes.login.path, meta: { requiresAuth: false } },
  { name: baseRoutes.login.name, path: baseRoutes.login.path, component: LoginPageContainer, meta: { requiresAuth: false } },
  { name: baseRoutes.recipe.name, path: baseRoutes.recipe.path, component: RecipeListPageContainer, meta: { requiresAuth: true } },
  { name: baseRoutes.edit.name, path: baseRoutes.edit.path, component: EditRecipePageContainer, props: true, meta: { requiresAuth: true }},
];

export const router = new Router({
  routes,
});


router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem(localStorageUserKey) == null) {
      if (to.path !== baseRoutes.login.path) {
        next({
            path: baseRoutes.login.path,
            params: { nextUrl: to.fullPath }
        });
      }
    } else {      
      next();
    }
  } else {      
    next();
  }
});