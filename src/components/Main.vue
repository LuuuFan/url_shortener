<template>
	<div class="main">
		<h2>URL Shortener</h2>
		<p v-if="error" class="error">{{error}}</p>
		<form v-on:submit.prevent="handleSubmit">
			<div class='inline'>
				<input type="text" name="url" placeholder="Input url" v-model="url" required>
				<span class="clear" v-if="url" @click="reset(true)">&times;</span>
			</div>
			<input type="submit" name="">
		</form>
		<div v-if="link" class='inline link'>
			<a :href="link" target="_blank">{{link}}</a>
			<button @click="copy">{{copied ? "Copied" : "Copy"}}</button>
		</div>
	</div>
</template>
<script>
	export default {
		name: "Main",
		data(){
			return {
				url: "",
				result: "",
				error: "",
				link: "",
				copied: false,
			}
		},
		methods: {
			checkValidURL(){
				const reg = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g;
				this.result = reg.test(this.url.trim());
				if (this.result && this.error) this.error = "";
				return this.result;
			},
			handleSubmit(){
				if (this.checkValidURL()) {
					fetch("/api/url", {
						method: "POST",
						body: JSON.stringify({url: this.url.trim()}),
						headers: {"Content-Type": "application/json"},
					})
					.then(res => res.json())
					.then(data => {
						this.link = document.location.href.split("#")[0] + data.shortenCode;
						if (this.copied) this.copied = false;
					})
					.catch(err => {
						this.error = "Something wrong:" + err;
					});
				} else {
					this.error = "Please input the valid URL";
					if(this.link) this.link = "";
					if (this.copied) this.copied = false;
				}
			},
			copy(){
				const el = document.createElement('textarea');
				el.value = this.link;
				el.setAttribute('readonly', '');
				el.style.position = 'absolute';
				el.style.left = '-9999px';
				document.body.appendChild(el);
				el.select();
				document.execCommand('copy');
				document.body.removeChild(el);
				this.copied = true;
			},
			reset(url){
				if (url) this.url = "";
				if (this.link) this.link = "";
				if (this.error && this.checkValidURL()) this.error = "";
				if (this.copied) this.copied = false;
			},
		},
		watch: {
			url(newVal, oldVal){
				if (newVal !== oldVal) this.reset();
			}
		}
	}
</script>
<style scoped>
	.main{
		width: 50vw;
		margin: 3em auto;
	}
	form{
		width: 100%;
	}
	.inline{
		display: flex;
		border: 1px solid lightgray;
		width: 100%;
		border: 1px solid lightgray;
		border-radius: 0.3em;
		width: 100%;
		padding: 0.5em 0.8em;
		box-sizing: border-box;
		margin-bottom: 1em;
	}
	input[type="text"], .link a{
		flex: 1;
		border:none;
		outline: none;
	}
	input[type="submit"], .clear, button{
		cursor: pointer;
	}
	button{
		background-color: white;
		border: 1px solid lightgray;
		border-radius: 0.5em;
	}
	input[type="submit"]:hover{
		background: lightgray;
		transition: all .8s;
	}
	.error{
		border-radius: 0.3em;
		padding: 0.3em;
		background-color: rgba(255, 0, 0, 0.3);
	}
	.link{
		margin-top: 2em;
		border: none;
		justify-content: center;
		background-color: rgba(10, 186, 181, 0.3);
	}
</style>