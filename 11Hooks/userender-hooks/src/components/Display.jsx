export default function Display({list})
{
    return <>
        <ul>
            {list.map ( (item) => <li key={item} >{item} </li>)}
        </ul>
    </>
}