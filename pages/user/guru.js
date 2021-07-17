//@ts-check
import UserLayout from "../../component/user/UserLayout"
import DataGuru from "../../component/user/DataGuru"


const guru = () =>{
    return (
        <div>
            <UserLayout>
                <DataGuru/>
            </UserLayout>
        </div>
    )
}


export default guru