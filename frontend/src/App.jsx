import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { io } from 'socket.io-client';
import Dashboard from './pages/Dashboard/Dashboard';
import ChatpayLayout from './components/layout/ChatpayLayout';
import ChatpayDashboard from './pages/Chatpay/ChatpayDashboard';
import SettingsDashboard from './pages/Chatpay/SettingsDashboard';
import CustomerList from './pages/Chatpay/CustomerList';
import TemplateList from './pages/Chatpay/TemplateList';
import CreateTemplate from './pages/Chatpay/CreateTemplate';
import QuickReply from './pages/Chatpay/QuickReply';
import TransactionHistory from './pages/Chatpay/TransactionHistory';
import SendBill from './pages/Chatpay/SendBill';

function App() {
  // Dummy login state for Chatpay (true = logged in, false = unconnected)
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('chatpay_isLoggedIn') === 'true');
  const [userNumber, setUserNumber] = useState(() => localStorage.getItem('chatpay_userNumber') || '');

  React.useEffect(() => {
    const handleLogin = (e) => {
      if (e.detail) {
        setUserNumber(e.detail);
        localStorage.setItem('chatpay_userNumber', e.detail);
      }
      setIsLoggedIn(true);
      localStorage.setItem('chatpay_isLoggedIn', 'true');
    };
    window.addEventListener('chatpay_login', handleLogin);
    return () => window.removeEventListener('chatpay_login', handleLogin);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('chatpay_isLoggedIn');
    localStorage.removeItem('chatpay_userNumber');
    setIsLoggedIn(false);
    setUserNumber('');
    const socket = io('http://localhost:3000');
    socket.emit('logout');
    setTimeout(() => socket.disconnect(), 1000);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        
        {/* Chatpay Routes */}
        <Route path="/chatpay" element={<ChatpayLayout />}>
          <Route index element={<ChatpayDashboard isLoggedIn={isLoggedIn} />} />
          
          {/* Main feature pages */}
          <Route path="invoice" element={isLoggedIn ? <SendBill /> : <ChatpayDashboard />} />
          <Route path="history" element={isLoggedIn ? <TransactionHistory /> : <ChatpayDashboard />} />
          <Route path="customers" element={isLoggedIn ? <CustomerList /> : <ChatpayDashboard />} />
          <Route path="templates" element={isLoggedIn ? <TemplateList /> : <ChatpayDashboard />} />
          <Route path="templates/create" element={isLoggedIn ? <CreateTemplate /> : <ChatpayDashboard />} />
          <Route path="templates/edit/:id" element={isLoggedIn ? <CreateTemplate /> : <ChatpayDashboard />} />
          <Route path="quick-reply" element={isLoggedIn ? <QuickReply /> : <ChatpayDashboard />} />
          <Route path="settings" element={isLoggedIn ? <SettingsDashboard userNumber={userNumber} onLogout={handleLogout} /> : <ChatpayDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
