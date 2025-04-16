const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);

const ClassRoom = () => {
    const users = [
        {name: "Tom", country: "Singapore"},
        {name: "Jerry", country: "Malaysia"},
        {name: "Sarah", country: "Indonesia"}
    ];
    
    return users.map(
        (person) => Welcome ${person.name} from ${person.country} \n
    );
}

root.render (<ClassRoom />);