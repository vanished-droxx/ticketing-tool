<template>
  <h1>hello</h1>
  <p>{{collections}}</p>
</template>

<script setup>
import PocketBase from 'pocketbase';

const client = new PocketBase('http://127.0.0.1:8090');

client.admins.authViaEmail('nikurb@icloud.com', '1234567890');

const collections = client.collections.getFullList(200 /* batch size */, { sort: '-created' });

console.log(collections)


</script>

<style>

</style>