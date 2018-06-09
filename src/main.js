import Vue from 'vue'
import AppPublic from './AppPublic.vue'
import AppAdmin from './AppAdmin.vue'
import { createPublicRouter,createAdminRouter } from './router/router.js'

// export a factory function for creating fresh app, router and store
// instances
export function createPublicApp() {
  // create router instance
  const router = createPublicRouter();

  const app = new Vue({
    router,
    // the root instance simply renders the App component.
    render: h => h(AppPublic)
  });

  return { app, router };
}

export function createAdminApp() {
  // create router instance
  const router = createAdminRouter();

  const app = new Vue({
    router,
    // the root instance simply renders the App component.
    render: h => h(AppAdmin)
  });

  return { app, router };
}
