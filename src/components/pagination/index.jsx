const Pagination = ({
  totalItems,
  currentPage,
  pageSize,
  onPageChange,
  totalPages,
}) => {
  const getPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  const renderPageNumbers = () => {
    const pages = getPages();
    return pages.map((page) => (
      <button
        key={page}
        onClick={() => onPageChange(page)}
        className={`px-3 py-1 mx-1 rounded ${
          page === currentPage ? "bg-gray-300" : "bg-white border"
        }`}
      >
        {page}
      </button>
    ));
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 mx-1 rounded bg-white border"
      >
        &lt;
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 mx-1 rounded bg-white border"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
