async function getVans(path){
    const res = await fetch(`/api/${path}`)
    if(!res.ok){
        throw{
            message:'Failed to fetch Vans',
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

async function getVan(id){
    const res = await  fetch(`/api/vans/${id}`)
    const data = await res.json()
    return data.van
}

export {getVans,getVan}