import { html } from 'common-tags';
import { allBlogs, allWorks } from 'contentlayer/generated';

export const GET = async () => {
    const works = allWorks.filter(work => work.published).map(work => html`
        <url>
            <loc>https://www.joshferrell.me/work/${work.slug}</loc>
            <lastmod>${work.date}</lastmod>
            <priority>0.7</priority>
        </url>
    `).join('\n');
    const blogs = allBlogs.filter(blog => blog.published).map(blog => html`
        <url>
            <loc>https://www.joshferrell.me/work/${blog.slug}</loc>
            <lastmod>${blog.date}</lastmod>
            <priority>0.7</priority>
        </url>
    `).join('\n');

    const sitemap = html`
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset
            xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        
            <url>
                <loc>https://www.joshferrell.me/</loc>
                <lastmod>2023-03-08T05:25:07+00:00</lastmod>
                <priority>1.00</priority>
            </url>
            <url>
                <loc>https://www.joshferrell.me/work</loc>
                <lastmod>2023-03-08T05:25:07+00:00</lastmod>
                <priority>0.80</priority>
            </url>
            <url>
                <loc>https://www.joshferrell.me/blog</loc>
                <lastmod>2023-03-08T05:25:07+00:00</lastmod>
                <priority>0.80</priority>
            </url>
            <url>
                <loc>https://www.joshferrell.me/about</loc>
                <lastmod>2023-03-08T05:25:07+00:00</lastmod>
                <priority>0.80</priority>
            </url>
            <url>
                <loc>https://www.joshferrell.me/contact</loc>
                <lastmod>2023-03-08T05:25:07+00:00</lastmod>
                <priority>0.80</priority>
            </url>
            ${blogs}
            ${works}
        </urlset>
    `;


    return new Response(sitemap, {
        headers: {
            'content-type': 'application/xml'
        }
    });
}

