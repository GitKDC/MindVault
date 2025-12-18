import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import type { ContentType } from "../types/content";

interface Content {
  _id: string
  type: ContentType;
  link: string;
  title: string;
}

interface contentReturn {
  contents: Content[];
  refresh: () => void;
}

export function useContent(): contentReturn {
    const [ contents, setContents ] = useState<Content[]>([]);

    function refresh () {
         const response = axios.get(`${BACKEND_URL}/api/v1/content`, {
            headers: {
                "Authorization" : localStorage.getItem('token')
            }
        })
            .then((response) => {
                setContents(response.data.contents)
            })

    }
    useEffect( ()=> {
        refresh()
        let interval = setInterval(()=>{
            refresh()
        }, 10000)

        return () => {
            clearInterval(interval)
        }
    }, [])
    

    return {contents, refresh};
}