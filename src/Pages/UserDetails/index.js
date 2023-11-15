import { Table, Input } from "antd";
import { useEffect, useState } from "react";

const { Search } = Input;

function UserDetails() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');

  const fetchData = () => {
    setLoading(true);
    fetch('https://user-mngmnt.onrender.com/accounts', {
      method: 'GET'
    })
      .then((res) => res.json())
      .then((data) => {
        setDataSource(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 120000);

    return () => clearInterval(interval);
  }, []);

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'UserName',
      dataIndex: 'Username',
    },
    {
      title: 'Email',
      dataIndex: 'Email',
    },
    {
      title: 'Phone Number',
      dataIndex: 'Phone',
    },
    {
      title: 'Creation Date',
      dataIndex: 'Creation_Date',
    },
  ];

  return (
    <div>
      <Search
        placeholder="Search..."
        onSearch={handleSearch}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{ marginBottom: 16 }}
      />
      <Table
        columns={columns}
        loading={loading}
        dataSource={dataSource.filter((record) =>
          record.Username.toLowerCase().includes(searchText.toLowerCase())
        )}
      />
    </div>
  );
}

export default UserDetails;

