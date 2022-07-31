import useSWR, { useSWRConfig } from "swr";
import { add, list, remove } from "../api-client/product";


const useProducts = () => {
    // swr - api
 
    const fetcher = async (url: string) => {
        const { data } = await list(url);
        return data;
    };

    const { data, error, mutate } = useSWR("/products", fetcher, {
        dedupingInterval: 5000,
    });

    // create
    const create = async (item) => {
        const { data: product } = await add(item);
        return [...data, product];
    };
    // update

    // delete
    const removea = async (_id:number) => {
        const { data: product } = await remove(_id);
        return [...data, product];
    };
    return {
        create,
        // update,
        // delete,
        data,
        error,
        removea,
        mutate
    };
};

export default useProducts