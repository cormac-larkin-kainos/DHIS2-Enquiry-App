import classes from "./Layout.module.css"
import { Link } from "react-router-dom";

const Layout = ({children}) => {
    return (
        <div className={classes.layout}>
            <aside className={classes.sideBar}>
                <h2 className={classes.menuTitle}>Options Menu</h2>
                <hr/>
                <ul>
                    <li><Link to={"/"}>Create an Enquiry</Link></li>
                    <li><Link to={"/view-enquiries"}>View Enquiries</Link></li>
                </ul>
            </aside>
            <main className={classes.mainContentArea}>
                {children}
            </main>
        </div>
    )
}

export default Layout;