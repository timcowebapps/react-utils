'use strict';

export interface IJsonSchemaMap {
	[name: string]: any;
}

export interface IJsonSchema {
	id?: string; // Уникальный идентификатор
	default?: any; // Значения по умолчанию
	properties?: IJsonSchemaMap; // Свойства
	items?: IJsonSchema | IJsonSchema[]; // Вложенные элементы
}