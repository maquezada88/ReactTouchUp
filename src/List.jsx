import PropTypes from 'prop-types';

function List(props){

    const itemList = props.items;
    const category = props.category;
    
    //const fruits =[{id: 1, name: "apple", calories: 95}, {id: 2, name:"orange", calories: 45}, 
    //    {id: 3, name:"banana", calories: 105}, {id: 4, name:"cocount", calories: 159}, 
    //    {id: 5, name: "pineapple", calories: 37}];

   // const veggies =[{id: 1, name: "potatoes", calories: 95}, {id: 2, name:"celery", calories: 45}, 
     //   {id: 3, name:"carrots", calories: 105}, {id: 4, name:"corn", calories: 159}, 
       // {id: 5, name: "tomatoes", calories: 37}];

        //fruits.sort((a,b)=> a.name.localeCompare(b.name))
        //fruits.sort((a,b) => a.calories - b.calories);

    const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; 
                                            <b>{item.calories}</b>.</li>);
    
        

    return (<>
    <h3 className= "category"> {category} </h3>
    <ul className="items"> {listItems} </ul>
    </>);

}

List.PropTypes = {
    categor: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number}))
}

List.defaultProps = {
    category: "Category",
    items: [],
}

export default List