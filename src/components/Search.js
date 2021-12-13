import { useNavigate } from "react-router-dom";
import {useState} from "react"

function Search(){
    const [term, setTerm] = useState('');
    const navigate = useNavigate();

    let goToSearchResults = () => {
        navigate('/search-results?term=' + term);    
    }

    return (
        <div> 
            <input placeholder="Term" onChange={(newValue) => setTerm(newValue.target.value)} value={term} />
            <button onClick={goToSearchResults}>Search</button>
        </div>
    );
};

export default Search;