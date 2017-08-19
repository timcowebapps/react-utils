'use strict';

export namespace Enum {
	export const toString = (enumerable: any, key: any): string => {
		return enumerable[key] as string;
	}
}