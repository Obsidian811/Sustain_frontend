import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

// Define types for request and response data
interface UserData {
  email: string;
  password: string;
  [key: string]: any; // For additional optional fields
}

interface ProductData {
  name: string;
  description: string;
  price: number;
  ecoCreditCost?: number;
  stockQuantity?: number;
  [key: string]: any;
}

interface LoginResponse {
  token?: string;
  message?: string;
  error?: string;
  [key: string]: any;
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  ecoCreditCost: number;
  stockQuantity: number;
}

interface Order {
  id: number;
  userId: number;
  totalAmount: number;
  status: string;
  items: Product[];
  [key: string]: any;
}

// User registration API
export const registerUser = async (userData: UserData): Promise<LoginResponse> => {
  try {
    const response = await axios.post(`${BASE_URL}/users/register`, userData); // Corrected template literal
    return response.data;
  } catch (error: any) {
    console.error("Error during user registration:", error);
    return { error: error.message };
  }
};

// User login API
export const loginUser = async (loginData: UserData): Promise<LoginResponse> => {
  try {
    const response = await axios.post(`${BASE_URL}/users/login`, loginData); // Corrected template literal
    return response.data;
  } catch (error: any) {
    console.error("Error during user login:", error);
    return { error: error.message };
  }
};

// Fetch Products
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/products`); // Corrected template literal
    return response.data;
  } catch (error: any) {
    console.error("Error fetching products: ", error);
    return [];
  }
};

// Add a new product
export const addProduct = async (productData: ProductData): Promise<Product | { error: string }> => {
  try {
    const response = await axios.post(`${BASE_URL}/products/add`, productData); // Corrected template literal
    return response.data;
  } catch (error: any) {
    console.error("Error adding product:", error);
    return { error: error.message };
  }
};

// Fetch orders by user ID
export const fetchOrders = async (userId: number): Promise<Order[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/orders/${userId}`); // Corrected template literal
    return response.data;
  } catch (error: any) {
    console.error("Error fetching orders:", error);
    return [];
  }
};
