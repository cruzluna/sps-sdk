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
   * Get prompt
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<string> {
    return this._client.get(path`/prompt/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Update prompt
   */
  update(pathID: string, body: PromptUpdateParams, options?: RequestOptions): APIPromise<string> {
    return this._client.put(path`/prompt/${pathID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Get list of prompts with pagination
   */
  list(query: PromptListParams, options?: RequestOptions): APIPromise<PromptListResponse> {
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
    query: PromptRetrieveContentParams,
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get(path`/prompt/${id}/content`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Update prompt metadata
   */
  updateMetadata(
    pathID: string,
    body: PromptUpdateMetadataParams,
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.put(path`/prompt/${pathID}/metadata`, {
      body,
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

export type PromptUpdateResponse = string;

export type PromptListResponse = Array<Prompt>;

export type PromptRetrieveContentResponse = string;

export type PromptUpdateMetadataResponse = string;

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

export interface PromptUpdateParams {
  /**
   * The id of the prompt to update
   */
  body_id: string;

  /**
   * The content of the updated prompt
   */
  content: string;

  /**
   * The parent of the updated prompt. Most times its the same as the id of the
   * prompt to update.
   */
  parent: string;

  /**
   * Whether the updated prompt is branched
   */
  branched?: boolean | null;
}

export interface PromptListParams {
  /**
   * The category of the prompts to return
   */
  category: string;

  /**
   * The pagination offset to start from (0-based)
   */
  from: number;

  /**
   * The number of prompts to return
   */
  size: number;

  /**
   * The pagination offset to end at (exclusive)
   */
  to: number;
}

export interface PromptRetrieveContentParams {
  /**
   * Latest version of the prompt
   */
  latest: boolean;
}

export interface PromptUpdateMetadataParams {
  /**
   * The id of the prompt
   */
  body_id: string;

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
   * The tags of the prompt
   */
  tags?: Array<string> | null;
}

export declare namespace Prompts {
  export {
    type Prompt as Prompt,
    type PromptRetrieveResponse as PromptRetrieveResponse,
    type PromptUpdateResponse as PromptUpdateResponse,
    type PromptListResponse as PromptListResponse,
    type PromptRetrieveContentResponse as PromptRetrieveContentResponse,
    type PromptUpdateMetadataResponse as PromptUpdateMetadataResponse,
    type PromptCreateParams as PromptCreateParams,
    type PromptUpdateParams as PromptUpdateParams,
    type PromptListParams as PromptListParams,
    type PromptRetrieveContentParams as PromptRetrieveContentParams,
    type PromptUpdateMetadataParams as PromptUpdateMetadataParams,
  };
}
