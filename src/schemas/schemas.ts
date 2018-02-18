'use strict';

import * as _ from 'lodash';

export interface IJsonSchemaMap {
	[name: string]: any;
}

export interface IJsonSchema {
	id?: string; /*!< Уникальный идентификатор */
	default?: any; /*!< Значения по умолчанию */
	properties?: IJsonSchemaMap; /*!< Свойства */
	items?: IJsonSchema | IJsonSchema[]; /*!< Вложенные элементы */
}

export namespace Schema {
	export function getItemById(items: IJsonSchema | IJsonSchema[], uniqueId: string): any {
		return _.filter(items, { id: uniqueId })[0];
	}
}
