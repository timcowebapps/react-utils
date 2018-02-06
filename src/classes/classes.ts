'use strict';

import * as _ from 'lodash';
import { Shared } from '../shared/shared';

export namespace Classes {
	export function combine(...args: any[]): string {
		var classNames = [];
		for (var i = 0; i < arguments.length; i++) {
			var argument = arguments[i];

			if (Shared.isString(argument)) {
				classNames.push(argument);
			}
			else if (Shared.isArray(argument)) {
				classNames.push(this.combine.apply(this, argument));
			}
			else if (Shared.isObject(argument)) {
				for (var key in argument) {
					if (Object.hasOwnProperty.call(argument, key) && (argument as any)[key]) {
						classNames.push(key);
					}
				}
			}
		}

		return classNames.join(' ').trim();
	}

	export function bem(styles: any, block: string, props: any, options: any = {}): string {
		const defaults = {
			prefix: '',
			delimiters: { element: '__', modifier: '--' }
		};

		const { element, modifiers } = props;
		const { prefix, delimiters } = _.merge({}, defaults, options);

		var blockName = prefix + block;
		var rootName = element ? `${blockName}${delimiters.element}${element}` : blockName;

		var className = [styles[rootName]].concat(modifiers.map((modifier: string) => {
			return styles[`${rootName}${delimiters.modifier}${modifier}`];
		})).join(' ').trim();

		return className;
	}
}
