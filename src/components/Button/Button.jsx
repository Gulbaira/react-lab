import './Button.css'

export const Button = (props) => {
    console.log('props', props)

    const handleClick = () => {
        alert('Clicked')
        
    }
    const name = props.name
    return(
        <button className='button-container' onClick={handleClick}>
            {props.children || name}
            </button>
    )

}