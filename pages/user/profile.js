import LayoutUsers from "../../component/user/UserLayout";

const Profile = () =>{
    return ( 
        <LayoutUsers>
        <div className="container">
            <div className="row pt-4">
                <div className="col-md-12">
                </div>
                <div>
                    <div class="p-5 mt-1 bg-success rounded-4" style={{height:"1000px"}}>
                        <div class="container-fluid py-1 ">
                            <h1 class="display-5 fw-bold text-light">PROFIL TK AL-USWAN 5 rogojampi- Banyuwangi</h1>
                            <div className="text-center">
                                <p ><b> nama taman kanak kanak :</b></p>
                                <p >TKIT AL USWAH 5 </p>
                                <p ><b>npsn :</b></p>
                                <p >367336637373737</p>
                                <p ><b>Alamat Sekolah :</b></p>
                                <p >Perum Gpi Blok Nuri 1 Pengatigan Rogojampi</p>
                                <p ><b>status :</b></p>
                                <p >A</p>
                                <p ><b>Desa :</b></p>
                                <p >Pengatigan</p>
                                <p ><b>Kecamatan :</b></p>
                                <p >Rogojampi</p>
                                <p ><b>Kabupaten</b></p>
                                <p >Banyuwangi</p>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
        </LayoutUsers>
        
    )
}

export default Profile