import useSWR from 'swr'

async function fetcher(url){
    const res = await fetch(url);
    return res.json();
}

export const useDataGuru = ()=>{
    // url
    const url = "http://localhost:3000/api/dataGuru";
    // return data end error
    const {data,error}= useSWR(url,fetcher);

    return {data,error}
}

export const useDataSiswa = ()=>{
    // url
    const url = "http://localhost:3000/api/dataSiswa";
    // return data end error
    const {data,error}= useSWR(url,fetcher);

    return {data,error}
}

export const useDataAlumni = ()=>{
    // url
    const url = "http://localhost:3000/api/dataAlumni";
    // return data end error
    const {data,error}= useSWR(url,fetcher);

    return {data,error}
}

export const useDataBerita = ()=>{
    // url
    const url = "http://localhost:3000/api/dataBerita"
    // return data end error
    const {data,error} = useSWR(url,fetcher);

    return {data,error}
}

export const useDataForum = ()=>{
    // url
    const url = "http://localhost:3000/api/dataForum"
    // return data end error
    const {data,error} = useSWR(url,fetcher);

    return {data,error}
}

export const useDataBeritaDetail = (id_berita)=>{
    // url
    const url = `http://localhost:3000/api/datadetailberita?id_berita=${id_berita}`
    // return data end error
    const {data,error} = useSWR(url,fetcher);

    return {data,error}
}
