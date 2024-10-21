import React, {useState, useEffect} from 'react'

function ComponenetUseEffect(){

        const [count, setCount] = useState(0);
        const [color, setColor] = useState("Green");

        const [width, setWdith] = useState(window.innerWidth);
        const [height, setHeight] = useState(window.innerHeight);

        useEffect(() => {
            document.title = 'counter:'+ count +color;
        }, [count, color]);

        useEffect(()=>{
            window.addEventListener("resize", handleResize);

            return () => {
                window.removeEventListener("resize", handleResize);
            }
        }, []);


        
        function addCount(){
            setCount(prevCount => prevCount +1);
        }

        function subtractCount(){
            setCount(prevCount=>prevCount-1);
        }

        function changeColor(){
            setColor(prevColor => prevColor === 'Green' ? "Red" : "Green");
        }

        function handleResize(){
            setWdith(window.innerWidth);
            setHeight(window.innerHeight);


        }

        return(
            <>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button>

            <br/>

            <button onClick={changeColor}> Change Color </button>

            <p>window width: {width}px</p>
            <p>Window height; {height}px</p>
            </>
        )


}

export default ComponenetUseEffect