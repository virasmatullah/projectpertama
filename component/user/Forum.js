//@ts-check

import Link from 'next/link'
import { useState } from 'react'

const Forum = () =>{
    const [nama,setNama] = useState('');
    const [alamat,setAlamat] = useState('');
    const [no_telepon,setNo_telepon] = useState('');
    const [pesan,setPesan] = useState('');

    async function submitHandler(e){
        e.preventDefault()
        try{
            const res = await fetch("http://localhost:3000/api/create-forum",{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded'
                    // 'Content-Type' : 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify({
                    nama,
                    alamat,
                    no_telepon,
                    pesan
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
            <div className="container py-5">
                <div className="row justify-content-md-center">
                    <div className="col-md-6">
                        <div className="card py-2 px-4">
                            <div className="card-body">
                                <div className="text-center">
                                    <h5>FORM <b>FORUM</b></h5>
                                </div>
                                <div>
                                    <form onSubmit={submitHandler}>
                                        <div className="form-group py-1">
                                            <label htmlFor="">Nama</label>
                                            <input 
                                             type="text"
                                             id="nama"
                                             value={nama} 
                                             onChange={(e)=>setNama(e.target.value)}
                                             className="form-control"
                                             placeholder="masukkan nama" />
                                        </div>
                                        <div className="form-group py-1">
                                            <label htmlFor="">Alamat</label>
                                            <input 
                                             type="text"
                                             id="alamat"
                                             value={alamat} 
                                             onChange={(e)=>setAlamat(e.target.value)}
                                             className="form-control"
                                             placeholder="masukkan Alamat" />
                                        </div>
                                        <div className="form-group py-1">
                                            <label htmlFor="">No Telepon</label>
                                            <input 
                                             type="text"
                                             id="no_telepon"
                                             value={no_telepon} 
                                             onChange={(e)=>setNo_telepon(e.target.value)}
                                             className="form-control"
                                             placeholder="masukkan nomor telepon" />
                                        </div>
                                        <div className="form-group py-1">
                                            <label htmlFor="">Pesan</label>
                                            <textarea 
                                            id="pesan"
                                            value={pesan} 
                                            onChange={(e)=>setPesan(e.target.value)}
                                            className="form-control" 
                                            placeholder="masukkan pesan">

                                            </textarea>
                                        </div>
                                        <div className="pt-3">
                                            <button type="submit" className="btn btn-success float-end">SIMPAN</button>
                                        </div>
                                    </form>
                                    
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Forum