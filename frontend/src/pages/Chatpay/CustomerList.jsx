import React, { useState } from 'react';
import EmptyStateCard from '../../components/EmptyStateCard';
import AddCustomerModal from '../../components/AddCustomerModal';
import DataTable from '../../components/DataTable';

export default function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  React.useEffect(() => {
    fetch('http://localhost:3000/api/data/customers')
      .then(res => res.json())
      .then(data => setCustomers(data))
      .catch(err => console.error(err));
  }, []);

  const saveToBackend = async (newCustomers) => {
    try {
      await fetch('http://localhost:3000/api/data/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ customers: newCustomers })
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveCustomer = (newCustomer) => {
    let updatedCustomers;
    if (editingIndex !== null) {
      updatedCustomers = [...customers];
      updatedCustomers[editingIndex] = newCustomer;
    } else {
      updatedCustomers = [...customers, newCustomer];
    }
    setCustomers(updatedCustomers);
    saveToBackend(updatedCustomers);
    
    setIsModalOpen(false);
    setEditingCustomer(null);
    setEditingIndex(null);
  };

  const handleDeleteCustomer = (indexToDelete) => {
    const updatedCustomers = [...customers];
    updatedCustomers.splice(indexToDelete, 1);
    setCustomers(updatedCustomers);
    saveToBackend(updatedCustomers);
  };

  const columns = [
    {
      key: 'name',
      label: 'Nama Pelanggan',
      render: (row) => <span className="text-[14px] font-normal text-[#252525]">{row.name || '-'}</span>
    },
    {
      key: 'phone',
      label: 'Nomor Handphone',
      render: (row) => <span className="text-[14px] font-normal text-[#4a4a4a]">{row.phone}</span>
    },
    {
      key: 'email',
      label: 'Email',
      render: (row) => <span className="text-[14px] font-normal text-[#4a4a4a]">{row.email || '-'}</span>
    },
    {
      key: 'action',
      label: 'Aksi',
      align: 'right',
      render: (row, index) => (
        <div className="flex items-center justify-end gap-3">
          <button 
            onClick={() => {
              setEditingCustomer(row);
              setEditingIndex(index);
              setIsModalOpen(true);
            }}
            className="text-[#104bdd] font-semibold text-[14px] hover:underline"
          >
            Edit
          </button>
          <button 
            onClick={() => handleDeleteCustomer(index)}
            className="text-[#dc2626] font-semibold text-[14px] hover:underline"
          >
            Hapus
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="flex flex-col items-start px-8 md:px-[160px] py-[16px] w-full h-full">
      <div className="bg-white border border-[rgba(37,37,37,0.13)] rounded-[12px] p-[17px] w-full flex flex-col">
        {/* Header */}
        <div className="pb-4 w-full flex justify-between items-center">
          <h2 className="font-semibold text-[#252525] text-[16px]">Pelanggan</h2>
          {customers.length > 0 && (
            <button 
              onClick={() => {
                setEditingCustomer(null);
                setEditingIndex(null);
                setIsModalOpen(true);
              }}
              className="bg-[#104bdd] hover:bg-[#0e3eae] transition-colors flex items-center justify-center px-[14px] py-[6px] rounded-[6px]"
            >
              <span className="font-semibold text-white text-[13px]">Tambah Pelanggan</span>
            </button>
          )}
        </div>

        {customers.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-12 w-full">
            <div className="w-12 h-12 text-gray-400 mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-[#252525] text-[14px]">Anda belum punya pelanggan</h3>
            <p className="font-normal text-[#444] text-[14px] mt-2 mb-6 text-center max-w-md">
              Tambahkan pelanggan dulu sebelum bisa mengirim tagihan atau broadcast.
            </p>
            <div className="flex gap-3">
              <button
                className="border border-[#104bdd] text-[#104bdd] hover:bg-blue-50 transition-colors flex items-center justify-center px-[14px] py-[8px] rounded-[6px]"
              >
                <span className="font-semibold text-[14px]">Import Data</span>
              </button>
              <button
                onClick={() => {
                  setEditingCustomer(null);
                  setEditingIndex(null);
                  setIsModalOpen(true);
                }}
                className="bg-[#104bdd] hover:bg-[#0e3eae] transition-colors flex items-center justify-center px-[14px] py-[8px] rounded-[6px]"
              >
                <span className="font-semibold text-white text-[14px]">Tambahkan Pelanggan</span>
              </button>
            </div>
          </div>
        ) : (
          <DataTable columns={columns} data={customers} itemsPerPage={10} />
        )}
      </div>

      {isModalOpen && (
        <AddCustomerModal 
          onClose={() => {
            setIsModalOpen(false);
            setEditingCustomer(null);
            setEditingIndex(null);
          }}
          onSave={handleSaveCustomer}
          onDelete={handleDeleteCustomer}
          initialData={editingCustomer}
        />
      )}
    </div>
  );
}
