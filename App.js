import React, { Component } from 'react';
import {
  View,
  Button,
  ScrollView
} from 'react-native';
import axios from 'axios';
import QuestionTab from './src/components/QuestionTab';
import ResultsTab from './src/components/ResultsTab';

const url = 'https://opentdb.com/api.php?amount=10';

class App extends Component {
	constructor(props) {
		super(props);

		this.initialState = {
			quiz: {}, 
			wrong: [
				['', '', ''], 
				['', '', ''], 
				['', '', ''], 
				['', '', ''], 
				['', '', ''],
				['', '', ''],
				['', '', ''],
				['', '', ''],
				['', '', ''],
				['', '', ''],  
			],
			right: [], 
			counter: 0, 
			track: 10,
			finish: false,
			timeStart: null,
			timeFinish: null
		};

		this.state = this.initialState;
	}

	componentDidUpdate() {
		//console.log(this.state.timeFinish);
	}

	getData() {
		axios.get(url)
			.then((response) => {
				this.setState({ timeStart: new Date().getTime() });
				console.log(this.state.timeStart);

				const mappedQuiz = response.data.results.map((record) => record.question);
				this.setState({ quiz: mappedQuiz });
				//console.log(this.state.quiz);

				const mappedWrong = response.data.results.map((record) => record.incorrect_answers);
				this.setState({ wrong: mappedWrong });
				//console.log(this.state.wrong);

				const mappedRight = response.data.results.map((record) => record.correct_answer);
				this.setState({ right: mappedRight });	
				//console.log(this.state.right);		
			})
			.catch((error) => {
				console.log(error);
			});
	}

	pointCounter1 = (point) => {
		console.log(point);
		if (this.state.track > 1) {
			this.setState(prevState => ({ track: prevState.track - 1 }));
		} else { 
			this.setState(prevState => ({ track: prevState.track - 1 }));
			this.setState({ finish: true });
			this.setState({ timeFinish: new Date().getTime() });
		}
		if (point === 4) {
			this.setState(prevState => ({ counter: prevState.counter + 1 }));
		}
	}
	pointCounter2 = (point) => {
		console.log(point);
		if (this.state.track > 1) {
			this.setState(prevState => ({ track: prevState.track - 1 }));
		} else { 
			this.setState(prevState => ({ track: prevState.track - 1 }));
			this.setState({ finish: true });
			this.setState({ timeFinish: new Date().getTime() });
		}
		if (point === 4) {
			this.setState(prevState => ({ counter: prevState.counter + 1 }));
		}
	}
	pointCounter3 = (point) => {
		console.log(point);
		if (this.state.track > 1) {
			this.setState(prevState => ({ track: prevState.track - 1 }));
		} else { 
			this.setState(prevState => ({ track: prevState.track - 1 }));
			this.setState({ finish: true });
			this.setState({ timeFinish: new Date().getTime() });
		}
		if (point === 4) {
			this.setState(prevState => ({ counter: prevState.counter + 1 }));
		}
	}
	pointCounter4 = (point) => {
		console.log(point);
		if (this.state.track > 1) {
			this.setState(prevState => ({ track: prevState.track - 1 }));
		} else { 
			this.setState(prevState => ({ track: prevState.track - 1 }));
			this.setState({ finish: true });
			this.setState({ timeFinish: new Date().getTime() });
		}
		if (point === 4) {
			this.setState(prevState => ({ counter: prevState.counter + 1 }));
		}
	}
	pointCounter5 = (point) => {
		console.log(point);
		if (this.state.track > 1) {
			this.setState(prevState => ({ track: prevState.track - 1 }));
		} else { 
			this.setState(prevState => ({ track: prevState.track - 1 }));
			this.setState({ finish: true });
			this.setState({ timeFinish: new Date().getTime() });
		}
		if (point === 4) {
			this.setState(prevState => ({ counter: prevState.counter + 1 }));
		}
	}
	pointCounter6 = (point) => {
		console.log(point);
		if (this.state.track > 1) {
			this.setState(prevState => ({ track: prevState.track - 1 }));
		} else { 
			this.setState(prevState => ({ track: prevState.track - 1 }));
			this.setState({ finish: true });
			this.setState({ timeFinish: new Date().getTime() });
		}
		if (point === 4) {
			this.setState(prevState => ({ counter: prevState.counter + 1 }));
		}
	}
	pointCounter7 = (point) => {
		console.log(point);
		if (this.state.track > 1) {
			this.setState(prevState => ({ track: prevState.track - 1 }));
		} else { 
			this.setState(prevState => ({ track: prevState.track - 1 }));
			this.setState({ finish: true });
			this.setState({ timeFinish: new Date().getTime() });
		}
		if (point === 4) {
			this.setState(prevState => ({ counter: prevState.counter + 1 }));
		}
	}
	pointCounter8 = (point) => {
		console.log(point);
		if (this.state.track > 1) {
			this.setState(prevState => ({ track: prevState.track - 1 }));
		} else { 
			this.setState(prevState => ({ track: prevState.track - 1 }));
			this.setState({ finish: true });
			this.setState({ timeFinish: new Date().getTime() });
		}
		if (point === 4) {
			this.setState(prevState => ({ counter: prevState.counter + 1 }));
		}
	}
	pointCounter9 = (point) => {
		console.log(point);
		if (this.state.track > 1) {
			this.setState(prevState => ({ track: prevState.track - 1 }));
		} else { 
			this.setState(prevState => ({ track: prevState.track - 1 }));
			this.setState({ finish: true });
			this.setState({ timeFinish: new Date().getTime() });
		}
		if (point === 4) {
			this.setState(prevState => ({ counter: prevState.counter + 1 }));
		}
	}
	pointCounter10 = (point) => {
		console.log(point);
		if (this.state.track > 1) {
			this.setState(prevState => ({ track: prevState.track - 1 }));
		} else { 
			this.setState(prevState => ({ track: prevState.track - 1 }));
			this.setState({ finish: true });
			this.setState({ timeFinish: new Date().getTime() });
		}
		if (point === 4) {
			this.setState(prevState => ({ counter: prevState.counter + 1 }));
		}
	}

