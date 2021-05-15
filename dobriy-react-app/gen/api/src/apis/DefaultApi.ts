/* tslint:disable */
/* eslint-disable */
/**
 * Film weekly service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    Author,
    AuthorFromJSON,
    AuthorToJSON,
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    Event,
    EventFromJSON,
    EventToJSON,
} from '../models';

export interface AuthorsRequest {
    date?: string;
}

export interface EventsRequest {
    date?: string;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Returns list of authors
     */
    async authorsRaw(requestParameters: AuthorsRequest): Promise<runtime.ApiResponse<Array<Author>>> {
        const queryParameters: any = {};

        if (requestParameters.date !== undefined) {
            queryParameters['date'] = requestParameters.date;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/authors`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AuthorFromJSON));
    }

    /**
     * Returns list of authors
     */
    async authors(requestParameters: AuthorsRequest): Promise<Array<Author>> {
        const response = await this.authorsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns list of musical city musicevents
     */
    async eventsRaw(requestParameters: EventsRequest): Promise<runtime.ApiResponse<Array<Event>>> {
        const queryParameters: any = {};

        if (requestParameters.date !== undefined) {
            queryParameters['date'] = requestParameters.date;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/events`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EventFromJSON));
    }

    /**
     * Returns list of musical city musicevents
     */
    async events(requestParameters: EventsRequest): Promise<Array<Event>> {
        const response = await this.eventsRaw(requestParameters);
        return await response.value();
    }

}
