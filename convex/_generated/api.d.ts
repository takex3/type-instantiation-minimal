/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as feed from "../feed.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

export declare const fullApi: ApiFromModules<{
  feed: typeof feed;
  // This is manually generated, but anything in `feed/items` gives the same error. So just having a file called feed/items.ts shows the error
  "feed/items": {};
}>;
