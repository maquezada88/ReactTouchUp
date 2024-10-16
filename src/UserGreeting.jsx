import PropTypes from 'prop-types';

function UserGreeting(props){

    const welcome = <h2 className="welcome"> Welcome {props.username}</h2>
    const login = <h2 className="login"> Please log in</h2>

    
    return (props.isLoggedIn ? welcome : login)
}


UserGreeting.PropTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreeting