import { CalendarOutlined, ClockCircleFilled, UserOutlined } from "@ant-design/icons";
import { Statistic, Space, Card } from "antd";
import Typography from "antd/es/typography/Typography";
import moment from 'moment';
import { useEffect, useState } from "react";

function DashBoard() {
    const [registeredUsers, setRegisteredUsers] = useState(0);
    const currentDate = moment().format("Do MMMM YYYY");
    const currentTime = moment().format("h:mma");

    useEffect(() => {
        // Fetch the number of registered users
        fetchRegisteredUsers();
    }, []);

    const fetchRegisteredUsers = async () => {
        try {
            const response = await fetch('http://localhost:8080/accounts', {
                method: 'GET'
            });

            if (response.ok) {
                const data = await response.json();
                setRegisteredUsers(data.length);
            } else {
                console.error('Failed to fetch registered users.');
            }
        } catch (error) {
            console.error('Error fetching registered users:', error);
        }
    };

    return (
        <div>
            <Typography.Title level={4}>Dashboard</Typography.Title>
            <Space direction="horizontal">
                <DashBoardCard icon={<UserOutlined style={{fontSize: 24, padding: 8, color: "purple", borderRadius: 20, backgroundColor: "rgba(0,255,255,0.25)"}}/>} title={"No. of Registered Users"} value={registeredUsers}/>
                <DashBoardCard icon={<CalendarOutlined style={{fontSize: 24, padding: 8, color: "green", borderRadius: 20, backgroundColor: "rgba(0,255,0,0.25)"}}/>} title={"Date"} value={currentDate}/>
                <DashBoardCard icon={<ClockCircleFilled style={{fontSize: 24, padding: 8, borderRadius: 20}}/>} title={"Time"} value={currentTime}/>
            </Space>
        </div>
    );
}

function DashBoardCard({icon, title, value}) {
    return (
        <Card>
            <Space direction="horizontal">
                {icon}
                <Statistic title={title} value={value}/>
            </Space>
        </Card>
    );

}

export default DashBoard;