import UserLayout from "../../component/user/UserLayout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faMapMarker } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faPhone } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faWhatsapp } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faFacebook } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

UserLayout

const hubungi_kami =  () =>{
    return (
        <div>
            <UserLayout>
                <div className="container">
                    <div className="row pt-4">
                        <div className="col-md-12">
                        </div>
                        <div className="col-md-4">
                            <h3><b>HUBUNGI </b> KAMI</h3>
                            <h5>ALAMAT</h5>
                            <FontAwesomeIcon icon={faMapMarker}></FontAwesomeIcon>
                             rogojampi<br></br>
                            <h5>TELEPON</h5>
                            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                            082225743242342
                            <h5>whatsaap</h5>
                            <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
                            082225743242342
                            <h5>facebook</h5>
                            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                            tkit_aluswah5rgj
                            <h5>email</h5>
                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                            tkitaluswah5rgj@gmail.com
                        </div>
                        <div className="col-md-7">
                        <h3><b>KIRIM </b> PESAN </h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Nama"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email"/>
                                </div>
                            </div>
                            <div className="col-md-12 pt-4">
                                <div className="form-group">
                                    <textarea className="form-control" style={{height:"400px"}} placeholder="Pesan"></textarea>
                                </div>
                            </div>
                            <div className="col-md-12 pt-4">
                                <button className="btn btn-success  float-end">SIMPAN</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </UserLayout>
        </div>
    )
}

export default hubungi_kami