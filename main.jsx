
(async () => {
	const { Button, Typography, List, ListItem, ListItemText, TextField, Fab } = window['material-ui']
	const { useState } = React
	const rootElement = document.getElementById('root')
	let socialmedias = await fetch('socialmedias.json').then(res => res.text()).then(data => data)
	socialmedias = JSON.parse(socialmedias)
	const Counter = props => {
		const { title } = props
		const [count, setCount] = useState(0)
		const addOne = () => setCount(count + 1)
		const removeOne = () => setCount(count - 1)
		const longPress = () => setCount(count + 10)
		return (
			<div>
				<Typography variant="title">{title}</Typography>
				<br/>
				<Fab color="primary" onClick={addOne} onLongPress={longPress} aria-label="Add" size="small">
					<i className="material-icons">add_circle_outline</i>
				</Fab>
				<Fab color="secondary" onClick={removeOne} aria-label="Add" size="small">
					<i className="material-icons">remove_circle_outline</i>
				</Fab>
				<Typography variant="subtitle1">{count}</Typography>
				<br/>
			</div>
		)
	}

	const ShoppingList = props => (
		<div className="shopping-list">
			<Typography variant="h4">Shopping List for {props.name}</Typography>
			<br/><br/>
			<Lista items={socialmedias}/>
		</div>
	)
	
	const Lista = props => (
		<List>
			{props.items.map((value, i) => (
				<ListItem divider key={i}>
					<ListItemText primary={value}/>
				</ListItem>
			))}
		</List>
	)
	
	const App = () => (
		<div>
			<Counter title="Counter"/>
			<ShoppingList name="Greg Teixeira"/>
		</div>
	)
	ReactDOM.render(<App/>, rootElement)
})()

