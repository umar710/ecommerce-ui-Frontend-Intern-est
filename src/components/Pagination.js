// Pagination.js
export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [];

  // Generate page numbers with logic to show limited pages
  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    // Always show first page
    pages.push(1);

    // Show ellipsis if needed
    if (currentPage > 3) pages.push("...");

    // Show current page and neighbors
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      if (i !== 1 && i !== totalPages) pages.push(i);
    }

    // Show ellipsis if needed
    if (currentPage < totalPages - 2) pages.push("...");

    // Always show last page
    pages.push(totalPages);
  }

  return (
    <div className="flex items-center justify-center bg-gray-100 border border-gray-200 rounded-md p-4 w-full h-16">
      <div className="flex justify-center items-center">
        {pages.map((page, index) =>
          page === "..." ? (
            <span
              key={index}
              className="flex items-center justify-center w-12 h-12 text-lg font-semibold text-gray-600"
            >
              ...
            </span>
          ) : (
            <button
              key={index}
              onClick={() => onPageChange(page)}
              className={`flex items-center justify-center w-12 h-12 text-lg font-semibold ${
                page === currentPage
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              {page}
            </button>
          )
        )}
      </div>
    </div>
  );
}
/*
export default function Pagination() {
  return (
    <div className="flex items-center justify-center bg-gray-100 border border-gray-200 rounded-md p-4 w-full h-16">
      <div className="flex justify-center items-center">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            className={`flex items-center justify-center w-12 h-12 text-lg font-semibold ${
              num === 3 ? "bg-blue-500 text-white" : "text-gray-600"
            }`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}
  */
