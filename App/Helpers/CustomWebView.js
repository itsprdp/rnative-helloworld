import React, { Component } from 'react';
import {
  View,
  WebView,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F6F6EF',
		flexDirection: 'column'

	},
});

export default class CustomWebView extends Component {
	render() {
		return (
			<View style={styles.container}>
				<WebView source={{uri: this.props.url}} />
			</View>
		)
	}
}

CustomWebView.propTypes = {
	url: React.PropTypes.string.isRequired
}