const skills=({skiils})=>{
    return (
        <div>
            <h1>skills</h1>
            <ul>
                {skill.map((s,index)=>
                <li key={index}>{s}</li>)}
            </ul>
        </div>
    )
}
export default skills