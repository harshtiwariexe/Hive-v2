import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

export const get = query({
    args : {},
    handler : async (ctx) => {
        return await ctx.db.query("workspaces").collect()
    }
})

export const create = mutation({
    args : {
        name : v.string()
    },
    handler : async (ctx,arg) => {
        const userID = await getAuthUserId(ctx)
        const inviteCode = "1234"

        if(!userID){
            throw new Error("UNAUTHORIZED")
        }


       const workspaceID = await ctx.db.insert("workspaces",{
        name : arg.name,
        inviteCode,
        userID
       })

       return workspaceID
    }
})
