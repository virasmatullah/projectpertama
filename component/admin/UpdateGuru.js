//@ts-check
import Router, {useRouter} from 'next/router'
import Link from 'next/link'
import { useEffect,useState } from 'react'

const UpdateGuru = () =>{
    
    const [_id,setId] = useState('');
    const [_nama,setNama] = useState('');
    const [_alamat,setAlamat] = useState('');
    const [_tempatlahir,setTempatlahir] = useState('');
    const [_tanggallahir,setTanggallahir] = useState('');

    // mengambil data yang dikirim melalui router
    const router = useRouter();
    const {id,nama,alamat,tempatlahir,tanggallahir} =router.query;

    useEffect(()=>{
        if(typeof id == 'string'){
            setId(id)
        }
        if(typeof nama == 'string'){
            setNama(nama)
        }
        if(typeof alamat == 'string'){
            setAlamat(alamat)
        }
        if(typeof tempatlahir == 'string'){
            setTempatlahir(tempatlahir)
        }
        if(typeof tanggallahir == 'string'){
            setTanggallahir(tanggallahir)
        }
    },[nama,alamat,tempatlahir,tanggallahir],)

    async function submitHandler(e){
        e.preventDefault()
        try{
            const res= await fetch('/api/update-guru',{
                method:"PATCH",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id:_id,
                    nama:_nama,
                    alamat:_alamat,
                    tempatlahir:_tempatlahir,
                    tanggallahir:_tanggallahir
                })
            })
            const json= await res.json()
            if(!res.ok) throw Error (json.message)
            alert('edit data sukses')
            Router.push("/admin/dataguru")
        }catch(e){
            throw Error(e.message)
        }
    }

    return (
        <div>
            <div className="container-fluid bg-secondary pt-2 py-1">
                   <h5 className="text-light">UPDATE GURU</h5>
            </div>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-12">
                        <form onSubmit={submitHandler}>
                            <div>
                                <Link href="dataguru">
                                    <a className="btn btn-primary">KEMBALI</a>
                                </Link>
                            </div>
                            <div className="py-2">
                                <div className="form-group py-2">
                                    <label htmlFor="nama">ID</label>
                                    <input 
                                    id="id"
                                    type="text"
                                    value={_id} 
                                    onChange={(e)=>setId(e.target.value)}
                                    placeholder="masukkan nama lengkap"
                                    className="form-control" />
                                </div>
                                <div className="form-group py-2">
                                    <label htmlFor="nama">NAMA</label>
                                    <input 
                                    id="nama"
                                    type="text"
                                    value={_nama} 
                                    onChange={(e)=>setNama(e.target.value)}
                                    placeholder="masukkan nama lengkap"
                                    className="form-control" />
                                </div>
                                <div className="form-group py-2">
                                    <label htmlFor="nama">ALAMAT</label>
                                    <input 
                                    id="alamat"
                                    type="text" 
                                    value={_alamat} 
                                    onChange={(e)=>setAlamat(e.target.value)}
                                    placeholder="masukkan alamat lengkap"
                                    className="form-control" />
                                </div>
                                <div className="form-group py-2">
                                    <label htmlFor="nama">TEMPAT LAHIR</label>
                                    <input 
                                    id="tempatlahir"
                                    type="text" 
                                    value={_tempatlahir} 
                                    onChange={(e)=>setTempatlahir(e.target.value)}
                                    placeholder="masukkan tempat lahir"
                                    className="form-control" />
                                </div>
                                <div className="form-group py-2">
                                    <label htmlFor="nama">TANGGAL LAHIR</label>
                                    <input 
                                    id="tanggallahir"
                                    type="date" 
                                    value={_tanggallahir} 
                                    onChange={(e)=>setTanggallahir(e.target.value)}
                                    placeholder="masukkan tanggal lahir"
                                    className="form-control" />
                                </div>
                                <div>
                                    <button type="submit" className="btn btn-primary">SIMPAN</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default UpdateGuru 