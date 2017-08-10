'use strict';

export interface IJsonSchemaMap {
	[name: string]: any;
}

export interface IJsonSchema {
	id?: string;
	properties?: IJsonSchemaMap;
	items?: IJsonSchema | IJsonSchema[];
}