import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchSong from '../queries/fetchSong';
import LyricCreate from './LyricCreate'
import LyricList from './LyricList'

class SongDetail extends Component {	
	render() {
		const { song } = this.props.data;

		if (!song) {
			return (
				<div>loading...</div>
			)
		}
		return (
			<div>
				<Link to="/">back</Link>
				<h3>{song.title}</h3>
				<LyricList lyrics={song.lyrics} />
				<LyricCreate songId={this.props.params.id} />
			</div>
		);
	}
}

// intercept props in graphql side before sending to component
// use it when you want to get params from url and pass it to query
export default graphql(fetchSong, {
	options: props => ({ variables: { id: props.params.id } })
})(SongDetail);