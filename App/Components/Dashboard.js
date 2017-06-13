import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import Profile from './Profile';
import Repositories from './Repositories';
import github from '../Utils/github';

export default class Dashboard extends Component {
	goToProfile() {
		this.props.navigator.push({
			title: 'Profile Page',
			component: Profile,
			passProps: {userInfo: this.props.userInfo}
		});
	}

	goToRepos() {
		github.getRepos(this.props.userInfo.login)
			.then((res) => {
				this.props.navigator.push({
					title: 'Repos',
					component: Repositories,
					passProps: {
						userInfo: this.props.userInfo,
						repos: res
					}
				});
			});
	}

	goToNotes() {

	}

	makeBackground(btn) {
		var obj = {
			flexDirection: 'row',
			alignSelf: 'stretch',
			justifyContent: 'center',
			flex: 1
		}

		if (btn === 0) {
			obj.backgroundColor = "#48BBEC";
		} else if(btn === 1) {
			obj.backgroundColor = "#E77AAE";
		} else {
			obj.backgroundColor = "#758BF4";
		}

		return obj;
	}

	render() {
		return(
			<View style={styles.container}>
				<Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image} />
				<TouchableHighlight
					style={this.makeBackground(0)}
					onPress={this.goToProfile.bind(this)}
					underlayColor="#88D4F5">
					<Text style={styles.buttonText}> View Profile </Text>
				</TouchableHighlight>
				<TouchableHighlight
					style={this.makeBackground(1)}
					onPress={this.goToRepos.bind(this)}
					underlayColor="#88D4F5">
					<Text style={styles.buttonText}> View Repos </Text>
				</TouchableHighlight>
				<TouchableHighlight
					style={this.makeBackground(2)}
					onPress={this.goToNotes.bind(this)}
					underlayColor="#88D4F5">
					<Text style={styles.buttonText}> View Notes </Text>
				</TouchableHighlight>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		marginTop: 65,
		flex: 1
	},
	image: {
		height: 350
	},
	buttonText: {
		fontSize: 24,
		color: 'white',
		alignSelf: 'center'
	}
});