
import { toast } from "react-toastify";
import useSWR, { useSWRConfig } from "swr";
import { add, list, remove, update } from "../api-client/aboutUs";


const useAboutUs = () => {
    // swr - api
 
    const fetcher = async (url: string) => {
        const { data } = await list(url);
        return data;
    };

    const { data, error, mutate } = useSWR("/aboutUs", fetcher, {
        dedupingInterval: 5000,
    });

    // create
    const create = async (item) => {
        const { data: product } = await add(item);
        return [...data, product];
    };
    // update
    const onhandleUpdate= async (aboutUS ) =>{
        
       const { data } = await update(aboutUS)
       console.log({ data })
        // return(data.map(item => item._id == data._id ? data : item));
      }
    // delete
    const onhandleRemove = async (id :number|string) =>{
     
      if  (confirm("Bạn Muốn Xóa Ko?") ==  true) {
        alert("Xóa thành công")
        await remove(id);  
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

export default useAboutUs