	drawQuiz() {
		return ( 
			<ScrollView>
				<View style={styles.quizStyle}>
					<QuestionTab 
						aQuiz={this.state.quiz[0]} 
						aWrong1={this.state.wrong[0][0] || 'Answer A'}
						aWrong2={this.state.wrong[0][1] || 'Answer B'}
						aWrong3={this.state.wrong[0][2] || 'Answer C'}
						aRight={this.state.right[0]}
						pointCounter={this.pointCounter1} 
					/>
				</View>
				<View style={styles.quizStyle}>
					<QuestionTab 
						aQuiz={this.state.quiz[1]} 
						aWrong1={this.state.wrong[1][0] || 'Answer A'}
						aWrong2={this.state.wrong[1][1] || 'Answer B'}
						aWrong3={this.state.wrong[1][2] || 'Answer C'}
						aRight={this.state.right[1] || 'Answer D'}
						pointCounter={this.pointCounter2} 
					/>
				</View>
				<View style={styles.quizStyle}>
					<QuestionTab 
						aQuiz={this.state.quiz[2]} 
						aWrong1={this.state.wrong[2][0] || 'Answer A'}
						aWrong2={this.state.wrong[2][1] || 'Answer B'}
						aWrong3={this.state.wrong[2][2] || 'Answer C'}
						aRight={this.state.right[2] || 'Answer D'}
						pointCounter={this.pointCounter3} 
					/>
				</View>
				<View style={styles.quizStyle}>
					<QuestionTab 
						aQuiz={this.state.quiz[3]}  
						aWrong1={this.state.wrong[3][0] || 'Answer A'}
						aWrong2={this.state.wrong[3][1] || 'Answer B'}
						aWrong3={this.state.wrong[3][2] || 'Answer C'}
						aRight={this.state.right[3] || 'Answer D'}
						pointCounter={this.pointCounter4} 
					/>
				</View>
				<View style={styles.quizStyle}>
					<QuestionTab 
						aQuiz={this.state.quiz[4]} 
						aWrong1={this.state.wrong[4][0] || 'Answer A'}
						aWrong2={this.state.wrong[4][1] || 'Answer B'}
						aWrong3={this.state.wrong[4][2] || 'Answer C'}
						aRight={this.state.right[4] || 'Answer D'}
						pointCounter={this.pointCounter5} 
					/>
				</View>
				<View style={styles.quizStyle}>
					<QuestionTab 
						aQuiz={this.state.quiz[5]} 
						aWrong1={this.state.wrong[5][0] || 'Answer A'}
						aWrong2={this.state.wrong[5][1] || 'Answer B'}
						aWrong3={this.state.wrong[5][2] || 'Answer C'}
						aRight={this.state.right[5] || 'Answer D'}
						pointCounter={this.pointCounter6} 
					/>
				</View>
				<View style={styles.quizStyle}>
					<QuestionTab 
						aQuiz={this.state.quiz[6]} 
						aWrong1={this.state.wrong[6][0] || 'Answer A'}
						aWrong2={this.state.wrong[6][1] || 'Answer B'}
						aWrong3={this.state.wrong[6][2] || 'Answer C'}
						aRight={this.state.right[6] || 'Answer D'}
						pointCounter={this.pointCounter7} 
					/>
				</View>
				<View style={styles.quizStyle}>
					<QuestionTab 
						aQuiz={this.state.quiz[7]} 
						aWrong1={this.state.wrong[7][0] || 'Answer A'}
						aWrong2={this.state.wrong[7][1] || 'Answer B'}
						aWrong3={this.state.wrong[7][2] || 'Answer C'}
						aRight={this.state.right[7] || 'Answer D'}
						pointCounter={this.pointCounter8} 
					/>
				</View>
				<View style={styles.quizStyle}>
					<QuestionTab 
						aQuiz={this.state.quiz[8]} 
						aWrong1={this.state.wrong[8][0] || 'Answer A'}
						aWrong2={this.state.wrong[8][1] || 'Answer B'}
						aWrong3={this.state.wrong[8][2] || 'Answer C'}
						aRight={this.state.right[8] || 'Answer D'}
						pointCounter={this.pointCounter9} 
					/>
				</View>
				<View style={styles.quizStyle}>
					<QuestionTab 
						aQuiz={this.state.quiz[9]} 
						aWrong1={this.state.wrong[9][0] || 'Answer A'}
						aWrong2={this.state.wrong[9][1] || 'Answer B'}
						aWrong3={this.state.wrong[9][2] || 'Answer C'}
						aRight={this.state.right[9] || 'Answer D'}
						pointCounter={this.pointCounter10} 
					/>
				</View>
			</ScrollView>
		);
	}

