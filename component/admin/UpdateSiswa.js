//@ts-check
import Router, {useRouter} from 'next/router'
import Link from 'next/link'
import { useEffect,useState } from 'react'

const UpdateGuru = () =>{
    const [_id,setId] = useState('');
    const [_nama,setNama] = useState('');
    const [_kelas,setKelas] = useState('');
    const [_alamat,setAlamat] = useState('');
    const [_tempatlahir,setTempatlahir] = useState('');
    const [_tanggallahir,setTanggallahir] = useState('');
    const [_status,setStatus] = useState('');
    const [_tahunmasuk,setTahunmasuk] = useState('');

    // mengambil data yang dikirim melalui router
    const router = useRouter();
    const {id,nama,kelas,alamat,tempatlahir,tanggallahir,status,tahunmasuk} =router.query;

    useEffect(()=>{
        if(typeof id == 'string'){
            setId(id)
        }
        if(typeof nama == 'string'){
            setNama(nama)
        }
        if(typeof kelas == 'string'){
            setKelas(kelas)
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
        if(typeof status == 'string'){
            setStatus(status)
        }
        if(typeof tahunmasuk == 'string'){
            setTahunmasuk(tahunmasuk)
        }
    },[nama,kelas,alamat,tempatlahir,tanggallahir,status,tahunmasuk],)

    async function submitHandler(e){
        e.preventDefault()
        try{
            const res= await fetch('/api/update-siswa',{
                method:"PATCH",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id:_id,
                    nama:_nama,
                    kelas:_kelas,
                    alamat:_alamat,
                    tempatlahir:_tempatlahir,
                    tanggallahir: _tanggallahir,
                    status: _status,
                    tahunmasuk: _tahunmasuk
                })
            })
            const json= await res.json()
            if(!res.ok) throw Error (json.message)
            alert('edit data sukses')
            Router.push("/admin/datasiswa")
        }catch(e){
            throw Error(e.message)
        }
    }

    return (
        <div>
            <div className="container-fluid bg-secondary pt-2 py-1">
                   <h5 className="text-light">UPDATE SISWA</h5>
            </div>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-12">
                        <form onSubmit={submitHandler}>
                            <div>
                                <Link href="datasiswa">
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
                                    <label htmlFor="nama">KELAS</label>
                                    <input 
                                    id="kelas"
                                    type="text"
                                    value={_kelas} 
                                    onChange={(e)=>setKelas(e.target.value)}
                                    placeholder="masukkan kelas lengkap"
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
                                <div className="mb-3">
                                    <label htmlFor="program pilihan" className="fs-5">Program Pilihan</label>
                                    <select  id="status" className="form-select"
                                    value={_status} onChange={(e)=>setStatus(e.target.value)}
                                    >
                                        <option  value="Siswa Aktif" >Siswa Aktif</option>
                                        <option value="Alumni">Alumni</option>
                                    </select>
                                </div>
                                <div className="form-group py-2">
                                    <label htmlFor="nama">TAHUN MASUK</label>
                                    <input 
                                    id="tahunmasuk"
                                    type="text" 
                                    value={_tahunmasuk} 
                                    onChange={(e)=>setTahunmasuk(e.target.value)}
                                    placeholder="masukkan tahun masuk"
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