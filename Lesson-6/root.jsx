

/*Exercise 1
root.render(
    <div>
        <p>Welcome Messages</p>
        <ul>
            <li>Welcome Tom from Singapore</li>
            <li>Welcome Jerry from Malaysia</li>
            <li>Welcome Sarah from Indonesia</li>
        </ul>
    </div>)

*/

/* Exercise 2
const Header = () => (
    <p><b>Welcome Messages</b></p>
)

const List = () => (
    <ul>
        <li>Welcome Tom from Singapore</li>
        <li>Welcome Jerry from Malaysia</li>
        <li>Welcome Sarah from Indonesia</li>
    </ul>
)

const App = () => (
    <div>
        <Header />
        <List />
    </div>
)
*/


const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);

const Header = () => (
    <p><b>Welcome Messages</b></p>
)

const List = () => (
    <ul>
        <li>Welcome Tom from Singapore</li>
        <li>Welcome Jerry from Malaysia</li>
        <li>Welcome Sarah from Indonesia</li>
    </ul>
)

const App = () => (
    <div>
        <Header />
        <List />
    </div>
)

root.render(<App />);
