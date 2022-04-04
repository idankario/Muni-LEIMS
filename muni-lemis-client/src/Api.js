const HOST='localhost'
const PROTOCOL='http'
const PORT=3000
const API_URL = `${PROTOCOL}://${HOST}:${PORT}`

export async function uploadImage(file, area) {
    var data = new FormData()
    data.append('file', file)
    data.append('area', area)
    let res = await fetch(`${API_URL}/imgupload/upload`, {method: 'POST', body: data})
    // res = await res.json()
    return res
}



