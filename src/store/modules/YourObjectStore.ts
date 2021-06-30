import ReactiveDataHolder from "@/ReactiveDataHolder";
import store from '@/store'
import {Module} from "vuex-module-decorators";
import {YourObject} from "@/model/YourObject";

@Module({
    namespaced: true,
    name: "YourObjectStore",
    store,
    dynamic: true
})
export class YourObjectStore extends ReactiveDataHolder<YourObject> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    constructor(module: Module<ThisType<any>, any>) {
        super(module, "YourObject");
    }
}

