/* tslint:disable */
/* eslint-disable */
/**
 * Museum
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Author
 */
export interface Author {
    /**
     * 
     * @type {string}
     * @memberof Author
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Author
     */
    bio: string;
    /**
     * 
     * @type {string}
     * @memberof Author
     */
    portrait: string;
    /**
     * 
     * @type {string}
     * @memberof Author
     */
    country: string;
    /**
     * 
     * @type {string}
     * @memberof Author
     */
    famous: string;
}

export function AuthorFromJSON(json: any): Author {
    return AuthorFromJSONTyped(json, false);
}

export function AuthorFromJSONTyped(json: any, ignoreDiscriminator: boolean): Author {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'bio': json['bio'],
        'portrait': json['portrait'],
        'country': json['country'],
        'famous': json['famous'],
    };
}

export function AuthorToJSON(value?: Author | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'bio': value.bio,
        'portrait': value.portrait,
        'country': value.country,
        'famous': value.famous,
    };
}


