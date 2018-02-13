'use strict';

export namespace Enum {
	export const toString = (enumerable: any, key: any): string => {
		return enumerable[key] as string;
	}

	/**
	 * Сравнивает целочисленное значение с типом
	 * @param enumerable Типы
	 * @param key Конкретный тип
	 * @param value Целочисленное значение, которое следует сравнить с типом
	 * 
	 * @example Enum.compareWithNum(Types, Types.Red, this.state.selected_color)
	 */
	export const compareWithNum = (enumerable: any, key: any, value: number): boolean => {
		return toString(enumerable, key) === enumerable[value];
	}
}
