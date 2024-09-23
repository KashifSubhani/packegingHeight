const fs = require("fs");
const { createClient } = require("next-sanity");

const client = createClient({
    projectId: "hd54r7bn",
    dataset: "production",
    apiVersion: "2022-03-07",
    useCdn: true
});

const SITE_URL = "https://packagingheight.com/";

// const sanityClient = client(config);

async function generateSitemap() {
    const query = `*[ _type == "product"]{
    "slug": slug.current,
    _updatedAt
  }`;
    const queryForCategory = `*[ _type == "category"]{
      "slug": slug.current,
    _updatedAt,
    products[]->{
        "slug": slug.current,
        _updatedAt
    }
  }`;
    const documents = await client.fetch(query);
    const documentsForCategory = await client.fetch(queryForCategory);

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
          <loc>https://packagingheight.com</loc>
          <lastmod>2023-05-11T19:00:11+00:00</lastmod>
          <priority>1.00</priority>
      </url>
      <url>
          <loc>${SITE_URL}contact-us/</loc>
          <lastmod>2023-05-11T19:00:11+00:00</lastmod>
          <priority>1.00</priority>
      </url>
      <url>
          <loc>${SITE_URL}all-products/</loc>
          <lastmod>2023-05-11T19:00:11+00:00</lastmod>
          <priority>1.00</priority>
      </url>
      ${documents.map((item) => `
        <url>
          <loc>${SITE_URL}${item.slug}/</loc>
          <lastmod>${item._updatedAt}</lastmod>
          <priority>0.80</priority>
        </url>
      `).join("")}
      ${documentsForCategory.map((item) => (`
        <url>
            <loc>${SITE_URL}category/${item.slug}/</loc>
            <lastmod>${item._updatedAt}</lastmod>
            <priority>0.80</priority>
        </url>
      `)).join("")}
    </urlset>
  `;
    fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();