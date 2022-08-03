
import { toast } from "react-toastify";
import useSWR, { useSWRConfig } from "swr";

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
    const onhandleUpdate= async (product ) =>{
        
       const { data } = await update(product)
       console.log({ data })
        // return(data.map(item => item._id == data._id ? data : item));
      }
    // delete

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