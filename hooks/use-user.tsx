import { toast } from "react-toastify";
import useSWR, { useSWRConfig } from "swr";
import { signin, signup, list, update, remove } from "../api-client/user";
import { User } from "../models/user"

const useUser = () => {
    const fetcher = async (url: string) => {
        const { data } = await list(url);
        return data;
    };

    const { data, error, mutate } = useSWR("/user", fetcher, {
        dedupingInterval: 5000,
    });


    const dangnhap = async (user: any) => {
        const { data: users } = await signin(user);
        return [...data, users];
    };

    const dangky = async (user: any) => {
        const { data: product } = await signup(user);
        return [...data, product];
    };
    const onhandleUpdate = async (user) => {

        const { data } = await update(user)
        console.log({ data })
        // return(data.map(item => item._id == data._id ? data : item));
    }
    // delete
    const onhandleRemove = async (id: number | string) => {

        if (confirm("Bạn Muốn Xóa Ko?") == true) {
            alert("Xóa thành công")
            await remove(id);
            return (data.filter(item => item._id !== id));

        } else {
            return false;
        }
    }
    return {
        dangky,
        dangnhap,
        onhandleRemove,
        onhandleUpdate,
        data,
        error,
        mutate
    }
};

export default useUser;