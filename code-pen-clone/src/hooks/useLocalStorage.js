import { useEffect, useState } from "react";

const PREFIX = 'code-pen'
export default function useLocalStorage (key, intitalValue){
    const PrefixKey = PREFIX + key;


    const [value, setValue] = useState(()=>{
       const jsonValue = localStorage.getItem(PrefixKey);
       if(jsonValue === "undefined") return;
       if(jsonValue!= null) return JSON.parse(jsonValue);
       

       if(typeof intitalValue === 'function'){
        return intitalValue();
       }
       else{
          return intitalValue;
       }


    });

    useEffect(()=>{
        localStorage.setItem(PrefixKey, JSON.stringify(value))
    }, [PrefixKey, value])

    return [value, setValue]
}