import './App.scss';
import Button from './components/Button/Button';
import CardButton from './components/Button/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';

function App() {

	return (
		<>
			<h1>Заголовок</h1>
			<Button/>
			{/* <main> */}
			<CardButton>
				<JournalItem/>
			</CardButton>
			{/* </main> */}
		</>
	);
}

export default App;
