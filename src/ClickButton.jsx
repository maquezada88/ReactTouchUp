

function ClickButton(){

    let count = 0;

    const handleClick = (e)  => e.target.textContent = "OUCH";

    //const handleClick = (name) => {
     //   if(count < 3){
     //       count++;
     //       console.log('${name} you clicked me ${count} time/s');
     //   }
     //   else{
     //       console.log('${name} stop clicking me');
     //   }
    //};
        
    return(
        <button onClick={(e) => handleClick(e)}> Click Me</button>
    )

}

export default ClickButton