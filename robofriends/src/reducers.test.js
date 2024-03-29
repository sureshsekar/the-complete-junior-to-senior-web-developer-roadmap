import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants";

import * as reducers from './reducers'

describe('searchRoots', () => {
	const initialStateSearch = {
		searchField: ''
	}
	it('should return the inital state', () => {
		expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' })
	})
	it('should handle a CHANGE_SEARCH_FIELD', () => {
		expect(reducers.searchRobots(initialStateSearch, {
			type: CHANGE_SEARCH_FIELD,
			payload: 'abc'
		})).toEqual({
			searchField: 'abc'
		})
	})

})





describe('requestRobots', () => {



	const initialStateRobots = {
		robots: [],
		isPending: false
	}

	it('should return the initial state', () => {
		expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
	})


it('should handle REQUEST_ROBOTS_PENDING action', () => {
	expect(reducers.requestRobots(initialStateRobots, {
		type: REQUEST_ROBOTS_PENDING
	})).toEqual({
		robots: [],
		isPending: true
	})
})


it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
	expect(reducers.requestRobots(initialStateRobots, {
		type: REQUEST_ROBOTS_SUCCESS,
		payload: [{
			id: '123',
			name: 'test',
			email: 'test@gmail.com'
		}]
	})).toEqual({
		robots: [{
			id: '123',
			name: 'test',
			email: 'test@gmail.com'
		}],
		isPending: false
	})
})

it('should handle REQUEST_ROBOTS_FAILED action', () => {
	expect(reducers.requestRobots(initialStateRobots, {
		type: REQUEST_ROBOTS_FAILED,
		payload: 'NOOOOOO!!!'
	})).toEqual({
		error: 'NOOOOOO!!!',
		robots: [],
		isPending: false
	})
})




})




























