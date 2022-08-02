
import { toast } from "react-toastify";
import useSWR, { useSWRConfig } from "swr";
import { addct, listct, removect, updatect } from "../api-client/category";



const useCategory = () => {
    // swr - api
 
    const fetcher = async (url: string) => {
        const { data } = await listct(url);
        return data;
    };

    const { data, error, mutate } = useSWR("/products", fetcher, {
        dedupingInterval: 5000,
    });

    // create
    const create = async (item) => {
        const { data: product } = await addct (item);
        return [...data, product];
    };
    // update
    const onhandleUpdate= async (product ) =>{
        
       const { data } = await updatect (product)
       console.log({ data })
        // return(data.map(item => item._id == data._id ? data : item));
      }
    // delete
    const onhandleRemove = async (id :number|string) =>{
     
      if  (confirm("Bạn Muốn Xóa Ko?") ==  true) {
        alert("Xóa thành công")
        await removect (id);  
        return (data.filter(item=>item._id !==id));
       
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

export default useCategory