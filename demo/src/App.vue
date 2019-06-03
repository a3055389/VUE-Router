<template>
  <div id="app">
      <!-- <div style="width:200px; height:200px; background-color:red;">
      </div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/card">card</router-link>
    <router-view></router-view> -->

<div class="head">
			<div class="top">
				<div class="head1" tabindex="1">
					<router-link class="head1" tabindex="1" to="/">text页面</router-link> 
				</div>
				<div class="head1" tabindex="1">
					<router-link class="head1" tabindex="1" to="/Home">Home页面</router-link>
				</div>
				<div class="head1" tabindex="1">
					<router-link class="head1" tabindex="1" to="/card">card页面</router-link>
				</div>
				<div class="head1" tabindex="1">
					<router-link class="head1" tabindex="1" to="/About">about页面</router-link>
				</div>
			</div>
		</div>
		<div class="body">
			<router-view></router-view>
		</div>
		<div class="foot">
			foot内容
			
		</div>

  </div>
</template>

<style lang="scss">
.head{
			width: 100%;
			height: 100px;
			background-color: #f29d38;
		}
		.head1{
			background-color: #f29d38;
			width: 160px;
			height: 100px;
			float: left;
			text-align: center;
			line-height: 100px;
		}
		.top{
			width: 640px;
			height: 100px;
			margin: 0 auto;
		}
		.head1:focus{
			background-color: #b4dbcd;
		}
		.foot{
			width: 100%;
			height: 150px;
			background-color: #323232;
			line-height: 150px;
			text-align: center;
		}
		.body{
			width: 100%;
			height: 600px;
			background-color: #ddddcd;
			line-height: 600px;
			text-align: center;
		}
</style>
