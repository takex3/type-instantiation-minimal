import { query } from "./_generated/server";

// Changing return type of this to Promise<any> also errors. However Promise<string> works.
export const getFeedItem = query({
  args: {},
  handler: async (ctx, args): Promise<unknown> => {
    return {};
  },
});
