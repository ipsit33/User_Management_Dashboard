import {Badge, Image, Typography } from "antd";
import {BellFilled} from "@ant-design/icons";
import img from "./5074810.webp";

function AppHeader(){
    return(
    <div className="AppHeader">
        <Image width={60} src={img} ></Image>
        <Typography.Title style={{fontFamily: "'Kdam Thmor Pro', sans-serif"}} className="title">User Management Dashboard</Typography.Title>
        <Badge count={20}>
        <BellFilled style={{fontSize:"24px"}}/>
        </Badge>
    </div>
    );
    
}
export default AppHeader;