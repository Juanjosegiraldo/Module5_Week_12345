"use client";

import { useEffect, useState } from "react";
import {
  getProperties,
  postProperty,
  updateProperty,
  deleteProperty,
  Property,
} from "@/services/properties";

export default function PropertiesDashboard() {
  // Local state for the list and the form
  const [properties, setProperties] = useState<Property[]>([]);
  const [form, setForm] = useState<Property>({ name: "", value: 0, img: "" });
  const [editingId, setEditingId] = useState<string | null>(null);

  // Load properties when the component mounts
  useEffect(() => {
    loadProperties();
  }, []);

  // Fetch all properties from the API
  const loadProperties = async () => {
    const data = await getProperties();
    setProperties(data);
  };

  // Handle input changes for the form
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === "value" ? Number(value) : value });
  };

  // Handle form submit: create or update depending on editingId
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      await updateProperty(editingId, form);
      setEditingId(null);
    } else {
      await postProperty(form);
    }
    setForm({ name: "", value: 0, img: "" });
    loadProperties();
  };

  // Load a property into the form for editing
  const handleEdit = (property: Property) => {
    setForm({ name: property.name, value: property.value, img: property.img || "" });
    setEditingId(property._id || null);
  };

  // Delete a property and refresh the list
  const handleDelete = async (id: string) => {
    await deleteProperty(id);
    loadProperties();
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Properties Dashboard</h1>

      {/* Form to create / update properties */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ marginRight: "0.5rem" }}
        />
        <input
          name="value"
          type="number"
          placeholder="Value"
          value={form.value}
          onChange={handleChange}
          required
          style={{ marginRight: "0.5rem" }}
        />
        <input
          name="img"
          placeholder="Image URL"
          value={form.img}
          onChange={handleChange}
          style={{ marginRight: "0.5rem" }}
        />
        <button type="submit">{editingId ? "Update" : "Create"}</button>
      </form>

      {/* List of properties */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {properties.map((p) => (
          <li key={p._id} style={{ marginBottom: "1rem", borderBottom: "1px solid #ccc", paddingBottom: "0.5rem" }}>
            <strong>{p.name}</strong> — ${p.value}
            {p.img && <div><img src={p.img} alt={p.name} width={100} /></div>}
            <div style={{ marginTop: "0.5rem" }}>
              <button onClick={() => handleEdit(p)} style={{ marginRight: "0.5rem" }}>Edit</button>
              <button onClick={() => handleDelete(p._id!)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
