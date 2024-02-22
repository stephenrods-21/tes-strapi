
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi"),
      user: env("DATABASE_USER", "test"),
      password: env("DATABASE_PASSWORD", "test"),
      schema: env("DATABASE_SCHEMA", "public"),
      ssl: true
    },
    useNullAsDefault: true,
  },
});

// const path = require('path');

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', 'database/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// });
