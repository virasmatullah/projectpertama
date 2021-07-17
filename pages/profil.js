import { useState } from "react";


const profil = () =>{
    const [databerita,setdataberita]= useState(
        [
            {
                judul           :"tkit al uswah 5 rogojampi mewarnai tingkat kecamatan",
                tanggal_berita  : "20-06-2020",
                deskripsi       :" prestasi yang sangat membanggakan"
            },
            {
                judul       :"smengikuti lomba mewarnai" ,
                tanggal_berita  : "20-06-2021",
                deskripsi   :" prestasi yang sangat membanggakan"
            }
        ]
    );

    return (
        <div>
            <div className="container">
                <div className="row pt-4">
                    <div className="col-md-12">
                        <h4>Profil</h4>
                    </div>
                    {databerita.map((dtberita,index)=>
                        <div className="col-md-3">
                            <div className="card" >
                                <img src="..." className="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">BERITA</h5>
                                    <p class="card-text">{dtberita.judul}</p>
                                    <a href="#" className="btn btn-primary">lihat detail</a>
                                </div>
                            </div>
                        </div>
                    )}
                    
                </div>
            </div>
        </div>
    )
}

export default profil