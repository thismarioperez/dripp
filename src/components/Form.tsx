import { useEffect, useState } from "react"

export default function Form() {

    const [state, setState] = useState({
    }) 

    const handleChange = (e) => {
        
        const {target: {value, name}} = e;

        console.log(value);
        console.log(name);

        setState({

            ...state,            
            [name]:value,

        })

    }

    useEffect(()=> {
        console.log(state);
    },[state])

    return <div>
        <form onChange={handleChange} > 
            <label>
                <span>Coffee</span>
                <input type="number" name="Coffee" value={state.Coffee} />
            </label>
            <label>
                <span>Water</span>
                <input type="number" name="Water" value={state.Water ?? ""} />
            </label>
            <label>
                <span>Ratio</span>
                <select name="Ratio" value={state.Ratio ?? ""}>
                    <option value="0.0625">
                        1:16
                    </option>
                    <option value="0.05882352941">
                        1:17
                    </option>
                    <option value="0.05555555556">
                        1:18
                    </option>                    
                </select>
            </label>
            <label>
                <span>Yield</span>
                <input type="number" name="Yield" value={state.Yield ?? ""}/>
            </label>
        </form>
    </div>
}