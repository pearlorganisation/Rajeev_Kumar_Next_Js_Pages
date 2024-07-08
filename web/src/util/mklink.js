export default function mkLink(url) {
    if (process.env.NODE_ENV == 'production') {
        return url + '.html';
    }
    return url
}