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
  onEditUser,
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
            <EditOutlined onClick={() => onEditUser(record)} />
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
            <Button
              type="primary"
              onClick={() => onAddNewUser()}
              style={{marginBottom: 20, marginTop: 20}}
            >
              Add new User
            </Button>
            <Table
              dataSource={data}
              columns={columns}
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
