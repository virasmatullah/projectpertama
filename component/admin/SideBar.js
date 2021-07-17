import Link from "next/link"
const SideBar = ({children})=>{
    return (
        <div>
            <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-primary">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">TK IT AL USWAH</span>
                    </a>
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <Link href="/admin/dataguru"> 
                            <a className="nav-link align-middle px-0">
                                <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline text-light"><b>Guru</b></span>
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/admin/datasiswa"> 
                            <a className="nav-link align-middle px-0">
                                <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline text-light"><b>Siswa</b></span>
                            </a>
                        </Link> 
                    </li>
                    <li className="nav-item">
                        <Link href="/admin/databerita"> 
                            <a className="nav-link align-middle px-0">
                                <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline text-light"><b>Berita</b></span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/dataforum">
                            <a className="nav-link px-0 align-middle">
                                <i className="fs-4 bi-table" /> <span className="ms-1 d-none d-sm-inline text-light"><b>Forum</b></span>
                            </a>
                        </Link>
                        
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                        <i className="fs-4 bi-people" /> <span className="ms-1 d-none d-sm-inline text-light"><b>Customers</b></span> </a>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="col py-3">
                {children}
                </div>
            </div>
            </div>

        </div>
    )
}

export default SideBar