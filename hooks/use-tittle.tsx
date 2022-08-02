import { toast } from "react-toastify";
import useSWR, { useSWRConfig } from "swr";
import { add, list, remove, update } from "../api-client/product";
const useTittle = () => {
    // swr - api
 
    const fetcher = async (url: string) => {
        const { data } = await list(url);
        return data;
    };

    const { data, error, mutate } = useSWR("/products", fetcher, {
        dedupingInterval: 5000,
    });

    // create
    const createtittle = async (item) => {
        const { data: tittle } = await add(item);
        return [...data, tittle];
    };
    // update
    const updatetittle= async (tittle ) =>{
        
       const { data } = await update(tittle)
       console.log({ data })
        // return(data.map(item => item._id == data._id ? data : item));
      }
    // delete
    const removetittle = async (id :number|string) =>{
     
      if  (confirm("Bạn Muốn Xóa Ko?") ==  true) {
        alert("Xóa thành công")
        await remove(id);  
        return (data.filter(item=>item._id !==id));
       
    } else {
        return false;
    }
        
      };
    return {
        createtittle,
        updatetittle,
        // delete,
        data,
        error,
        removetittle,
        mutate
    };
};

export default useTittle