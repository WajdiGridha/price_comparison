import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useQuery } from "react-query";
import { useNavigate  } from 'react-router-dom';

async function fetchPosts() {
  const { data } = await axios.get("http://127.0.0.1:8000/api/display-teacher");
  return data;
}

export default function TeachersTable({ color }) {
  let navigate = useNavigate();

  const editing = (id) => {
    navigate("./"+ id, { replace: true });
  };
  const go  = () => {
    window.location.replace('http://localhost:3000/admin/createTeacher');
  }


  const { data, error, isError, isLoading } = useQuery("students", fetchPosts);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error! {error.message}</div>;
  }
  console.log(data)
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
              <div className="w-full flex justify-between ">
          <h1 style={{margin:'15px'}}>Teachers</h1>
          <div className="mr-12" style={{margin:'15px'}}>
            {" "}
            <button className=" bg-emerald-400 text-white  w-full  p-2 rounded  h-14 hover:cursor-pointer" onClick={() => go()}>
              create
            </button>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  firstName
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  lastName
                </th>

                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  email
                </th>


                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.data.map((person) => (
                <tr>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                    <span
                      className={
                        " font-bold " +
                        +(color === "light"
                          ? "text-blueGray-600"
                          : "text-white")
                      }
                    >
                      {person.name}
                    </span>
                  </td>

                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {person.lastname}
                  </td>

                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {person.email}
                  </td>

                  <td className="flex border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                    <button
                      className=" bg-emerald-400 text-white mr-2   p-2 rounded w-1/2 h-14 hover:cursor-pointer"
                      onClick={() => editing(person.id)}
                    >
                      edit
                    </button>
                    <button className="  bg-red-500 text-white border-0 p-2 rounded w-1/2 h-14 hover:cursor-pointer">
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

TeachersTable.defaultProps = {
  color: "light",
};

TeachersTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
