export function TeamMembers(props) {
    return(
        <div        
            style={{
            maxWidth: "200px",
            backgroundColor: "#f9f9f9",
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(197, 15, 15, 0.48)",
            textAlign: "center",
            color: "black",
            
        
        }}>
            <p>Hello my name is {props.name}</p>
            <p>I am {props.age} years old</p>
            <p>I have a {props.pet}</p>
        </div>
    )
}
