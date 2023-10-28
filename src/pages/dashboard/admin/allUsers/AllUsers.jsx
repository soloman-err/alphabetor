import axios from 'axios';
import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import useUsers from '../../../../hooks/useUsers';

const roles = ['user', 'student', 'instructor', 'admin'];

const tableHeaders = [
  { label: 'ID' },
  { label: 'Name' },
  { label: 'Email' },
  { label: 'Role' },
  { label: 'Actions' },
];

const AllUsers = () => {
  const { users } = useUsers();
  console.log(users);
  const [userRoles, setUserRoles] = useState(users?.map((user) => user.role));

  const updateUserRole = async (email, newRole) => {
    try {
      console.log(email, newRole);
      const res = await axios.patch(
        `${import.meta.env.VITE_SERVER_URL}/users/update-role/${email}`,
        {
          role: newRole,
        }
      );
      console.log(res);
      console.log(`User role updated to ${newRole}`);
    } catch (err) {
      console.error('Error updating user role', err);
      throw err;
    }
  };

  const handleRoleChange = async (index, role) => {
    try {
      const userEmail = users[index]?.email;
      await updateUserRole(userEmail, role);
      const newRoles = [...userRoles];
      newRoles[index] = role;
      setUserRoles(newRoles);
    } catch (err) {
      console.error('Error updating user role', err);
    }
  };

  return (
    <section className="flex flex-col p-2">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 rounded-md">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {tableHeaders?.map((header) => (
                    <th
                      key={header.label}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                    >
                      {header.label}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {users?.map((user, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user?.firstName + ' ' + user?.lastName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user?.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {userRoles[index] || 'user'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center">
                      <select
                        value={userRoles[index]}
                        onChange={(e) =>
                          handleRoleChange(index, e.target.value)
                        }
                        className="px-2 py-1 border border-gray-300 bg-white rounded-sm shadow-sm focus:outline-none sm:text-sm"
                      >
                        {roles?.map((role) => (
                          <option key={role} value={role}>
                            {role.charAt(0).toUpperCase() + role.slice(1)}
                          </option>
                        ))}
                      </select>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleDeleteUser(user?.id)}
                      >
                        <FaTrashAlt size={16} className="text-danger" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllUsers;
