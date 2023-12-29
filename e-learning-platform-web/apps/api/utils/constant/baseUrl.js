const PORT = process.env.PORT || 3000;
// Todo : api url to config variable
// "mongodb://127.0.0.1:27017/e-learning-tool"
const dataDaseUrl =
  process.env.NODE_ENV !== "production"
    ? "mongodb://127.0.0.1:27017/e-learning-tool"
    : process.env.MONGO_URL;
const baseUrl =
  process.env.NODE_ENV !== "production"
    ? `http://localhost:${PORT}`
    : process.env.API_URL;

const baseUrl_client =
  process.env.NODE_ENV !== "production"
    ? `http://localhost:3001`
    : process.env.STUDENT_URL;
const baseUrl_coach =
  process.env.NODE_ENV !== "production"
    ? `http://localhost:3002`
    : process.env.COACH_URL;
const baseUrl_admin =
  process.env.NODE_ENV !== "production"
    ? `http://localhost:3000`
    : process.env.ADMIN_URL;
module.exports = {
  baseUrl,
  baseUrl_client,
  baseUrl_coach,
  baseUrl_admin,
  dataDaseUrl,
};
