
function Items({ittt, onToggle}){

    return(
        <div>
            {ittt.map((tt) => (<div key={tt.id}  onClick={() => onToggle(tt.id)}> 

                <h1 className={`task ${tt.state ? 'added' : ' '} `}>{tt.name}</h1>
                <h2>{tt.age}</h2>
                <h3>{tt.hobby}</h3>
                <h3>{tt.state}</h3>

            </div>))}
        </div>
    );

}



export default Items;