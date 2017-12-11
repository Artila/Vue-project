import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		counter: 0,
		value: 0
	},
	getters: { // 对state没有改变，只是加工，其实相当于computed
		doubleCounter: state => {
			return state.counter * 2;
		},
		clickCounter: state => {
			return state.counter + ' clicks.'
		},
		value: state => {
			return state.value;
		}
	},
	mutations: { // 对state进行改变，其实就是methods，只能是同步操作
		increment: (state, payload) => {
			state.counter += payload;
		},
		decrement: (state, payload) => {
			state.counter -= payload;
		},
		updateValue: (state, payload) => {
			state.value = payload;
		}
	},
	actions: { // 异步请求
		// 第一种：利用context来提交mutation
//		increment: context => {
//			context.commit('increment');
//		}
		increment: ({ commit }, payload) => {
			commit('increment', payload);
		},
		decrement: ({ commit }, payload) => {
			commit('decrement', payload);
		},
		asyncIncrement: ({ commit }, payload) => {
			setTimeout(() => {
				commit('increment', payload.by);
			}, payload.duration);
		},
		asyncDecrement: ({ commit }, payload) => {
			setTimeout(() => {
				commit('decrement', payload.by);
			}, payload.duration);
		},
		updateValue({ commit }, payload) {
			commit('updateValue', payload);
		}
	}
});
