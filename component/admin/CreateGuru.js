//@ts-check

import Link from 'next/link'
import { useState } from 'react'

const CreateGuru = () =>{

    const [nama,setNama] = useState('');
    const [alamat,setAlamat] = useState('');
    const [tempatlahir,setTempatlahir] = useState('');
    const [tanggallahir,setTanggallahir] = useState('');

    async function submitHandler(e){
        e.preventDefault()
        try{
            const res = await fetch("http://localhost:3000/api/create-guru",{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded'
                    // 'Content-Type' : 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify({
                    nama,
                    alamat,
                    tempatlahir,
                    tanggallahir
                })

                 
            })
            const json= await res.json()
            if(!res.ok) throw Error (json.message)
            alert('penambahan data sukses')
        }catch(e){
            throw Error(e.message)
        }
    }

    return (
        <div>
            <div className="container-fluid bg-secondary pt-2 py-1">
                   <h5 className="text-light">TAMBAH GURU</h5>
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
                                    <label htmlFor="nama">NAMA</label>
                                    <input 
                                    id="nama"
                                    type="text"
                                    value={nama} 
                                    onChange={(e)=>setNama(e.target.value)}
                                    placeholder="masukkan nama lengkap"
                                    className="form-control" />
                                </div>
                                <div className="form-group py-2">
                                    <label htmlFor="nama">ALAMAT</label>
                                    <input 
                                    id="alamat"
                                    type="text" 
                                    value={alamat} 
                                    onChange={(e)=>setAlamat(e.target.value)}
                                    placeholder="masukkan alamat lengkap"
                                    className="form-control" />
                                </div>
                                <div className="form-group py-2">
                                    <label htmlFor="nama">TEMPAT LAHIR</label>
                                    <input 
                                    id="tempatlahir"
                                    type="text" 
                                    value={tempatlahir} 
                                    onChange={(e)=>setTempatlahir(e.target.value)}
                                    placeholder="masukkan tempat lahir"
                                    className="form-control" />
                                </div>
                                <div className="form-group py-2">
                                    <label htmlFor="nama">TANGGAL LAHIR</label>
                                    <input 
                                    id="tanggallahir"
                                    type="date" 
                                    value={tanggallahir} 
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

export default CreateGuru 