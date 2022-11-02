// This is following the namespacing in this article: https://www.gatsbyjs.com/docs/reference/functions/getting-started/#namespacing
export default function handler(req, res) {
    res.status(200).json({ hello: `world` })
  }