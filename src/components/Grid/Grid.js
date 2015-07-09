/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, ... add your name
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import './Grid.less';
import React, { PropTypes } from 'react';
import _ from 'underscore'

export default class Grid extends React.Component {
	render() {
		const headers = _.chain(this.props.headers)
			.map((eachRow) => {
				const row = _.chain(eachRow)
					.map((eachElement) => <td>{eachElement}</td>)
				return <tr>{row}</tr>
			})
		const rows = _.chain(this.props.rows)
			.map((eachRow) => {
				const row = _.chain(eachRow)
					.map((eachElement) => <td>{eachElement}</td>)
				return <tr>{row}</tr>
			})
		return (
			<table>
				<thead>{headers}</thead>
				<tbody>{rows}</tbody>
			</table>
		)
	}
}
