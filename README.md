# Minimal reproduction of a issue in convex

```
npm install
cd convex/
npx tsc --noEmit
```

Prints

```
bar.ts:3:13 - error TS2589: Type instantiation is excessively deep and possibly infinite.

3 console.log(fullApi);
              ~~~~~~~


Found 1 error in bar.ts:3
```
