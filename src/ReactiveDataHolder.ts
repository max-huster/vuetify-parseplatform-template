import {Module, VuexModule, Mutation, Action, MutationAction} from 'vuex-module-decorators'
import Parse from "parse";
import {ParseVueObject} from "@/ParseVueObject";
import Vue from "vue";

export interface IReactiveDataHolder<T> {
    items: T[]
}

export default class ReactiveDataHolder<T extends ParseVueObject> extends VuexModule implements IReactiveDataHolder<T> {
    items: T[] = []
    private readonly _className: string;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    constructor(module: Module<ThisType<unknown>, unknown>, className: string) {
        super(module);
        this._className = className;
    }

    public get allItems(): T[] {
        return this.items;
    }

    @Mutation
    public addItem(task: T): void {
        this.items.push(task);
    }

    @Mutation
    public removeItem(task: T): void {
        const index = this.items.findIndex(x => x.id === task.id)
        Vue.delete(this.items, index);
    }

    @Mutation
    public updateItem(task: T): void {
        const index = this.items.findIndex(x => x.id === task.id);
        // see https://vuejs.org/v2/guide/reactivity.html#For-Arrays
        Vue.set(this.items, index, task);
    }

    @Mutation
    public setItems(tasks: T[]): void {
        // console.debug(tasks)
        this.items = tasks;
    }

    @Action({
        rawError: true
    })
    public async loadItems(): Promise<void> {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const query = new Parse.Query(this._className);

        const queryResult = await query.findAll();
        this.context.commit("setItems", queryResult);

        const subscription = await query.subscribe();
        subscription.on("create", object => {
            this.context.commit("addItem", object);

        });
        subscription.on("delete", object => this.context.commit("removeItem", object));
        subscription.on("update", object => this.context.commit("updateItem", object));
    }

}
