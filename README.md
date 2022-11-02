This repository is to demonstrate adding functions to themes.

It follows along the [Building a Theme](https://www.gatsbyjs.com/tutorial/building-a-theme/) tutorial steps up until "Add static data to a theme."

To have Gatsby Functions work properly with themes, you need to follow the namespacing guidelines outlined [here](https://www.gatsbyjs.com/docs/reference/functions/getting-started/#namespacing).

So for this repository, the function needs to be created here: `gatsby-theme-functions/src/api/gatsby-theme-functions/hello-world.js`

As an example, we have shadowed a function which is available under `site/src/api/gatsby-theme-functions/hello-world.js` however, if you do not plan on needing to shadow a function, the `/src/api/gatsby-theme-functions/hello-world.js` path is **not** needed under the `site` folder for functions to work properly.
