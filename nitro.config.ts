//https://nitro.unjs.io/config
export default defineNitroConfig({
    errorHandler: "./error",
    publicAssets: [
        {
            baseURL: "images",
            dir: "public/images",
            maxAge: 60 * 60 * 24 * 7, // 7 days
        },
    ],
    minify: true,
    //compressPublicAssets: true,
    //routeRules: {
    //    '/blog/**': { swr: true },
    //    '/blog/**': { swr: 600 },
    //    '/blog/**': { static: true },
    //    '/blog/**': { cache: { /* cache options*/ } },
    //    '/assets/**': { headers: { 'cache-control': 's-maxage=0' } },
    //    '/api/v1/**': { cors: true, headers: { 'access-control-allow-methods': 'GET' } },
    //    '/old-page': { redirect: '/new-page' }, // uses status code 307 (Temporary Redirect)
    //      '/old-page2': { redirect: { to:'/new-page2', statusCode: 301 } },
    //      '/proxy/example': { proxy: 'https://example.com' },
    //      '/proxy/**': { proxy: '/api/**' },
    //}

});
