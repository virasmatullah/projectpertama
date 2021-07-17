//@ts-check
import {useDataForum} from '../../lib/swr-fetch'
import Link from "next/link"
import {mutate} from 'swr'
import Router from "next/router"


const DataForum = () =>{

    const {data,error} = useDataForum();
    if(error){
        return <div>error loading</div>
    }
    if(!data){
        return <div>sedang loading</div>
    }

    // function hapus
    async function hapusForum(id){
        let res = await fetch(`/api/hapus-forum?id_forum=${id}`,{method:'DELETE'})
        let json = await res.json();
        if(!res.ok) throw Error(json.message)
        mutate('/api/hapus-Forum')
        alert('Data telah terhapus')
        Router.push('/admin/dataforum')

    }




    return (
        <div>
            <div className="container-fluid bg-secondary pt-2 py-1">
                   <h5 className="text-light">DATA FORUM</h5>
            </div>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-12">
                        <div className="my-2">
                        </div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama</th>
                                    <th>No Telepon</th>
                                    <th>Saran</th>
                                    <th>Opsi</th>
                                </tr>
                            </thead>
                            <tbody>
                                { data.map((forum,index) => [
                                    <tr>
                                    <td></td>
                                    <td>{forum.nama}</td>
                                    <td>{forum.no_telepon}</td>
                                    <td>{forum.pesan}</td>
                                    <td>
                                        <button value={forum.id_forum} onClick={(e)=>hapusForum(e.target.value)} className="btn btn-danger btn-sm">hapus</button>
                                        <Link href={`https://api.whatsapp.com/send?phone=${forum.no_telepon}&text=coba`}><a className="btn btn-warning btn-sm" target="_blank" rel="noopener noreferrer">balas via wa</a></Link>
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


export default DataForum