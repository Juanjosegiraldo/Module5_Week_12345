import axios from "axios";

// Base URL for the properties API
const API_URL = "/api/properties";

// Shape of a property used across the app
export interface Property {
  _id?: string;
  name: string;
  value: number;
  img?: string;
}

// Fetch all properties
export const getProperties = async (): Promise<Property[]> => {
  const res = await axios.get(API_URL);
  return res.data;
};

// Create a new property
export const postProperty = async (property: Property): Promise<Property> => {
  const res = await axios.post(API_URL, property);
  return res.data;
};

// Update a property by id
export const updateProperty = async (id: string, property: Property): Promise<Property> => {
  const res = await axios.put(`${API_URL}/${id}`, property);
  return res.data;
};

// Delete a property by id
export const deleteProperty = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
