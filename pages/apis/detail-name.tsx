import {useQuery} from 'react-query';
import axios from 'axios'

const fetchDetail = (id:any) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
}

export const useDetail = (id:any) => {
    return useQuery(['name', id], () => fetchDetail(id))
}