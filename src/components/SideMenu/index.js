import { DatabaseFilled, UserAddOutlined, DashboardFilled } from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

function SideMenu(){
    const navigate = useNavigate();
    return(
    <div className="SideMenu">
        <Menu 
        onClick={(item) => {
            // item.key
            navigate(item.key);
        }}
        items={[
            {
                label: "Dashboard",
                icon: <DashboardFilled/>,
                key: '/'
            },
            {
                label: "User Details",
                icon: <DatabaseFilled />,
                key: '/details'
            },
            {
                label: "Account Creation",
                key: "/create",
                icon: <UserAddOutlined />
            }
        ]}>

        </Menu>
    </div>
    );
}
export default SideMenu;