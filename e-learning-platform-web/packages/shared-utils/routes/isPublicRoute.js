export default function isPublicRoute(route) {
  let status = false;

  if (
    route === "/auth/signup" ||
    route === "/auth/verify" ||
    route === "/auth/signin" ||
    route === "/reset" ||
    route === "/reset/[token]"
  ) {
    status = true;
  }
  return status;
}
