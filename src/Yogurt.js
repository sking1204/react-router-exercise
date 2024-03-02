import {Link} from 'react-router-dom'

function Yogurt (){
    return(
        <div>
            <h1>Healthy yogurt!!</h1>
            <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGF2MDU5dXIzb2g1N3BlMTUybWppd3NhMGFoam5qdG9rbTB0bGp2MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ajdQmxda8kfXeZlXdO/giphy.gif"
            alt="Yogurt with raspberries"
            
            />
            <p>Back to <Link to="/">Home</Link> </p>
        </div>
    )

}

export default Yogurt;





