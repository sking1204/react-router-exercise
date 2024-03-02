import {Link} from 'react-router-dom'

function Chips (){
    return(
        <div>
            <h1>Chips!!</h1>
            <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTZkemhkMjRqazY4NXNoNzEwZnlpaGcyYmZtazJ4MWl2c3luOHk5eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZhHIWHdTjvXKPGgHSq/giphy.gif"
            alt="Shaking a bag of chips"
            
            />
        <p>Back to <Link to="/">Home</Link> </p>
        </div>
    )

}

export default Chips;