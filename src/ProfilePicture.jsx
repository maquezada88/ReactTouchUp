
function ProfilePicture(){

    const imgurl = './src/assets/ghpic.png';

    const handleClick = (e) => e.target.style.display = "none";

    return(
        <img src={imgurl} onClick={(e) => handleClick(e)}></img>
    )

}

export default ProfilePicture