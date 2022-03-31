import {useState} from 'react';
import UTable from './components/UTable';
import data from './data';

const App = () => {
  const [dataSource, setDataSource] = useState(data);
  const [rows, setRows] = useState(10);

  let currentId = dataSource[dataSource.length - 1].id;

  const onDeleteUser = (record) => {
    setDataSource((previousState) => {
      return previousState.filter((user) => {
        return user.id !== record.id;
      });
    });
  }

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
        <UTable
          data={dataSource}
          onAddNewUser={onAddNewUser}
          onDeleteUser={onDeleteUser}
          rows={rows}
          onChange={setRows}
        ></UTable>
      </header>
    </>
  )
};

export default App;
