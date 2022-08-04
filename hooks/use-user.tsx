import { toast } from "react-toastify";
import useSWR, { useSWRConfig } from "swr";
import { signin,signup,list } from "../api-client/user";
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

    return {
        dangky,
        dangnhap,
        data,
        error,
        mutate
    }
};

export default useUser;