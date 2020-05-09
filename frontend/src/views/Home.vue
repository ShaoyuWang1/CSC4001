<template>
    <el-row class="container">
        <el-col :span="24" class="header">
			<el-col :span="18" class="logo" >
                {{sysName + sysUserName}}
			</el-col>
			<el-col :span="4" class="userinfo">
				<el-dropdown trigger="hover">
					<span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar" /> {{sysUserName}}</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>我的消息</el-dropdown-item>
						<el-dropdown-item>设置</el-dropdown-item>
						<el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</el-col>
        <el-col :span="24" class="main">
            <aside>
                <el-menu :default-active="$route.path" class="el-menu el-menu-vertical-demo"
                        unique-opened router >
						
						<template v-for="(item,index) in $router.options.routes">
						<template v-if="!item.hidden">
							<el-submenu v-bind:key="index" :index="index+''" v-if="!item.leaf">
								<template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
								<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" >
									<template v-if="!child.hidden">
										{{child.name}}
									</template>
								</el-menu-item>
							</el-submenu>
							<template v-if="item.leaf&&item.children.length>0">
								<el-menu-item v-bind:key="index" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
							</template>
						</template>
						</template>
                </el-menu>
            </aside>
			<section class="content-container">
				<div class=" bg-purple-light">
					<el-col :span="24" class="grid-content">
						<!-- <strong class="title">{{$route.name}}</strong> -->
					</el-col>
					<el-col :span="24" class="grid-content">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col>
				</div>
			</section>
		</el-col>
    </el-row>
</template>

<script>
export default {
    data() {
			return {
				sysName:'Welcome, ',
				sysUserName: '',
				sysUserAvatar: '',
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				}
			}
        },
    methods: {
		//退出登录
		logout: function () {
			var _this = this;
			this.$confirm('确认退出吗?', '提示', {
				//type: 'warning'
			}).then(() => {
				sessionStorage.removeItem('user');
				_this.$router.push('/login');
			}).catch(() => {

			});
		},
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		}
	},
    mounted() {
			var user = sessionStorage.getItem('user');
			if (user) {
				user = JSON.parse(user);
				this.sysUserName = user.user_name || '';
				this.sysUserAvatar = user.avatar || '';
			}

		}
}
</script>

<style scoped lang="scss">
@import '../style/vars.scss';

    .container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
    }
    .header {
			height: 60px;
            line-height: 60px;
			background: $color-primary;
			color:#fff;
			.userinfo {
				text-align: right;
				padding-right: 35px;
				float: right;
				.userinfo-inner {
					cursor: pointer;
					color:#fff;
					img {
						width: 40px;
						height: 40px;
						border-radius: 20px;
						margin: 10px 0px 10px 10px;
						float: right;
					}
				}
			}
			.logo {
				height:60px;
				font-size: 22px;
				padding-left:20px;
				img {
					width: 40px;
					float: left;
					margin: 10px 10px 10px 0px;
				}
				.txt {
                    color:#fff;
				}
			}
			.logo-width{
				width:230px;
			}
			.logo-collapse-width{
				width:60px
			}
			.title{
                font-size: 22px;
				padding-left:20px;
				line-height: 60px;
				color:#fff;
			}
        }
    .main {
			display: flex;
			position: absolute;
			top: 60px;
			bottom: 0px;
			overflow: hidden;
			aside {
				flex:0 0 230px;
				width: 230px;
				.el-menu{
                    height: 100%;
                    /* width: 34%; */
				}
			}
			.content-container {
				flex:1;
				overflow-y: scroll; 
				padding: 20px;
				.breadcrumb-container {
					.title {
						width: 200px;
						float: left;
						color: #475669;
					}
					.breadcrumb-inner {
						float: right;
					}
				}
				.content-wrapper {
					background-color: #fff;
					box-sizing: border-box;
				}
			}
		}
</style>
