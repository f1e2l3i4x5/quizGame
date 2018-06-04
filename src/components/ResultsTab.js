import React, { Component } from 'react';
import { 
	Text, 
	View
} from 'react-native';

class ResultsTab extends Component {
	render() {
		return (
			<View style={styles.tabStyle}>
				<Text>YOUR RESULTS: {this.props.results}</Text>
				<Text>TIME SPENT: {this.props.time} sec</Text>
			</View>
		);
	}
}

const styles = {
	tabStyle: {
		backgroundColor: 'lightgrey',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center'
	}
};

export default ResultsTab;
