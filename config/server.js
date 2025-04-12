module.exports = ({ env }) => {
  // Get the port from the environment or fallback to 1337
  const port = env.int("PORT", 1337);

  // Log the port to the console for debugging
  console.log("Using PORT:", port);

  // Return the configuration object
  return {
    host: env("HOST", "0.0.0.0"),
    port, // Use the port here
    app: {
      keys: env.array("APP_KEYS"),
    },
    webhooks: {
      populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
    },
  };
};
