import { query } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

export const current = query({
    args : {},
    handler : async (ctx) => {
        const userID = await getAuthUserId(ctx)

        if(userID === null){
            return null
        }

        return await ctx.db.get(userID)
    }
})