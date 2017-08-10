'use strict';

export namespace Classes {
	export function combine(...args: any[]): string {
		var classNames = [];
		for (var i = 0; i < arguments.length; i++) {
			var argument = arguments[i];
			var argumentType = typeof argument;

			if (argumentType === 'string' || argumentType === 'number') {
				classNames.push(argument);
			}
			else if (Array.isArray(argument)) {
				classNames.push(this.combine.apply(this, argument));
			}
			else if (argumentType === 'object') {
				for (var key in argument) {
					if (Object.hasOwnProperty.call(argument, key) && argument[key]) {
						classNames.push(key);
					}
				}
			}
		}

		return classNames.join(' ');
	}
}