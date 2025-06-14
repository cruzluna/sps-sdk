// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { SystemPromptStorage } from '../client';

export abstract class APIResource {
  protected _client: SystemPromptStorage;

  constructor(client: SystemPromptStorage) {
    this._client = client;
  }
}
