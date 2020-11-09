// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminpnal and run `gridsome develop`
module.exports = {
  icon: "./static/favicon.png",
  titleTemplate: "aisen60 | %s",
  plugins: [
    {
      use: "@gridsome/source-strapi",
      options: {
        apiURL: process.env.GRIDSOME_FILES,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ["post", "tag", "classes"],
        typeName: "Strapi",
        singleTypes: ["general"],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: "",
        //   password: "",
        // },
      },
    },
  ],
  templates: {
    StrapiPost: [
      {
        path: "/post/:id",
        component: "./src/templates/Post.vue",
      },
    ],
    StrapiTag: [
      {
        path: "/tag/:id",
        component: "./src/templates/Tag.vue",
      },
    ],
    StrapiClasses: [
      {
        path: "/class/:id",
        component: "./src/templates/Class.vue",
      },
    ],
  },
};
