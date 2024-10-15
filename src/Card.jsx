import profilepic from './assets/ghpic.png'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilepic} alt="Profile Pic"></img>
            <h2 className="card-title" >MAQ</h2>
            <p className='card-text'>Grinder</p>
        </div>
    );
}

export default Card