	restart() {
		this.setState({ 
			quiz: {}, 
			wrong: [
				['', '', ''], 
				['', '', ''], 
				['', '', ''], 
				['', '', ''], 
				['', '', ''],
				['', '', ''],
				['', '', ''],
				['', '', ''],
				['', '', ''],
				['', '', ''],  
			],
			right: [], 
			counter: 0, 
			track: 10,
			finish: false,
			timeStart: null,
			timeFinish: null
		});
		console.log(this.state.timeStart);
	}

	render() {
		const finished = this.state.finish;
		const tab = finished ? (
			<ResultsTab 
				results={this.state.counter} 
				time={(this.state.timeFinish - this.state.timeStart) / 1000} 
			/>
		) : (
			<ResultsTab results='FINISH the QUIZ' />
		);

		return (
			<ScrollView style={styles.quizStyle}>
				<View style={styles.quizStyle}>
					<Button 
						onPress={this.getData.bind(this)}
						title='Start Quiz'
						style={styles.buttonStyle}
					/>
				</View>
				<View style={styles.quizStyle}>
					{this.drawQuiz()}
				</View>
				<View>
					{tab}
				</View>
				<View style={styles.quizStyle}>
					<Button 
						onPress={this.restart.bind(this)}
						title='Play Again'
						style={styles.buttonStyle}
					/>
				</View>
			</ScrollView>
		);
	}
}

const styles = {
	quizStyle: {
		margin: 5	
	},
	buttonStyle: {
		height: 10
	}
};

export default App;
