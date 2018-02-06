'use strict';

export namespace Shared {
	export const isArray = Array.isArray;

	export function isString(value: any): value is string {
		return typeof value === 'string';
	}

	export function isNumber(value: any): value is number {
		return typeof value === 'number';
	}

	export function isStringOrNumber(value: any): value is string | number {
		return isString(value) || isNumber(value);
	}

	export function isObject(value: any): value is object {
		return typeof value === 'object';
	}

	export function isFunction(value: any): value is Function {
		return typeof value === 'function';
	}

	export function stringToArray(value: string) {
		return value.split(/\s+/g).filter((el: string) => {
			return el.length !== 0;
		});
	}
}
