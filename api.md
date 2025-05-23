# Prompt

Types:

- <code><a href="./src/resources/prompt.ts">PromptCreateResponse</a></code>
- <code><a href="./src/resources/prompt.ts">PromptRetrieveResponse</a></code>
- <code><a href="./src/resources/prompt.ts">PromptUpdateResponse</a></code>
- <code><a href="./src/resources/prompt.ts">PromptRetrieveContentResponse</a></code>
- <code><a href="./src/resources/prompt.ts">PromptUpdateMetadataResponse</a></code>

Methods:

- <code title="post /prompt">client.prompt.<a href="./src/resources/prompt.ts">create</a>({ ...params }) -> PromptCreateResponse</code>
- <code title="get /prompt/{id}">client.prompt.<a href="./src/resources/prompt.ts">retrieve</a>(id) -> string</code>
- <code title="put /prompt/{id}">client.prompt.<a href="./src/resources/prompt.ts">update</a>(pathID, { ...params }) -> string</code>
- <code title="delete /prompt/{id}">client.prompt.<a href="./src/resources/prompt.ts">delete</a>(id) -> void</code>
- <code title="get /prompt/{id}/content">client.prompt.<a href="./src/resources/prompt.ts">retrieveContent</a>(id, { ...params }) -> string</code>
- <code title="put /prompt/{id}/metadata">client.prompt.<a href="./src/resources/prompt.ts">updateMetadata</a>(pathID, { ...params }) -> string</code>
