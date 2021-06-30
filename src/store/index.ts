import Vue from 'vue'
import Vuex from 'vuex'
import Parse from "parse";
import {IReactiveDataHolder} from "@/ReactiveDataHolder";
import {YourObject} from "@/model/YourObject";

Vue.use(Vuex)

export interface IRootState {
    YourObjectState: IReactiveDataHolder<YourObject>
}

export default new Vuex.Store<IRootState>({

})


