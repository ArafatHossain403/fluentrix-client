import { useQuery } from '@tanstack/react-query'

import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useCourseCart = () => {
    const { user, loading } = useAuth();
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: coursesCart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/coursesCart?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [coursesCart, refetch]

}
export default useCourseCart;