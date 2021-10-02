import {all, show, store, destroy, update} from "./service";

export const assembler = (url) => {
    const model = {};
    model.all = all(url);
    model.show = show(url);
    model.store = store(url);
    model.update = update(url);
    model.destroy = destroy(url);
    return model;
};

export const postService = assembler('posts');