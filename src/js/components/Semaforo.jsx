import react, {useState, useEffect} from 'react';


const Semaforo = () => {

    const [selectedColor, setSelectedColor] = useState("red");


    //ternario
    return (

            <div className="semaforo">
                <div 
                    onClick={() => setSelectedColor("red")}
                    className={"light red" + (selectedColor === 'red' ? " glow-red" : "")}>
                </div>
                <div 
                    onClick={() => setSelectedColor("yellow")}
                    className={"light yellow" + (selectedColor === 'yellow' ? " glow-yellow" : "")}>
                </div>
                <div 
                    onClick={() => setSelectedColor("green")}
                    className={"light green" + (selectedColor === 'green' ? " glow-green" : "")}>
                </div>
            </div>


    )
}


export default Semaforo