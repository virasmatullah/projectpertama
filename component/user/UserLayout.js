//@ts-check
import Footer from "./Footer"
import NavBar from "./Navbar"

const UserLayout = ({children}) =>{
    return (
        <div>
            <NavBar/>
            {children}
            <Footer/>
        </div>
    )
}

export default UserLayout 