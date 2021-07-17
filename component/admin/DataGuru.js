//@ts-check
import {useDataGuru} from '../../lib/swr-fetch'
import Link from "next/link"
import {mutate} from 'swr'
import Router from "next/router"


const DataGuru = () =>{

    const {data,error} = useDataGuru();
    if(error){
        return <div>error loading</div>
    }
    if(!data){
        return <div>sedang loading</div>
    }

    // function hapus
    async function hapusGuru(id){
        let res = await fetch(`/api/hapus-guru?id_guru=${id}`,{method:'DELETE'})
        let json = await res.json();
        if(!res.ok) throw Error(json.message)
        mutate('/api/hapus-guru')
        alert('Data telah terhapus')
        Router.push('/admin/dataguru')

    }




    return (
        <div>
            <div className="container-fluid bg-secondary pt-2 py-1">
                   <h5 className="text-light">DATA GURU</h5>
            </div>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-12">
                        <div className="my-2">
                            <Link href={`/admin/createguru`}>
                                <a className="btn btn-primary float-end">TAMBAH GURU</a>
                            </Link>
                        </div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama</th>
                                    <th>Alamat</th>
                                    <th>Opsi</th>
                                </tr>
                            </thead>
                            <tbody>
                                { data.map((guru,index) => [
                                    <tr>
                                    <td></td>
                                    <td>{guru.nama}</td>
                                    <td>{guru.alamat}</td>
                                    <td>
                                        <button value={guru.id_guru} onClick={(e)=>hapusGuru(e.target.value)} className="btn btn-danger btn-sm">hapus</button>
                                        <Link href={`/admin/updateguru?id=${guru.id_guru}&nama=${guru.nama}&alamat=${guru.alamat}&tempatlahir=${guru.tempat_lahir}&tanggallahir=${guru.tanggal_lahir}`}><a className="btn btn-warning btn-sm">edit</a></Link>
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


export default DataGuru