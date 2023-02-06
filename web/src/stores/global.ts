import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => {
    return {
      ethTokenAddress: '',
      qTokenAddress: '',
      provider: {},
      ethTokenContract: null,
    }
  },

  actions: {
    //@ts-ignore
    // saveWalletData(payload: WalletData) {
    //   this.address = payload.address
    //   this.acc_short =