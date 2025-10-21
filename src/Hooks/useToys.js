// import { useEffect, useState } from "react";

// export const useToys = () => {
//   const [loading, setLoading] = useState(true);
//   const [toys, setToys] = useState([]);
//   useEffect(()=>{
//     setLoading(true)
//     fetch("/toys.json")
//       .then((res) => res.json())
//       .then((data) => setToys(data));
//       setLoading(false)
//     },[])
//   return {toys, loading}
// };
