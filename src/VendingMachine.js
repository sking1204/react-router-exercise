import NavBar from "./Navbar";

function VendingMachine (){
    return(
        <div className="vending-machine">
            <div className="vending-machine-title">
            <h2>HELLO I AM A VENDING MACHINE.
             WHAT WOULD YOU LIKE TO EAT?</h2>
            </div>  
            <div>{<NavBar/>} </div>            
            
            
            <img
            src="https://media.istockphoto.com/id/533727796/photo/vending-machine.jpg?s=612x612&w=0&k=20&c=CWPGUCRaUiqegGA5pmT4jIRQBN6v16ziwB7iN3DHoxo="
            alt="Image of vending machine"
            
            />
        </div>
    )

}

export default VendingMachine;