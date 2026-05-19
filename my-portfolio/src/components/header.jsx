export default function Header({name,message}){
    return(
        <header>
        <h1>Welcom {name}</h1>
        <p>{message}</p>
        </header>
    )
}