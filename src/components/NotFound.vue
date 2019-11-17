<template>
	<div>
		<h2>Oooops...We can not find {{$route.params.code ? `shortenURL for ${$route.params.code}` : "this page"}}</h2>
		<p>This page will redirect to main page in {{second}} {{second===1 ? "second" : "seconds"}}</p>
	</div>
</template>
<script>
	export default {
		name: "NotFound",
		data(){
			return {
				second: 10,
			}
		},
		mounted(){
			const interval = setInterval(()=>{
				this.second--;
			}, 1000);
			setTimeout(()=>{
				clearInterval(interval);
				window.location.href = document.location.href.split("#")[0];
			}, 10000)
		}
	}
</script>
<style scoped>
	
</style>