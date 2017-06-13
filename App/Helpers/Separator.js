import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';

const styles = StyleSheet.create({
	separator: {
		height: 1,
		backgroundColor: '#E4E4E4',
		flex: 1,
		marginLeft: 15
	}
});


export default class Profile extends Component {
	render() {
		return (
			<View style={styles.separator} />
		)
	}
}