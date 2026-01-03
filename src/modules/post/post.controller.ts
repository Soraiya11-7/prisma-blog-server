import { Request, Response } from "express";

import { PostStatus } from "../../../generated/prisma/enums";
import { postService } from "./post.service";
// import paginationSortingHelper from "../../helpers/paginationSortingHelper";

const createPost = async (req: Request, res: Response) => {
    try {
        console.log(req, res);

        const result = await postService.createPost(req.body)
        res.status(201).json(result)
    } catch (e) {
        res.status(400).json({
            error: "Post creation failed",
            details: e
        })
    }
}



export const PostController = {
    createPost
}