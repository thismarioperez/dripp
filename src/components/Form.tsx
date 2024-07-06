import {useCallback, useEffect, useState } from "react"


const calcCoffee : (water: number, ratio: number) => number  = (water, ratio) => {
    return water * ratio;
};

const calcWater : (coffee: number, ratio: number) => number  = (coffee, ratio) => {
    return coffee / ratio;
};

export default function Form() {

    const [state, setState] = useState({
        Ratio: "0.0625",
        Coffee: "",
        Water: "",
    }) 

    const handleChange = useCallback((e) => {
        
        const {target: {value, name}} = e;

        switch (name) {
            case "Ratio":
                setState({
                    ...state,
                    Ratio: value,
                    Water: calcWater(state.Coffee, value),
                })
                break;
            case "Coffee":
                setState({
                    ...state,
                    Coffee: value,
                    Water: calcWater( value, state.Ratio),
                })
                break;
            case "Water":  
                setState({
                    ...state,
                    Water:value,
                    Coffee: calcCoffee( value, state.Ratio),
                })
                break;
            default:
                setState({
                    ...state,            
                    [name]: value,
        
                })
            break;

        }


    }, [state])

    useEffect(()=> {
        console.log(state);
    },[state])

    return <div>
        <form onChange={handleChange} > 
            <label>
                <span>Ratio</span>
                <select name="Ratio" value={state.Ratio}>
                    <option value="0.0625">
                        1:16
                    </option>
                    <option value="0.05882352941">
                        1:17
                    </option>
                    <option value="0.05555555556">
                        1:18
                    </option>                    
                    <option value="0.5">
                        1:2
                    </option>                    
                </select>
            </label>
            <label>
                <span>Coffee</span>
                <input type="number" name="Coffee" value={state.Coffee ?? ""} />
            </label>
            <label>
                <span>Water</span>
                <input type="number" name="Water" value={state.Water ?? ""} />
            </label>
        </form>
    </div>
}