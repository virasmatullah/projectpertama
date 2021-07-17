import UserLayout from "../../component/user/UserLayout"

const beranda = ()=>{
    return (
        
        <div>
            <UserLayout>
            <div className="container py-5">
                <div className="rows">
                    <div className="col-md-3">
                        <img src="-https://1.bp.blogspot.com/-urA4m9JCtjQ/YPJpxKTFCYI/AAAAAAAADIE/UYBGs4MBApQyh0EACTKgggbmAuM1ZrphACLcBGAsYHQ/s320/logo%2Bal%2Buswah9999.png" style={{width:"200px"}} alt="" />
                    </div>
                    <div className="col-md-9">
                        <h1 className="display-5 fw-bold">Selamat Datang di Portal Kami</h1>
                        <p className="col-md-8 fs-4">gedebox creative</p>
                        <button className="btn btn-primary btn-lg" type="button">Jelajahi</button>
                    </div>
                    
                </div>
                
               
            </div>
            </UserLayout>
        </div>
    )
}


export default beranda