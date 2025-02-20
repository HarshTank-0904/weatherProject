import { useState , useEffect} from 'react';

export const useDate  = () => {
    const locale = 'en';

    const [today , setDate] = useState(new Date()); 

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        },1000);

        return () => {
            clearInterval(timer);
        }
    } , [])

    const day = today.toLocaleDateString(locale , {weekday: 'long'});

const date = today.toLocaleDateString("en-US", {
  weekday: "short", // "Wed"
  month: "short", // "Feb"
  day: "numeric", // "19"
  year: "numeric", // "2025"
});


    const time = today.toLocaleDateString(locale , {hour: 'numeric' , minute: 'numeric' , second: 'numeric' , hour12: true});

    return {
        date,
        time
    }
}

