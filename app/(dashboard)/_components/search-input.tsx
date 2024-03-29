"use client"
import qs from "query-string";
import { Search } from "lucide-react";
import { useDebounceCallback, useDebounceValue } from "usehooks-ts";
import { useRouter } from "next/navigation";
import {
    ChangeEvent,
    useEffect,
    useState
} from "react";
import { Input } from "@/components/ui/input";


export const SearchInput = ()=>{
    const router= useRouter();
    const [Value, setValue] = useState("");
    const debouncedValue= useDebounceValue(Value, 500);
        //debounce to avoid unnecessary API Calls and save resources.
   
    
    const handleChange= (e: ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value);
    }
    //for event handling of text input

       useEffect(() => {
    const url = qs.stringifyUrl({
        url: "/",
        query : {
            search: debouncedValue[0],
        },
    }, { skipEmptyString: true, skipNull: true });

    router.push(url);
}, [debouncedValue, router]);



    return (
        <div className="w-full relative">
        <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4"/>
        <Input 
            className="w-full max-w-[516px] pl-9"
            placeholder="Search Boards"
            onChange={handleChange}
            value={Value}
        />
        </div>
    )
}
