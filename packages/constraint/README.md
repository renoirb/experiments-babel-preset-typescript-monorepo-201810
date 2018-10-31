# Constraint

String notation to describe how we want an API to return data only with matching criteria (e.g. I want all Meal Recipes that contains garlic)

```js
const Constraint = require('@bit/renoirb.bindings.types.constraint')
// ...
const filter = Constraint.fromString('Status_$eq_$Active,Name_$eq_$canary')
filter.clearField('Status')
// ...
console.log(filter) // {"Name":{"eq":["canary"]}}
console.log(String(filter)) // "Name_$eq_$canary"
```

**Context** In this package, we've migrated ECMAScript from **@bit/renoirb.bindings.types.constraint**, and copied it here.
We could have had [written the code here and exported it in isolation to bit](https://docs.bitsrc.io/docs/isolating-and-tracking-components.html).
That could be done. But it isn't, it's also copied over to [GitHub.com/renoirb/bits](https://github.com/renoirb/bits/tree/master/src/types).
The use-case here was to migrate ECMAScript with modules, managed by TypeScript, without being converted to it just yet.
We also wanted to have Jest test to work.

## Next Steps

### Migrate to TypeScript?

Assuming we want to rework that package, we could [migrate it to TypeScript](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html)
