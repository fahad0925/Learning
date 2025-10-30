"use client";
import React, { useState } from "react";

type Person = {
  id: number;
  name: string;
  email: string;
  number: number;
};

export default function Home() {
  const [data, setData] = useState<Person[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  // Add new person
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !number) return;

    const newPerson: Person = {
      id: Date.now(),
      name,
      email,
      number: Number(number),
    };

    setData([...data, newPerson]);
    setName("");
    setEmail("");
    setNumber("");
  };

  // Delete person by ID
  const handleDelete = (id: number) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">User List</h1>

      {/* Form */}
      <form
        onSubmit={handleAdd}
        className="flex flex-col md:flex-row gap-4 mb-8"
      >
        <input
          type="text"
          placeholder="Name"
          className="p-2 border border-gray-500 rounded bg-gray-900 text-white w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="p-2 border border-gray-500 rounded bg-gray-900 text-white w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Number"
          className="p-2 border border-gray-500 rounded bg-gray-900 text-white w-full"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white"
        >
          Add
        </button>
      </form>

      {/* Table */}
      <table className="w-full border border-gray-700">
        <thead>
          <tr className="bg-gray-800">
            <th className="p-2 border border-gray-700">Name</th>
            <th className="p-2 border border-gray-700">Email</th>
            <th className="p-2 border border-gray-700">Number</th>
            <th className="p-2 border border-gray-700">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person) => (
            <tr key={person.id} className="text-center">
              <td className="p-2 border border-gray-700">{person.name}</td>
              <td className="p-2 border border-gray-700">{person.email}</td>
              <td className="p-2 border border-gray-700">{person.number}</td>
              <td className="p-2 border border-gray-700">
                <button
                  onClick={() => handleDelete(person.id)}
                  className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td colSpan={4} className="p-4 text-gray-400">
                No data added yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
