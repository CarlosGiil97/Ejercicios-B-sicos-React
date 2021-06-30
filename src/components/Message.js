const Message = ({msg,bgColor}) => {
    let styles = {
        padding: "1rem",
        marginBottom:"1rem",
        textAlign:"center",
        color:"#fff",
        fontWeight:"bold",
        backgroundColor:bgColor,
        borderRadius:"0.5rem"

    }
    return (
        <div style={styles}>
            <p>
                {console.log(styles)}
                {msg}
            </p>
        </div>
    )
}

export default Message
