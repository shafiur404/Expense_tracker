import React from "react";

export const AppPagination = ({ pageNumber, setPage }) => {
  const arr = Array.from(Array(pageNumber).keys());
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        {arr?.map((p) => {
          return (
            <li key={p} className="page-item">
              <button
                onClick={(e) => setPage(e.target.textContent)}
                className="page-link"
              >
                {++p}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
