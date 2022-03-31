import {
  Table,
  Row,
  Col,
  Button,
  Space
} from 'antd';

import {
  EditOutlined,
  DeleteOutlined
} from '@ant-design/icons';


const UTable = ({
  rows = 10,
  onAddNewUser,
  onDeleteUser,
  data,
  onChange
}) => {

  const columns = [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'id',
    },
    {
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
    },
    {
      key: 'email',
      title: 'Email',
      dataIndex: 'email',
    },
    {
      key: 'address',
      title: 'Address',
      dataIndex: 'address',
    },
    {
      key: 'actions',
      title: 'Actions',
      render: (record) => {
        return (
          <>
            <EditOutlined />
            <DeleteOutlined
              onClick={() => onDeleteUser(record)}
              style={{color: "red", marginLeft: 12}}/>
          </>
        )
      }
    }
  ];

  return (
    <>
      <header className='App-header'>
        <Row>
          <Col md={{span: 12, offset: 6}}>
            <Space align="center">
              <Button type="primary" onClick={() => onAddNewUser()}>Add new User</Button>
            </Space>
            <Table
              dataSource={data}
              columns={columns}
              // onChange={onChange}
              pagination={{
                pageSize: rows,
                hideOnSinglePage: true,
                showSizeChanger: true,
                pageSizeOptions: [10, 20, 30]
              }}></Table>
          </Col>
        </Row>
      </header>
    </>
  )
};

export default UTable;
