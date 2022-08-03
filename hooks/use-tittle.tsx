import { toast } from "react-toastify";
import useSWR, { useSWRConfig } from "swr";

import { addtittle, deletetittle, listtittle, updatetittle } from "../api-client/tittle";

const useTittle = () => {
    // swr - api

    const fetcher = async (url: string) => {
        const { data } = await listtittle(url);
        return data;
    };

    const { data, error, mutate } = useSWR("/gallerys", fetcher, {
        dedupingInterval: 5000,
    });

    // create
    const create = async (item) => {
        const { data: product } = await addtittle(item);
        return [...data, product];
    };
    // update
    const onhandleUpdate = async (product) => {

        const { data } = await updatetittle(product)
        console.log({ data })
        // return(data.map(item => item._id == data._id ? data : item));
    }
    // delete
    // delete
    const onhandleRemove = async (id: number | string) => {

        if (confirm("Bạn Muốn Xóa Ko?") == true) {
            alert("Xóa thành công")
            await deletetittle(id);
            return (data.filter(item => item._id !== id));

        } else {
            return false;
        }

    };

    return {
        create,
        onhandleUpdate,
        // delete,
        data,
        error,
        onhandleRemove,
        mutate
    };
};

export default useTittle;