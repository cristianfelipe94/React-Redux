import * as type from "./actionTypes";

export function createPost(post) {
    return {
        type: type.CREATE_COURSE,
        post
    };
}