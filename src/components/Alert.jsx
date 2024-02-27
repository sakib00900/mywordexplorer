
const alert = (props) => {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height : "18px"}}>{
        props.alert && <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
             
            </div>
        </div> } 
        </div>
    )
}

export default alert
