import {Link} from 'react-router-dom'

function Cookies (){
    return(
        <div>
            <h1>More cookies plz!!</h1>
            <img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGVrZmQ4Znd6MjZhbG9zMWRiYnkwdnRwNmE0MXBqYXlpdTI4NzM3NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Y09s2Frxp7wpBGXTyt/giphy.gif"
            alt="Stack of cookies"
            
            />
            <p>Back to <Link to="/">Home</Link> </p>
        </div>
    )

}

export default Cookies;





