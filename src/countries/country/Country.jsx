import './country.css'

const Country = (props) => {
    
    return (
        <div>
           <div className='border-black p-4 bg-green-300 m-4 text-center'>
           <p>Country: {props.country}</p>
            <img className='w-auto h-40 mx-auto' src={props.flags} alt="" />
            <p>Population: {props.population}</p>
            <p>Area: {props.area}</p>
           </div>
        </div>
    );
};

export default Country;