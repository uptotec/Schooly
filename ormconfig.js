module.exports = [
  {
    name: "development",
    type: "postgres",
    host: "localhost",
    username: "postgres",
    password: "Uptotec2001",
    database: "schooly",
    synchronize: true,
    logging: false,
    entities: ["src/entity/**/*.ts"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
    cli: {
      entitiesDir: "src/entity",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber"
    }
  },
  {
    name: "production",
    type: "postgres",
    host: "localhost",
    username: "postgres",
    password: "Uptotec2001",
    database: "schooly",
    synchronize: true, // switch this to false once you have the initial tables created and use migrations instead
    logging: false,
    entities: ["entity/**/*.js"],
    migrations: ["migration/**/*.js"],
    subscribers: ["subscriber/**/*.js"],
    cli: {
      entitiesDir: "entity",
      migrationsDir: "migration",
      subscribersDir: "subscriber"
    }
  }
];
