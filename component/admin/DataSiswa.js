//@ts-check
import {useDataSiswa} from '../../lib/swr-fetch'
import Link from "next/link"
import {mutate} from 'swr'
import Router from "next/router"


const DataSiswa = () =>{

    const {data,error} = useDataSiswa();
    if(error){
        return <div>error loading</div>
    }
    if(!data){
        return <div>sedang loading</div>
    }

    // function hapus
    async function hapusSiswa(id){
        let res = await fetch(`/api/hapus-siswa?id_guru=${id}`,{method:'DELETE'})
        let json = await res.json();
        if(!res.ok) throw Error(json.message)
        mutate('/api/hapus-siswa')
        alert('Data telah terhapus')
        Router.push('/admin/datasiswa')

    }




    return (
        <div>
            <div className="container-fluid bg-secondary pt-2 py-1">
                   <h5 className="text-light">DATA SISWA</h5>
            </div>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-12">
                        <div className="my-2">
                            <Link href={`/admin/createsiswa`}>
                                <a className="btn btn-primary float-end">TAMBAH SISWA</a>
                            </Link>
                        </div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama</th>
                                    <th>Alamat</th>
                                    <th>Kelas</th>
                                    <th>Status</th>
                                    <th>Tahun Masuk</th>
                                    <th>Opsi</th>
                                </tr>
                            </thead>
                            <tbody>
                                { data.map((siswa,index) => [
                                    <tr>
                                    <td></td>
                                    <td>{siswa.nama}</td>
                                    <td>{siswa.alamat}</td>
                                    <td>{siswa.kelas}</td>
                                    <td>{siswa.status}</td>
                                    <td>{siswa.tahun_masuk}</td>
                                    <td>
                                        <button value={siswa.id_siswa} onClick={(e)=>hapusSiswa(e.target.value)} className="btn btn-danger btn-sm">hapus</button>
                                        <Link href={`/admin/updatesiswa?id=${siswa.id_siswa}&nama=${siswa.nama}&kelas=${siswa.kelas}&alamat=${siswa.alamat}&tempatlahir=${siswa.tempat_lahir}&tanggallahir=${siswa.tanggal_lahir}&status=${siswa.status}&tahunmasuk=${siswa.tahun_masuk}`}><a className="btn btn-warning btn-sm">edit</a></Link>
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


export default DataSiswa