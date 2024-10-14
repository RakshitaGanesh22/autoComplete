import { createContext,useState,useEffect} from "react";
const dataProvider=createContext();
function ContextProvider({children}){
    const [input,setInput]=useState("");
    const data=
    ["apple", "banana", "cherry", "orange", "grape", "mango", "pineapple", "strawberry", "blueberry", "watermelon",
    "peach", "kiwi", "papaya", "plum", "lemon", "lime", "coconut", "pear", "pomegranate", "apricot",
    "blackberry", "raspberry", "cranberry", "guava", "dragonfruit", "lychee", "persimmon", "fig", "grapefruit", "tangerine",
    "avocado", "nectarine", "passionfruit", "starfruit", "date", "gooseberry", "mulberry", "quince", "cantaloupe", "honeydew",
    "tomato", "zucchini", "carrot", "broccoli", "spinach", "lettuce", "cucumber", "pumpkin", "squash", "onion",
    "garlic", "potato", "sweet potato", "radish", "beetroot", "pepper", "eggplant", "cauliflower", "asparagus", "kale",
    "chocolate", "vanilla", "coffee", "tea", "sugar", "salt", "honey", "maple syrup", "olive oil", "butter",
    "bread", "pasta", "rice", "quinoa", "oats", "cereal", "cheese", "milk", "yogurt", "cream",
    "chicken", "beef", "pork", "fish", "shrimp", "salmon", "tuna", "egg", "bacon", "sausage",
    "cake", "cookie", "brownie", "cupcake", "pie", "ice cream", "pudding", "candy", "chocolate bar", "lollipop",
    "soda", "juice", "water", "lemonade", "smoothie", "milkshake", "beer", "wine", "whiskey", "rum"]
  
      const [filteredData,setFiltered]=useState([]);
      const[highlighted,setHighlighted]=useState("");
      const[loading,setLoading]=useState(true);
      const error="no data found";
      const[value,setValue]=useState("");
      function handleInputChange(e){
        setLoading(false);
        setInput(e.target.value);
        
      }
      
       useEffect(()=>{
        function Filterdata(){
            console.log(data);
            const filtered=data.filter((item)=>{
                if(item.includes(input)){
                    console.log(item);
                    return item;
                }})
                console.log(filtered);
                setFiltered(filtered);
          }
          Filterdata();
       },[input])
      return(
        <dataProvider.Provider value={{input,
        setInput,data,
        filteredData,setFiltered,
        highlighted,setHighlighted,
        loading,setLoading,
        handleInputChange,error,
        value,setValue}}>
            {children}
        </dataProvider.Provider>
      )
} 
export {dataProvider,ContextProvider};