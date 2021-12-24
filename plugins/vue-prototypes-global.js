import Vue from "vue";

export default function (ctx) {
  Vue.prototype.$snackbar = (show, options) => {
    if (show) {
      ctx.store.dispatch("utils/snackbar/OPEN", options);
    } else {
      ctx.store.dispatch("utils/snackbar/CLOSE");
    }
  };
}
