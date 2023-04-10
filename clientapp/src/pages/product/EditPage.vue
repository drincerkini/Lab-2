<template>
    <div>
      <form @submit.prevent="">
        <input type="text" v-model="this.product.title" placeholder="Title">
        <textarea type="text" v-model="this.product.description" placeholder="desc" />
        <input type="number" v-model="this.product.price" placeholder="price">
        <input type="text" v-model="this.product.category" placeholder="category">
        <input type="text" v-model="this.product.image" placeholder="image">
        <button type="submit">Update</button>
      </form>
    </div>
  </template>


