import '../styles/components/Input.css';

const Input = ({title, value, onChange}) => {
    return (
        <>
            <label>
                {title}
                <input type="text" value={value} onChange={onChange} />
            </label>
        </>
    );
};

export default Input;
