export const GET = async() => new Response(`
    User-agent: *
    Allow: /

    Sitemap: https://www.joshferrell.me/sitemap.xml
`, {
    headers: {
        'content-type': 'text/plain'
    }
}); 