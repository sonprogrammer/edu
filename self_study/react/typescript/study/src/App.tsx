// App.tsx
import React from 'react';
import SideBar from './Side';
import './index.css'
import StyledForm from './styles';

function App() {
  const handleItemClick = (label: string) => {
    console.log('메뉴 아이템 클릭:', label);
  };

  return (
    // <div className="flex h-screen bg-gray-100">
    <div>


      <SideBar handleItemClick={handleItemClick} />
      <form>
        <input type="text" placeholder="Full name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button>Sign In</button>
      </form>
    </div>


      // <div className="flex-1 flex flex-col overflow-hidden">
        // <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">

        // </main>
      // </div>
    // </div>
  );
}

export default App;
