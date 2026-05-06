function Button({color, setColor}){
    return (
        <button
            onClick={() => setColor(color)}
            className="text-white px-4 py-1 rounded hover:scale-105 duration-200"
            style={{background: color}}
        >
            {color}
        </button>
    )
}

export default Button











