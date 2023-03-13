function SearchField({users}){

    const [inp,setInp] = useState('');

    const handleChange = (event) => {
        const { value } = event.target;
        setInp(value);
      };

    return (
        <div>
            <input type='search' onChange={handleChange} />
        </div>
    )
}

export const inp;