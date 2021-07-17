//@ts-check

import Link from 'next/link'
import { useState } from 'react'

const CreateSiswa = () =>{

    const [judul,setJudul] = useState('');
    const [deskripsi,setDeskripsi] = useState('');
    const [tanggalrilis,setTanggalrilis] = useState('');
    const [foto,setFoto]=useState(null);
    const [selectedFiles,setSelectedFile] = useState('');
    const [file,setFile] = useState('')


    const onSelectImage= (e) => {
        if(!e.target.files || e.target.files.length === 0){
            setSelectedFile(undefined)
            return
        }
        const _file = e.target.files[0];
        const reader = new FileReader()
        reader.onload=function(){
            setFile(_file);
            setFoto(reader.result);
        }
        reader.readAsDataURL(_file)

    }

    async function submitHandler(e){
        e.preventDefault()
        try{
            const res = await fetch("http://localhost:3000/api/create-berita",{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded'
                    // 'Content-Type' : 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify({
                    judul,
                    deskripsi,
                    tanggalrilis,
                    foto
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
                   <h5 className="text-light">TAMBAH BERITA</h5>
            </div>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-12">
                        <form onSubmit={submitHandler}>
                            <div>
                                <Link href="databerita">
                                    <a className="btn btn-primary">KEMBALI</a>
                                </Link>
                            </div>
                            <div className="py-2">
                                <div className="">
                                    <label htmlFor="upload gambar">
                                        
                                    <img src={foto} className ="rounded-circle" alt="pilih foto" style={{background: "grey",width:'100px',height:'100px'}} />
                                    </label>
                                    <input type="file"id="uploadGambar" style={{display:'block'}} onChange={onSelectImage} />
                                </div>
                                <div className="form-group py-2">
                                    <label htmlFor="nama">JUDUL</label>
                                    <input 
                                    id="judul"
                                    type="text"
                                    value={judul} 
                                    onChange={(e)=>setJudul(e.target.value)}
                                    placeholder="masukkan judul"
                                    className="form-control" />
                                </div>
                                <div className="form-group py-2">
                                    <label htmlFor="nama">DESKRIPSI</label>
                                    <input 
                                    id="deskripsi"
                                    type="text"
                                    value={deskripsi} 
                                    onChange={(e)=>setDeskripsi(e.target.value)}
                                    placeholder="masukkan Deskripsi"
                                    className="form-control" />
                                </div>
                                <div className="form-group py-2">
                                    <label htmlFor="nama">TANGGAL RILIS</label>
                                    <input 
                                    id="tanggalrilis"
                                    type="date" 
                                    value={tanggalrilis} 
                                    onChange={(e)=>setTanggalrilis(e.target.value)}
                                    placeholder="masukkan tanggal rilis"
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

export default CreateSiswa 