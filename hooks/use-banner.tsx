
import { toast } from "react-toastify";
import useSWR, { useSWRConfig } from "swr";
import { add, list, remove, update } from "../api-client/banner";



const useBanner = () => {
    // swr - api
 
    const fetcher = async (url: string) => {
        const { data } = await list(url);
        return data;
    };

    const { data, error, mutate } = useSWR("/banners", fetcher, {
        dedupingInterval: 5000,
    });

    // create
    const createbanner = async (item) => {
        const { data: banner } = await add(item);
        return [...data, banner];
    };
    // update
    const updatebaner= async (banner ) =>{
        
       const { data } = await update(banner)
       console.log({ data })
        // return(data.map(item => item._id == data._id ? data : item));
      }
    // delete
    const removeBanner = async (id :number|string) =>{
     
      if  (confirm("Bạn Muốn Xóa Ko?") ==  true) {
        alert("Xóa thành công")
        await remove(id);  
        return (data.filter(item=>item._id !==id));
       
    } else {
        return false;
    }
        
      };
    return {
        createbanner,
        updatebaner,
        // delete,
        data,
        error,
        removeBanner,
        mutate
    };
};

export default useBanner