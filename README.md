# Accru pay web sdk

## TODO

1. Import the accru backend sdk and get rid of all of the local API calls for different providers that exist today solely so we can get payments to go through. That is there should be a single file in the `/api` folder that contains the API calls, getting rid of both `nuvei.ts` and `stripe.ts`.

1.a. Get rid of the stripe dependency under `dependencies`, as it's been imported to run an api call that should happen in the backend. Again, this is so we work using the SDK.

2. See if the base context can be shared across different providers instead of instantiating the context in both files.

3. Be more intelligent about what stripe versions we're going to be supporting.

4. Support code-splitting.

5. Add tests so that we're sure that multiple react versions are supported.

### Testing locally

Run the following and follow the instructions.

```console
yarn link
```
