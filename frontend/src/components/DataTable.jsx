import React, { useState } from 'react';

/**
 * Reusable DataTable component matching Figma Node 49-8 (ApTable)
 */
export default function DataTable({ columns, data, itemsPerPage = 10, emptyState }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItemsPerPage, setCurrentItemsPerPage] = useState(itemsPerPage);

  if (!data || data.length === 0) {
    return emptyState || null;
  }

  // Pagination Logic
  const totalPages = Math.ceil(data.length / currentItemsPerPage);
  
  if (currentPage > totalPages && totalPages > 0) {
    setCurrentPage(totalPages);
  }

  const startIndex = (currentPage - 1) * currentItemsPerPage;
  const endIndex = startIndex + currentItemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const handleFirstPage = () => {
    if (currentPage > 1) setCurrentPage(1);
  };
  const handleLastPage = () => {
    if (currentPage < totalPages) setCurrentPage(totalPages);
  };
  const handleItemsPerPageChange = (e) => {
    setCurrentItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="w-full flex flex-col font-['Inter']">
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#f2f2f2]">
              {columns.map((col, idx) => (
                <th 
                  key={idx} 
                  className="py-[18px] px-[17px] text-[14px] font-bold text-[rgba(0,0,0,0.54)] text-center border-x border-[#f2f2f2]"
                  style={{ width: col.width || 'auto' }}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, rowIndex) => (
              <tr key={rowIndex} className="bg-white hover:bg-[#fafafa] transition-colors">
                {columns.map((col, colIndex) => (
                  <td 
                    key={colIndex} 
                    className="py-[14px] px-[17px] border-x border-b border-[#f2f2f2] text-center"
                  >
                    {col.render ? col.render(row, startIndex + rowIndex) : (
                      <span className="text-[14px] font-normal text-[rgba(0,0,0,0.87)]">
                        {row[col.key] || '-'}
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MatPaginator */}
      {data.length > 0 && (
        <div className="flex items-center justify-end w-full pt-[24px]">
          <div className="flex items-center gap-[32px]">
            
            {/* Items per page */}
            <div className="flex items-center gap-[10px]">
              <span className="text-[12px] font-normal text-[rgba(0,0,0,0.54)]">Items per page:</span>
              <div className="relative flex items-center">
                <select 
                  value={currentItemsPerPage}
                  onChange={handleItemsPerPageChange}
                  className="text-[12px] font-normal text-[rgba(0,0,0,0.54)] bg-transparent outline-none cursor-pointer appearance-none pr-4"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
                <div className="absolute right-0 pointer-events-none">
                  <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L5 5L10 0H0Z" fill="rgba(0,0,0,0.54)"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Range */}
            <div className="text-[12px] font-normal text-[rgba(0,0,0,0.54)]">
              {startIndex + 1} – {Math.min(endIndex, data.length)} of {data.length}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-[10px]">
              {/* First Page */}
              <button
                onClick={handleFirstPage}
                disabled={currentPage === 1}
                className={`w-[40px] h-[40px] flex items-center justify-center rounded-full transition-colors ${
                  currentPage === 1 ? 'text-[rgba(0,0,0,0.26)] cursor-default' : 'text-[rgba(0,0,0,0.54)] hover:bg-[rgba(0,0,0,0.04)] cursor-pointer'
                }`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41zM6 6h2v12H6V6z"/>
                </svg>
              </button>
              
              {/* Previous Page */}
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`w-[40px] h-[40px] flex items-center justify-center rounded-full transition-colors ${
                  currentPage === 1 ? 'text-[rgba(0,0,0,0.26)] cursor-default' : 'text-[rgba(0,0,0,0.54)] hover:bg-[rgba(0,0,0,0.04)] cursor-pointer'
                }`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
                </svg>
              </button>

              {/* Next Page */}
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages || totalPages === 0}
                className={`w-[40px] h-[40px] flex items-center justify-center rounded-full transition-colors ${
                  currentPage === totalPages || totalPages === 0 ? 'text-[rgba(0,0,0,0.26)] cursor-default' : 'text-[rgba(0,0,0,0.54)] hover:bg-[rgba(0,0,0,0.04)] cursor-pointer'
                }`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </button>

              {/* Last Page */}
              <button
                onClick={handleLastPage}
                disabled={currentPage === totalPages || totalPages === 0}
                className={`w-[40px] h-[40px] flex items-center justify-center rounded-full transition-colors ${
                  currentPage === totalPages || totalPages === 0 ? 'text-[rgba(0,0,0,0.26)] cursor-default' : 'text-[rgba(0,0,0,0.54)] hover:bg-[rgba(0,0,0,0.04)] cursor-pointer'
                }`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6-1.41 1.41zM16 6h2v12h-2V6z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
