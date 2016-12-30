/*
 * Copyright (C) 2016  Ben Ockmore
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */


export const UPDATE_GENDER = 'UPDATE_GENDER';
export const UPDATE_TYPE = 'UPDATE_TYPE';
export const UPDATE_BEGIN_DATE = 'UPDATE_BEGIN_DATE';
export const UPDATE_END_DATE = 'UPDATE_END_DATE';
export const UPDATE_ENDED = 'UPDATE_ENDED';


export function updateGender(value) {
	return {
		type: UPDATE_GENDER,
		value
	};
}

export function updateType(value) {
	return {
		type: UPDATE_TYPE,
		value
	};
}

export function updateBeginDate(value) {
	return {
		type: UPDATE_BEGIN_DATE,
		value
	};
}

export function updateEndDate(value) {
	return {
		type: UPDATE_END_DATE,
		value
	};
}

export function updateEnded(value) {
	return {
		type: UPDATE_ENDED,
		value
	};
}