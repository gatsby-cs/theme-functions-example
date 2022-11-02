// This is *not* needed to have the functions work, but is an example of how you can shadow with functions if desired
export default function handler(req, res) {
    res.status(200).json({ goodbye: `world` })
  }