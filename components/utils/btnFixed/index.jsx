function BotaoFixed (props) {

    return(
        <a 
            href={props.link} 
            className={`${props.color} rounded-full p-2 transition-all ease-linear bg-gray-800 text-2xl hover:scale-125`}
        >
            {props.children}
        </a>
    )
}

export default BotaoFixed