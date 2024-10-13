/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ocvdb_owner:0BzRFWOf6cQn@ep-shy-cell-a57gowup.us-east-2.aws.neon.tech/ai%20short%20video?sslmode=require',
    }
  };