// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Prompt extends APIResource {
  /**
   * Create prompt
   */
  create(body: PromptCreateParams, options?: RequestOptions): APIPromise<PromptCreateResponse> {
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

export interface PromptCreateResponse {
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
  metadata?: PromptCreateResponse.Metadata | null;
}

export namespace PromptCreateResponse {
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

export declare namespace Prompt {
  export {
    type PromptCreateResponse as PromptCreateResponse,
    type PromptRetrieveResponse as PromptRetrieveResponse,
    type PromptUpdateResponse as PromptUpdateResponse,
    type PromptRetrieveContentResponse as PromptRetrieveContentResponse,
    type PromptUpdateMetadataResponse as PromptUpdateMetadataResponse,
    type PromptCreateParams as PromptCreateParams,
    type PromptUpdateParams as PromptUpdateParams,
    type PromptRetrieveContentParams as PromptRetrieveContentParams,
    type PromptUpdateMetadataParams as PromptUpdateMetadataParams,
  };
}
