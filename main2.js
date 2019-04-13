// Obtain the root
const rootElement = document.getElementById('root');
// Create a ES6 class component
const socialmedias = ['Facebook', 'Instagram', 'Whatsapp']
// function ShoppingList(props) {
//   return (
//     <div className="shopping-list">
//       <h1>Shopping List for {props.name}</h1>
// 			<List items={socialmedias}/>
//     </div>
//   );  
// } 

const ShoppingList = props => (
	<div className="shopping-list">
		<h1>Shopping List for {props.name}</h1>
		<List items={socialmedias}/>
	</div>
)

// Create a function to wrap up your component

const List = props => (
	<ul>
		{props.items.map((value, i) => <li key={i}>{value}</li>)}
	</ul>
)

// function List(props) {
// 	return (
// 		<ul>
// 			{props.items.map((value, i) => <li key={i}>{value}</li>)}
// 		</ul>
// 	)
// }

const App = () => (
		<div>
			<ShoppingList name="Greg Teixeira"/>
		</div>
)

// function App() {
// 	return (
// 		<div>
// 			<ShoppingList name="@luispagarcia on Dev.to!" />
// 		</div>
// 	);
// }

// Use the ReactDOM.render to show your component on the browser
ReactDOM.render(<App />, rootElement);
