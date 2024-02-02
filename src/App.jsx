/* eslint-disable no-unused-vars */

import { ListProvider } from './Context/JobListContext';
import AppLayout from './components/AppLayout';

function App() {
  // Fetch the datas

  return (
    <div>
      <ListProvider>
        <AppLayout />
      </ListProvider>
    </div>
  );
}

export default App;
