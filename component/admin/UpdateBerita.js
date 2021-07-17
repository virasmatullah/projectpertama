//@ts-check
import Router, {useRouter} from 'next/router'
import Link from 'next/link'
import { useEffect,useState } from 'react'

const UpdateBerita = () =>{

    const [_id,setId] = useState('');
    const [_judul,setJudul] = useState('');
    const [_deskripsi,setDeskripsi] = useState('');
    const [_tanggalrilis,setTanggalrilis] = useState('');
    const [_foto,setFoto]= useState(null);
    const [selectedFiles,setSelectedFile] = useState('');
    const [file,setFile] = useState('')

    // mengambil data yang dikirim melalui router
    const router = useRouter();
    const {id,judul,deskripsi,tanggalrilis} =router.query;

    useEffect(()=>{
        if(typeof id == 'string'){
            setId(id)
        }
        if(typeof judul == 'string'){
            setJudul(judul)
        }
        if(typeof deskripsi == 'string'){
            setDeskripsi(deskripsi)
        }
        if(typeof tanggalrilis == 'string'){
            setTanggalrilis(tanggalrilis)
        }
        
    },[judul,deskripsi,tanggalrilis],)


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
            const res= await fetch('/api/update-berita',{
                method:"PATCH",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id:_id,
                    judul:_judul,
                    deskripsi:_deskripsi,
                    tanggalrilis:_tanggalrilis,
                    foto: _foto
                })
            })
            const json= await res.json()
            if(!res.ok) throw Error (json.message)
            alert('edit data sukses')
            Router.push("/admin/databerita")
        }catch(e){
            throw Error(e.message)
        }
    }

    return (
        <div>
            <div className="container-fluid bg-secondary pt-2 py-1">
                   <h5 className="text-light">EDIT BERITA</h5>
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
                                    <img src={_foto} className ="rounded-circle" alt="pilih foto" style={{background: "grey",width:'100px',height:'100px'}} />
                                    </label>
                                    <input type="file" id="uploadGambar" style={{display:'block'}} onChange={onSelectImage} />
                                </div>
                                <div className="form-group py-2">
                                    <input 
                                    id="id"
                                    type="hidden"
                                    value={_id} 
                                    onChange={(e)=>setId(e.target.value)}
                                    placeholder="masukkan nama lengkap"
                                    className="form-control" />
                                </div>
                                <div className="form-group py-2">
                                    <label htmlFor="nama">JUDUL</label>
                                    <input 
                                    id="judul"
                                    type="text"
                                    value={_judul} 
                                    onChange={(e)=>setJudul(e.target.value)}
                                    placeholder="masukkan judul"
                                    className="form-control" />
                                </div>
                                <div className="form-group py-2">
                                    <label htmlFor="nama">DESKRIPSI</label>
                                    <input 
                                    id="deskripsi"
                                    type="text"
                                    value={_deskripsi} 
                                    onChange={(e)=>setDeskripsi(e.target.value)}
                                    placeholder="masukkan Deskripsi"
                                    className="form-control" />
                                </div>
                                <div className="form-group py-2">
                                    <label htmlFor="nama">TANGGAL RILIS</label>
                                    <input 
                                    id="tanggalrilis"
                                    type="date" 
                                    value={_tanggalrilis} 
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

export default UpdateBerita 