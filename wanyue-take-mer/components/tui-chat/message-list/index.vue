<template>
	<scroll-view class="message-list-container" scroll-y="true" :scroll-into-view="scrollView" :refresher-enabled="true"
		@refresherrefresh="refresh" :scroll-top="scrollTop" :refresher-triggered="triggered">
		<view id="message-scroll" style="width:100%">
			<view class="no-message" v-if="isCompleted">{{i18n.message.meiyougengduola}}</view>
			<view v-for="item in messageList" :key="item.ID" class="t-message">
				<view v-if="conversation.type !== '@TIM#SYSTEM'" :id="item.ID">
					<view class="t-message-item">
						<TUI-TipMessage v-if="item.type === 'TIMGroupTipElem'" :message="item"></TUI-TipMessage>
						<view v-if="item.type !== 'TIMGroupTipElem'"
							:class="item.flow === 'out' ? 't-self-message' : 't-recieve-message'">
							<image class="t-message-avatar" v-if="item.flow === 'in'"
								:src="item.avatar || 'https://sdk-web-1252463788.cos.ap-hongkong.myqcloud.com/component/TUIKit/assets/avatar_21.png'">
							</image>
							<view class="read-receipts" v-if="conversation.type === 'C2C' && item.flow === 'out'">
								<view v-if="item.isPeerRead">{{i18n.message.yidu}}</view>
								<view v-else>{{i18n.message.wudu}}</view>
							</view>

							<view>
								<TUI-TextMessage v-if="item.type === 'TIMTextElem'" :message="item"
									:isMine="item.flow === 'out'"></TUI-TextMessage>
								<TUI-ImageMessage v-if="item.type === 'TIMImageElem'" :message="item"
									:isMine="item.flow === 'out'"></TUI-ImageMessage>
								<TUI-VideoMessage v-if="item.type === 'TIMVideoFileElem'" :message="item"
									:isMine="item.flow === 'out'"></TUI-VideoMessage>
								<TUI-AudioMessage v-if="item.type === 'TIMSoundElem'" :message="item"
									:isMine="item.flow === 'out'"></TUI-AudioMessage>
								<TUI-CustomMessage v-if="item.type === 'TIMCustomElem'" :message="item"
									:isMine="item.flow === 'out'"></TUI-CustomMessage>
								<TUI-FaceMessage v-if="item.type === 'TIMFaceElem'" :message="item"
									:isMine="item.flow === 'out'"></TUI-FaceMessage>
								<TUI-FileMessage v-if="item.type === 'TIMFileElem'" :message="item"
									:isMine="item.flow === 'out'"></TUI-FileMessage>
							</view>
							<image class="t-message-avatar" v-if="item.flow === 'out'"
								:src="item.avatar || 'https://sdk-web-1252463788.cos.ap-hongkong.myqcloud.com/component/TUIKit/assets/avatar_21.png'">
							</image>
							<!-- <view class="" v-if="item.flow != 'out'" @click="doFanyiItem(item)">
								<image src="../../../static/message/fanyi.png" mode="aspectFit"
									style="width: 72rpx;height: 72rpx"></image>
							</view> -->
						</view>
						<!-- <view class="text-message-fanyi" v-if="item.fanyi && item.fanyi.length > 0">
							{{item.fanyi}}
						</view> -->
					</view>
				</view>
				<view v-else :id="item.ID" :data-value="item.ID">
					<TUI-SystemMessage :message="item"></TUI-SystemMessage>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	import TUITextMessage from '../message-elements/text-message/index';
	import TUIImageMessage from '../message-elements/image-message/index';
	import TUIVideoMessage from '../message-elements/video-message/index';
	import TUIAudioMessage from '../message-elements/audio-message/index';
	import TUICustomMessage from '../message-elements/custom-message/index';
	import TUITipMessage from '../message-elements/tip-message/index';
	import TUISystemMessage from '../message-elements/system-message/index';
	import TUIFaceMessage from '../message-elements/face-message/index';
	import TUIFileMessage from '../message-elements/file-message/index';

	export default {
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		data() {
			return {
				avatar: '',
				userID: '',
				// ????????????
				messageList: [],
				// ????????? ID ?????????????????????????????????????????????????????????
				scrollView: '',
				scrollTop: 0,
				triggered: true,
				nextReqMessageID: '',
				// ?????????????????????
				isCompleted: false // ??????????????????????????????????????????
			};
		},

		components: {
			TUITextMessage,
			TUIImageMessage,
			TUIVideoMessage,
			TUIAudioMessage,
			TUICustomMessage,
			TUITipMessage,
			TUISystemMessage,
			TUIFaceMessage,
			TUIFileMessage
		},
		props: {
			conversation: {
				type: Object,
				default: () => {}
			}
		},
		watch: {
			conversation: {
				handler: function(newVal) {
					if (!newVal.conversationID) return;
					this.setData({
							conversation: newVal
						},
						() => {
							this.getMessageList(newVal);
						}
					);
				},
				immediate: true,
				deep: true
			}
		},
		mounted() {
			uni.$TUIKit.getMyProfile().then(res => {
				this.avatar = res.data.avatar;
				this.userID = res.data.userID;
			});
			uni.$TUIKit.on(uni.$TUIKitEvent.MESSAGE_RECEIVED, this.$onMessageReceived, this);
			uni.$TUIKit.on(uni.$TUIKitEvent.MESSAGE_READ_BY_PEER, this.$onMessageReadByPeer, this);
		},

		destroyed() {
			// ????????????????????????????????????
			uni.$TUIKit.off(uni.$TUIKitEvent.MESSAGE_RECEIVED, this.$onMessageReceived);
		},
		methods: {
			refresh() {
				if (this.isCompleted) {
					this.setData({
						isCompleted: true,
						triggered: false
					});
					return;
				}
				this.getMessageList(this.conversation);
				setTimeout(() => {
					this.setData({
						triggered: false
					});
				}, 2000);
			},

			getMessageList(conversation) {
				if (!this.isCompleted) {
					uni.$TUIKit
						.getMessageList({
							conversationID: conversation.conversationID,
							nextReqMessageID: this.nextReqMessageID,
							count: 15
						})
						.then(res => {
							const {
								messageList
							} = res.data; // ???????????????
							this.nextReqMessageID = res.data.nextReqMessageID; // ???????????????????????????????????????????????????
							this.isCompleted = res.data.isCompleted; // ???????????????????????????????????????
							this.messageList = [...messageList, ...this.messageList];
							this.$handleMessageRender(this.messageList, messageList);
						});
				}
			},

			// ?????????????????????
			updateMessageList(msg) {
				this.messageList = [...this.messageList, msg];
				this.scrollToButtom();
			},

			// ??????????????????
			$onMessageReadByPeer() {
				this.setData({
					messageList: this.messageList
				});
			},
			scrollToButtom() {
				const query = uni.createSelectorQuery().in(this);
				let nodesRef = query.select('#message-scroll');
				nodesRef
					.boundingClientRect(res => {
						this.$nextTick(() => {
							//???????????????????????????
							this.scrollTop = res.height;
						});
					})
					.exec();
			},
			// ???????????????
			$onMessageReceived(value) {
				// ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
				const event = value;
				const list = [];
				event.data.forEach(item => {
					if (item.conversationID === this.conversation.conversationID) {
						list.push(Object.assign(item));
					}
				});
				this.messageList = this.messageList.concat(list);
				this.scrollToButtom();
			},

			// ??????????????????
			$handleMessageRender(messageList) {
				if (messageList.length > 0) {
					this.setData({
							messageList
						},
						() => {}
					);
					this.$nextTick(() => {
						//???????????????????????????
						this.scrollTop = 9999;
					});
				}
			},
			doFanyiItem(item) {
				console.log(item.payload.text)
				uni.showLoading({
					title: ' '
				})
				var fromLag;
				var toLag;
				const system_info = uni.getStorageSync('system_info')
				const language = system_info.language
				if (language.indexOf('zh') != -1) {
					fromLag = 'th';
					toLag = 'zh-CN';
				} else{
					fromLag = 'zh-CN';
					toLag = 'th';
				}
				var that = this
				uni.request({
					url: 'https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=' + fromLag + '&tl=' +
						toLag + '&q=' + item.payload.text,
					success: function(res) {
						uni.hideLoading();
						console.log(res.data[0][0][0])
						item.fanyi = res.data[0][0][0]
						that.$forceUpdate()
						
					},
					fail: function(error) {
						console.log(error)
						uni.hideLoading();
					
					},
					complete:function(res){
						console.log(res.data[0][0])
						uni.hideLoading();
					}
				})
			}
		}
	};
</script>
<style>
	@import './index.css';
</style>
