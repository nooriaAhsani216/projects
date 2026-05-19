import NAVBAR_DATA from "../data/navbar" 
export default function Navbar(){
return(
    <nav className="shadow-md">
        <ul>
           {NAVBAR_DATA.links.map((item,i) => {
            return(
                <li key={i}>{item}</li>
            )
           })}
        </ul>
    </nav>
)
}