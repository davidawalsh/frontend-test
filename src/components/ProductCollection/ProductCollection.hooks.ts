import { useEffect, useState } from "react";
import { Product } from "../../types/product";

type ProductsServiceResponse = {
  data: Product[];
  error: Error | null;
  loading: boolean;
};

const useProductsService = (): ProductsServiceResponse => {
  const [data, setData] = useState<Product[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_ENDPOINT || ""); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const productsData = await response.json();
        setData(productsData);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, loading };
};

export { useProductsService };
