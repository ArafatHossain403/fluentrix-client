import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useCourseCart = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: coursesCart = [] } = useQuery({
        queryKey: ['coursesCart', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/coursesCart?email=${user?.email}`)
            return res.json();
        },
    })

    return [coursesCart, refetch]

}
export default useCourseCart;