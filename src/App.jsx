import {useState} from 'react';
import UTable from './components/UTable';
import data from './data';
import {
  Modal,
  Input
} from 'antd';

const App = () => {
  const [dataSource, setDataSource] = useState(data);
  const [rows, setRows] = useState(10);
  const [isEditing, setIsEditing] = useState(false);
  const [editUserData, setEditUserData] = useState(null);

  let currentId = dataSource[dataSource.length - 1].id;

  const onEditUser = (record) => {
    setIsEditing(true);
    setEditUserData({...record});
  };

  const onDeleteUser = (record) => {
    Modal.confirm({
      title: 'Are you sure, you want to delete this student record?',
      okText: 'Yes',
      okType: 'danger',
      onOk: () => {
        setDataSource((previousState) => {
          return previousState.filter((user) => {
            return user.id !== record.id;
          });
        });
      }
    })
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditUserData(null);
  };

  const onAddNewUser = () => {
    currentId += 1;;

    const newUser = {
      id: currentId,
      name: 'Mick',
      email: 'mick@email.com',
      address: "Micks's Street"
    };

    setDataSource((previous) => {
      return [...previous, newUser];
    })
  }

  return (
    <>
      <header className='App-header'>
        <Modal
          title='Edit User'
          visible={isEditing}
          okText='Save'
          onCancel={() => resetEditing()}
          onOk={() => {
            setDataSource((prev) => {
              return prev.map((user) => {
                if (user.id === editUserData.id) {
                  return editUserData;
                }
                return user;
              });
            });
            resetEditing();
          }}
        >
          <Input
            value={editUserData?.name}
            onChange={(evt) => {
              setEditUserData((previous) => {
                return {
                  ...previous,
                  name: evt.target.value
                }
              });
            }}
          />
          <Input
            value={editUserData?.email}
            onChange={(evt) => {
              setEditUserData((previous) => {
                return {
                  ...previous,
                  email: evt.target.value
                }
              });
            }}
          />
          <Input
            value={editUserData?.address}
            onChange={(evt) => {
              setEditUserData((previous) => {
                return {
                  ...previous,
                  address: evt.target.value
                }
              });
            }}
          />
        </Modal>
        <UTable
          data={dataSource}
          onAddNewUser={onAddNewUser}
          onEditUser={onEditUser}
          onDeleteUser={onDeleteUser}
          rows={rows}
          onChange={setRows}
        ></UTable>
      </header>
    </>
  )
};

export default App;
