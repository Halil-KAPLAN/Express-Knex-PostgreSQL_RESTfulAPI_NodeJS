module.exports = {
  development: {
    client: "pg",
    connection: "postgres://react_test_db_user:pGlS2IGxLAliX8uqgqsZ01RSfn4PLChV@dpg-cfnd8c5a499f28ba2u4g-a.frankfurt-postgres.render.com/react_test_db",
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
    searchPath: ['knex', 'public'],
  },
  production: {
    client: "pg",
    connection: "postgres://react_test_db_user:pGlS2IGxLAliX8uqgqsZ01RSfn4PLChV@dpg-cfnd8c5a499f28ba2u4g-a.frankfurt-postgres.render.com/react_test_db",
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
};
