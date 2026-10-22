// The three sites, shared by the index (row, Sites grid) and /work/sites/.
// `summary` is the index row's "What it is"; `line` the one-line description;
// `stack` is read from each site's repo and shows only on /work/sites/.
export const sites = [
  {
    name: "General Wear",
    anchor: "general-wear",
    year: "2026",
    summary: "Embroidery studio store",
    alt: "General Wear's homepage: the studio's round logo and menu above a photo of embroidery machines in front of a wall of thread spools, with Embroidery and About Us buttons.",
    line: "Shopify store and quote pipeline for an embroidery studio in Greenpoint.",
    stack: "Shopify's Studio theme customised with the studio's own sections and schema, plus a quote form that posts submissions into Ptchwrk.",
    href: "https://www.generalwearinc.com",
    text: "generalwearinc.com",
  },
  {
    name: "The Bushwick",
    anchor: "the-bushwick",
    year: "2026",
    summary: "Dispensary website, Bushwick",
    alt: "The Bushwick homepage: the graffiti-style title The Bushwick Dispensary and an Order Now button over a video still of an L train pulling into Halsey Street station.",
    line: "Site for a dispensary in Bushwick, with online ordering.",
    stack: "Next.js 16 on Cloudflare Workers, with a live menu from the store's Flowhub point of sale and pickup and delivery orders sent to Flowhub.",
    href: "https://thebushwicknyc.com",
    text: "thebushwicknyc.com",
  },
  {
    name: "Hudson Haze",
    anchor: "hudson-haze",
    year: "2026",
    summary: "Dispensary site, East New York",
    alt: "Hudson Haze homepage: the Hudson Haze Cannabis logo on black, with Shop Menu and Visit Us buttons.",
    line: "Site for a dispensary in East New York, with a menu and ordering through Dutchie.",
    stack: "Next.js 16 on Cloudflare Workers, with ordering through Dutchie's embedded menu and a direct Dutchie link when the embed is blocked.",
    href: "https://hudsonhaze.com",
    text: "hudsonhaze.com",
  },
];
