import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { reRunQuery, querySuccess, queryFailure } from "../redux/querySlice";

const QueryHistory = () => {
  const queries = useSelector((state) => state.query.queries);
  const dispatch = useDispatch();

  const handleReRun = (query) => {
    dispatch(reRunQuery(query));

    setTimeout(() => {
      if (query.toLowerCase().includes("error")) {
        dispatch(queryFailure("Failed to process query"));
      } else {
        dispatch(querySuccess({ a: Math.random() * 100, b: Math.random() * 100, c: Math.random() * 100 }));
      }
    }, 2000);
  };

  return (
    <div className="w-64 h-screen bg-gray-100 p-4 shadow-lg fixed left-0 top-0">
      <h3 className="text-lg font-semibold mb-2">Query History</h3>
      <ul>
        {queries.map((query, index) => (
          <li
            key={index}
            className="p-2 border-b cursor-pointer hover:bg-gray-200"
            onClick={() => handleReRun(query)}
          >
            {query}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QueryHistory;
