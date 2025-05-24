// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Prompts extends APIResource {
  /**
   * Create prompt
   */
  create(body: PromptCreateParams, options?: RequestOptions): APIPromise<Prompt> {
    return this._client.post('/prompt', { body, ...options });
  }

  /**
   * Get entire prompt with option to include metadata
   */
  retrieve(
    id: string,
    query: PromptRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get(path`/prompt/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Get list of prompts with pagination
   */
  list(
    query: PromptListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PromptListResponse> {
    return this._client.get('/prompts', { query, ...options });
  }

  /**
   * Delete prompt
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/prompt/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get prompt content
   */
  retrieveContent(
    id: string,
    query: PromptRetrieveContentParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get(path`/prompt/${id}/content`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }
}

export interface Prompt {
  /**
   * The id of the prompt
   */
  id: string;

  /**
   * The content of the prompt
   */
  content: string;

  /**
   * The creation date of the prompt
   */
  created_at: number;

  /**
   * The parent of the prompt
   */
  parent: string;

  /**
   * The version of the prompt
   */
  version: number;

  /**
   * Whether the prompt is archived
   */
  archived?: boolean | null;

  /**
   * Whether the prompt is being branched
   */
  branched?: boolean | null;

  /**
   * The metadata of the prompt
   */
  metadata?: Prompt.Metadata | null;
}

export namespace Prompt {
  /**
   * The metadata of the prompt
   */
  export interface Metadata {
    /**
     * Category of the prompt ie React, typescript, etc.
     */
    category?: string | null;

    /**
     * Description of the prompt
     */
    description?: string | null;

    /**
     * Name of the prompt
     */
    name?: string | null;

    /**
     * Tags of the prompt ie [react, typescript, etc.]
     */
    tags?: Array<string> | null;
  }
}

export type PromptRetrieveResponse = string;

export type PromptListResponse = Array<Prompt>;

export type PromptRetrieveContentResponse = string;

export interface PromptCreateParams {
  /**
   * The content of the prompt
   */
  content: string;

  /**
   * Whether the prompt is being branched
   */
  branched?: boolean | null;

  /**
   * The category of the prompt
   */
  category?: string | null;

  /**
   * The description of the prompt
   */
  description?: string | null;

  /**
   * The name of the prompt
   */
  name?: string | null;

  /**
   * The parent of the prompt. If its a new prompt with no lineage, this should be
   * None.
   */
  parent?: string | null;

  /**
   * The tags of the prompt
   */
  tags?: Array<string> | null;
}

export interface PromptRetrieveParams {
  /**
   * Whether to include metadata in the response
   */
  metadata?: boolean;
}

export interface PromptListParams {
  /**
   * The category of the prompts to return
   */
  category?: string;

  /**
   * The number of prompts to return. Default is 10.
   */
  limit?: number;

  /**
   * The pagination offset to start from (0-based). Default is 0.
   */
  offset?: number;
}

export interface PromptRetrieveContentParams {
  /**
   * Latest version of the prompt
   */
  latest?: boolean;
}

export declare namespace Prompts {
  export {
    type Prompt as Prompt,
    type PromptRetrieveResponse as PromptRetrieveResponse,
    type PromptListResponse as PromptListResponse,
    type PromptRetrieveContentResponse as PromptRetrieveContentResponse,
    type PromptCreateParams as PromptCreateParams,
    type PromptRetrieveParams as PromptRetrieveParams,
    type PromptListParams as PromptListParams,
    type PromptRetrieveContentParams as PromptRetrieveContentParams,
  };
}
