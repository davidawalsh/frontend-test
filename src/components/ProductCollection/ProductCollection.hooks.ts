import { useEffect, useState } from "react";
import { Product } from "../../types/product";

type ProductsServiceResponse = {
  data: Product[];
  error: Error | null;
  loading: boolean;
};

type ProductsServiceProps = {
  tags: string[];
  subscription: boolean;
};

export const useProductsService = ({
  tags,
  subscription,
}: ProductsServiceProps): ProductsServiceResponse => {
  const [data, setData] = useState<Product[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = new URL(
          `${process.env.REACT_APP_API_ENDPOINT}/products` || ""
        );
        tags.length && url.searchParams.append("tags_like", tags.join("|"));
        subscription && url.searchParams.append("subscription", "true");

        const response = await fetch(url.toString()); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const productsData = (await response.json()) as Product[];
        setData(productsData);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [tags, subscription]);

  return { data, error, loading };
};

export const useTags = () => {
  const [tags, setTags] = useState<string[]>([]);

  const handleTagChange = (event: {
    target: { value: string; checked: boolean };
  }) => {
    const value = event.target.value;
    if (event.target.checked) {
      setTags((prevTags) => [...prevTags, value]);
    } else {
      setTags((prevTags) => prevTags.filter((tag) => tag !== value));
    }
  };

  return { tags, handleTagChange };
};

export const useFetchTags = () => {
  const [serverTags, setServerTags] = useState<string[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const url = new URL(
          `${process.env.REACT_APP_API_ENDPOINT}/products` || ""
        );
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch tags");
        }

        const tagsData = (await response.json()) as Product[];
        //loop through products and get unique tags
        const uniqueTags = tagsData
          .map((product) => product.tags)
          .flat()
          .filter((tag, index, tags) => tags.indexOf(tag) === index);
        setServerTags(uniqueTags);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchTags();
  }, []);

  return { serverTags, error, loading };
};
