//@ts-check
import {useDataBerita} from '../../lib/swr-fetch'
import Link from "next/link"
import {mutate} from 'swr'
import Router from "next/router"


const DataBerita = () =>{

    const {data,error} = useDataBerita();
    if(error){
        return <div>error loading</div>
    }
    if(!data){
        return <div>sedang loading</div>
    }

    // function hapus
    async function hapusBerita(id){
        let res = await fetch(`/api/hapus-berita?id_berita=${id}`,{method:'DELETE'})
        let json = await res.json();
        if(!res.ok) throw Error(json.message)
        mutate('/api/hapus-berita')
        alert('Data telah terhapus')
        Router.push('/admin/databerita')

    }




    return (
        <div>
            <div className="container-fluid bg-secondary pt-2 py-1">
                   <h5 className="text-light">DATA BERITA</h5>
            </div>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-12">
                        <div className="my-2">
                            <Link href={`/admin/createberita`}>
                                <a className="btn btn-primary float-end">TAMBAH BERITA</a>
                            </Link>
                        </div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>judul</th>
                                    <th>Opsi</th>
                                </tr>
                            </thead>
                            <tbody>
                                { data.map((berita,index) => [
                                    <tr>
                                    <td></td>
                                    <td>{berita.judul}</td>
                                    <td>
                                        <button value={berita.id_berita} onClick={(e)=>hapusBerita(e.target.value)} className="btn btn-danger btn-sm">hapus</button>
                                        <Link href={`/admin/updateberita?id=${berita.id_berita}&judul=${berita.judul}&deskripsi=${berita.deskripsi}&tanggalrilis=${berita.tgl_rilis}`}><a className="btn btn-warning btn-sm">edit</a></Link>
                                    </td>
                                </tr>
                                ])}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default DataBerita