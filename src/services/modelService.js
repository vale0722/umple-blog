import {all, show, store, destroy, update} from "./service";

export const assembler = (url) => {
    const model = {};
    model.all = all(url);
    model.one = show(url);
    model.create = store(url);
    model.update = update(url);
    model.delete = destroy(url);
    return model;
};

export const postService = assembler('posts');