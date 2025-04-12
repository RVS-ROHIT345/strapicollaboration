module.exports = ({ env }) => {
  const port = process.env.PORT || env.int("PORT", 1337); // Prefer Render's dynamic PORT

  console.log("Using PORT:", port);
  console.log("Render PORT:", process.env.PORT);
  console.log("Strapi env PORT:", env("PORT")); // ✅ Corrected this line

  return {
    host: env("HOST", "0.0.0.0"),
    port,
    app: {
      keys: env.array("APP_KEYS"),
    },
    webhooks: {
      populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
    },
  };
};
