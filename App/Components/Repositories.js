import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight
 } from 'react-native';

import Badge from './Badge';
import Separator from '../Helpers/Separator';
import CustomWebView from '../Helpers/CustomWebView';

export default class Repositories extends Component {
	openPage(url) {
		this.props.navigator.push({
			component: CustomWebView,
			title: 'Web View',
			passProps: {url}
		});
	}

	render() {
		var repos = this.props.repos;

		var list = repos.map((item, index) => {
			var desc = repos[index].description ? <Text style={styles.description}> {repos[index].description} </Text> : <View />

			return (
				<View key={index}>
					<View style={styles.rowContainer}>
						<TouchableHighlight
							onPress={this.openPage.bind(this, repos[index].html_url)}
							underlayColor='transparent'>
							<Text style={styles.name}>{repos[index].name}</Text>
						</TouchableHighlight>

						<Text style={styles.stars}> Stars: {repos[index].stargazers_count} </Text>
						{desc}
					</View>
					<Separator />
				</View>
			)
		});

		return (
			<ScrollView style={styles.container}>
				<Badge userInfo={this.props.userInfo} />
				{list}
			</ScrollView>
		)
	}
}

Repositories.propTypes = {
	userInfo: React.PropTypes.object.isRequired,
	repos: React.PropTypes.array.isRequired
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	rowContainer: {
		padding: 10,
		flexDirection: 'column',
		flex: 1
	},
	name: {
		color: '#48BBEC',
		fontSize: 18,
		paddingBottom: 5
	},
	stars: {
		color: '#48BBEC',
		fontSize: 14,
		paddingBottom: 5
	},
	description: {
		fontSize: 14,
		paddingBottom: 5
	}
});