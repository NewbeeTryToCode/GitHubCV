/* eslint-disable no-console */
export default function (ctx) {
  ctx.$axios.onRequest((config) => {});

  ctx.$axios.onError((error) => {
    // Global error from API response
    const data = error.response.data;
    if (data.status === "fail") {
      let message = "";
      if (
        data.error !== null &&
        data.error !== undefined &&
        Array.isArray(data.error)
      ) {
        for (const err in data.error) {
          message += data.error[err].join("\n\n") + "\n";
        }
      } else {
        message = data.message;
      }
      ctx.store.dispatch("utils/snackbar/OPEN", {
        message,
        color: "red",
      });
    }
    return data;
  });
}
