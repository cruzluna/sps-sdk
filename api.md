# Prompts

Types:

- <code><a href="./src/resources/prompts.ts">Prompt</a></code>
- <code><a href="./src/resources/prompts.ts">PromptListResponse</a></code>
- <code><a href="./src/resources/prompts.ts">PromptRetrieveContentResponse</a></code>
- <code><a href="./src/resources/prompts.ts">PromptUpdateMetadataResponse</a></code>

Methods:

- <code title="post /prompt">client.prompts.<a href="./src/resources/prompts.ts">create</a>({ ...params }) -> Prompt</code>
- <code title="get /prompt/{id}">client.prompts.<a href="./src/resources/prompts.ts">retrieve</a>(id, { ...params }) -> Prompt</code>
- <code title="get /prompts">client.prompts.<a href="./src/resources/prompts.ts">list</a>({ ...params }) -> PromptListResponse</code>
- <code title="delete /prompt/{id}">client.prompts.<a href="./src/resources/prompts.ts">delete</a>(id) -> void</code>
- <code title="get /prompt/{id}/content">client.prompts.<a href="./src/resources/prompts.ts">retrieveContent</a>(id, { ...params }) -> string</code>
- <code title="put /prompt/metadata">client.prompts.<a href="./src/resources/prompts.ts">updateMetadata</a>({ ...params }) -> string</code>
