<template>
  <div class="text-center pt-12">
    <h1 class="text-2xl font-bold mb-8">
      Bridge from {{destinationNetwork}} to {{originNetwork}}
    </h1>

    <p>
      This bridge allows you to send ChainstackDollars (D-CHSD) from {{destinationNetwork}} back to {{originNetwork}}
    </p>

    <WalletConnect
      class="my-4"
      :targetNetwork="destinationNetwork"
      :targetNetworkId="destinationNetworkId"
      :currency="ONE"
      :decimals="4"
      :isNewNetwork="true"
    />

    <form class="w-96 mt-8 mx-auto">
      <label for="price" class="block mb-2 font-medium text-gray-700"
        >How much D-CHSD do you want to bridge?</label
      >
      <div class="mt-4 w-2/3 mx-auto relative rounded-md shadow-sm">
        <div
          class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
        >
          <span class="text-gray-500 sm:text-sm"> $ </span>
        </div>
        <input
          type="text"
          v-model="amount"
          name="price"
          id="price"
          class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
          placeholder="0.00"
          aria-describedby="price-currency"
  