import {useQuery} from 'react-query';
import axios from 'axios';

export const fetchNames = (onSuccess, onError) => {
    return axios.get("https://jsonplaceholder.typicode.com/users")
}

export const ListingName = () => {
    return useQuery("listing-name", fetchNames, {
        select: (data) => {
            const jsonNames = data.data.map((peoples:any) => peoples)
            return jsonNames;
        },
    })
}   