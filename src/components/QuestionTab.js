import React, { Component } from 'react';
import { 
	Text, 
	View,
	Button
} from 'react-native';

class QuestionTab extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			point: false, 
			value: '', 
			buttonColor1: 'green',
			buttonColor2: 'green',
			buttonColor3: 'green',
			buttonColor4: 'green' 
		};
	}


	pushButton1() {
		this.setState({ buttonColor1: 'orange' });
		this.setState({ buttonColor2: 'green' });
		this.setState({ buttonColor3: 'green' });
		this.setState({ buttonColor4: 'green' });
		this.props.pointCounter(1);
	}
	pushButton2() {
		this.setState({ buttonColor1: 'green' });
		this.setState({ buttonColor2: 'orange' });
		this.setState({ buttonColor3: 'green' });
		this.setState({ buttonColor4: 'green' });
		this.props.pointCounter(2);
	}
	pushButton3() {
		this.setState({ buttonColor1: 'green' });
		this.setState({ buttonColor2: 'green' });
		this.setState({ buttonColor3: 'orange' });
		this.setState({ buttonColor4: 'green' });
		this.props.pointCounter(3);
	}
	pushButton4() {
		this.setState({ buttonColor1: 'green' });
		this.setState({ buttonColor2: 'green' });
		this.setState({ buttonColor3: 'green' });
		this.setState({ buttonColor4: 'orange' });
		this.props.pointCounter(4);
	}

	render() {
		return (
			<View style={styles.tabStyle}>
				<View>
					<Text>{this.props.aQuiz}</Text>
				</View>
				<View style={styles.buttonsStyle}>
					<View style={styles.buttonStyle}>
						<Button
							onPress={this.pushButton1.bind(this)}
							title={this.props.aWrong1 || 'Answer A'}
							style={styles.buttonStyle}
							color={this.state.buttonColor1}
						/>
					</View>
					<View style={styles.buttonStyle}>
						<Button
							onPress={this.pushButton2.bind(this)}
							title={this.props.aWrong2 || 'Answer B'}
							style={styles.buttonStyle}
							color={this.state.buttonColor2}
						/>
					</View>
					<View style={styles.buttonStyle}>
						<Button
							onPress={this.pushButton3.bind(this)}
							title={this.props.aWrong3 || 'Answer C'}
							style={styles.buttonStyle}
							color={this.state.buttonColor3}
						/>
					</View>
					<View style={styles.buttonStyle}>
						<Button
							onPress={this.pushButton4.bind(this)}
							title={this.props.aRight || 'Answer D'}
							style={styles.buttonStyle}
							color={this.state.buttonColor4}
						/>
					</View>
				</View>
			</View>
		);
	}
}

const styles = {
	tabStyle: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'column',
		borderColor: '#ddd',
		position: 'relative'
	},
	buttonsStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	buttonStyle: {
		marginTop: 8
	}
};

export default QuestionTab;
