import React from 'react';
import { Outlet } from '@tanstack/react-router';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
 
  return (
   
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;