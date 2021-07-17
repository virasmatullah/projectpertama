//@ts-check
import Link from "next/link"


const NavBar = () =>{
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 px-3 pt-2 pb-0">
                        <div style={{display:"inline-block",position:"relative",top:"-15px"}} >
                            <img  src="https://1.bp.blogspot.com/-urA4m9JCtjQ/YPJpxKTFCYI/AAAAAAAADIE/UYBGs4MBApQyh0EACTKgggbmAuM1ZrphACLcBGAsYHQ/s320/logo%2Bal%2Buswah9999.png" className="img-fluid" style={{width:"50px"}} alt="" />
                        </div>
                        <div className="px-3" style={{display:"inline-block"}}>
                            <span className="pl-3"> 
                            <span style={{fontSize:"24px",fontWeight:'bold'}}>TK IT AL USWAH </span><br/>
                            Rogojampi - Banyuwangi
                            </span>
                        </div>
                        
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container">
                    {/* <a className="navbar-brand" href="#">
                        <img src="https://2.bp.blogspot.com/-hK8ghhQjJvY/VxuT0L8rz1I/AAAAAAAAW_k/wKz84QxhN0oxHFBiU8m9aW8g6e9q5CMzwCLcB/s1600/Logo%2BTaman%2BKanak%2BKanak.png" className="img-fluid" style={{width:"30px"}} alt="" />
                        <span className="pl-3"> TK IT AL USWAH </span>
                    </a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="beranda" ><a className="nav-link" >Beranda</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="profil" ><a className="nav-link" >Profil</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="guru" ><a className="nav-link" >Guru</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="siswa" ><a className="nav-link" >Siswa</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="berita" ><a className="nav-link" >Berita</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="forum" ><a className="nav-link" >Forum</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="opini" ><a className="nav-link" >Opini</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="alumni" ><a className="nav-link" >Alumni</a></Link>
                        </li>
                        
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar 