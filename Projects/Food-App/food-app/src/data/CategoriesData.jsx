import All from "../assets/svg/all.svg"
import Breakfast from "../assets/svg/breakfast.svg"
import Soup from "../assets/svg/soup.svg"
import MainCousre from "../assets/svg/maincourse.svg"
import Burger from "../assets/svg/burger.svg"
import Pizza from "../assets/svg/pizza.svg"
import Pasta from "../assets/svg/pasta.svg"

const CategoriesData = [
    {
        id : 1,
        name : "All",
        category : "all",
        icon : <img src={All} alt="All" height={"50vh"} />,
    },
    {
        id : 2,
        name : "Breakfast",
        category : "breakfast",
        icon : <img src={Breakfast} alt="Breakfast" height={"50vh"} />,
    },
    {
        id : 3,
        name : "Soup",
        category : "soup",
        icon : <img src={Soup} alt="Soup" height={"50vh"} />,
    },
    {
        id : 4,
        name : "Main Course",
        category : "main_course",
        icon : <img src={MainCousre} alt="MainCourse" height={"50vh"} />,
    },
    {
        id : 5,
        name : "Burger",
        category : "burger",
        icon : <img src={Burger} alt="Burger" height={"50vh"} />,
    },
    {
        id : 6,
        name : "Pizza",
        category : "pizza",
        icon : <img src={Pizza} alt="Pizza" height={"50vh"} />,
    },
    {
        id : 7,
        name : "Pasta",
        category : "pasta",
        icon : <img src={Pasta} alt="Pasta" height={"50vh"} />,
    },
]

export default CategoriesData;