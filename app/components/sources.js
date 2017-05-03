import React from 'react';
const axios = require('axios');


function getNewsFeed() {

	var encodedURI = window.encodeURI('https://newsapi.org/v1/sources?language=en');

	return axios.get(encodedURI)
	  .then((res) => {
	  	return res;
	  });

}

function newSource(props) {
  return (
	   <ul>
		  {props.sour.map((news, index) => {
			return (
			<li> {news.sources[0].name} </li>
				)
			})}

			</ul>
	)
}

class Sources extends React.Component {

	constructor(props) {
		super(props);

		this.state = ({sour:null});

		this.updateNewsFeed = this.updateNewsFeed.bind(this);

	}

	componentDidMount() {
		this.updateNewsFeed();
	}

	updateNewsFeed() {
	   	getNewsFeed().then((result) => {
			this.setstate({sour:result});
	});
  }
	

	render() {
		return (
			<div>
			<newSource sour={this.updateNewsFeed}/>
			</div>

			)
	}

}
export default Sources;


