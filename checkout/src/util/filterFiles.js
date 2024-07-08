export default function filterFiles(files, type) {
    let paths = [] 
    for (let file of files) {
        if (file.endsWith('.' + type)) {
            paths.push({params: {slug: file.substring(0, file.length - type.length - 1)}})
        }
    }
    return paths;
}