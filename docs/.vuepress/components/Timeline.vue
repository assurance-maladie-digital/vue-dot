<template>
	<ul
		v-show="items.length"
		class="timeline mt-5"
	>
		<li
			v-for="(item, index) in items"
			:key="index"
			class="timeline-item"
		>
			<SvgIcon
				:icon="statuses[item.status].icon"
				color="#fff"
				:class="`timeline-badge ${statuses[item.status].color} ${item.status}`"
			/>

			<div
				class="timeline-panel"
				:class="{
					'current': item.status === 'pending'
				}"
			>
				<VLayout
					wrap
					justify-space-between
					class="timeline-heading"
				>
					<h2 class="timeline-title mb-2">
						{{ item.title }}
					</h2>

					<div class="timeline-panel-date">
						<div class="timestamp">
							<small class="text-muted">
								{{ item.date }}

								<SvgIcon
									small
									icon="calendar"
								/>
							</small>
						</div>
					</div>
				</VLayout>

				<div
					v-html="md(item.body)"
					class="timeline-body"
				/>
			</div>
		</li>
	</ul>
</template>

<script>
	import md from '../theme/functions/md';

	export default {
		name: 'Timeline',
		data() {
			return {
				statuses: {
					done: {
						icon: 'check',
						color: 'success'
					},
					pending: {
						icon: 'visibility',
						color: 'primary'
					},
					next: {
						icon: 'schedule',
						color: 'info'
					}
				}
			}
		},
		methods: {
			md
		},
		props: {
			items: {
				type: Array,
				required: true
			}
		}
	};
</script>

<style lang="scss" scoped>
	.timeline {
		list-style: none;
		position: relative;
		padding: 20px 0 20px;

		&::before {
			top: 0;
			bottom: 0;
			left: 50px;
			width: 2px;
			content: " ";
			position: absolute;
			margin-left: -1.5px;
			background: #e2e2e2;
		}
	}

	.timeline-item {
		margin-bottom: 40px;
		position: relative;

		&:last-of-type {
			margin-bottom: 0;
		}
	}

	.timeline-panel {
		padding: 15px;
		border-radius: 2px;
		margin-left: 100px;
		position: relative;
		background: #fff;
		border: 1px solid #d4d4d4;
		box-shadow: 0 1px 2px rgba(100, 100, 100, .2);
	}

	.timeline-heading {
		margin-bottom: 10px;

		.timestamp {
			color: #4b657f;
			padding: 5px 7px;
			background: #f5f5f5;
			display: inline-block;
		}

		.text-muted {
			display: flex;
			align-items: center;
		}

		.x-svg-icon {
			margin-left: 10px;
		}
	}

	.timeline-badge {
		top: 28px;
		left: 50px;
		width: 25px;
		z-index: 2;
		height: 25px;
		color: #fff;
		display: flex;
		font-size: 1.4em;
		border-radius: 50%;
		line-height: 52px;
		margin-left: -12px;
		position: absolute;
		text-align: center;
		background: #999;
		box-shadow: 0 2px 1px -1px rgba(0, 0, 0, .2),
		0 1px 1px 0 rgba(0, 0, 0, .14),
		0 1px 3px 0 rgba(0, 0, 0, .12);

		&.primary {
			background: #2e6da4;
		}

		&.success {
			background: #3f903f;
		}

		&.warning {
			background: #f0ad4e;
		}

		&.danger {
			background: #d9534f;
		}

		&.info {
			background: #5bc0de;
		}

		&.pending {
			top: 24px;
			width: 38px;
			height: 38px;
			margin-left: -17px;
		}

		/deep/ svg {
			width: 60%;
			height: 60%;
			margin: auto;
			position: relative;
		}

		+ .timeline-panel {
			box-shadow: 0 2px 1px -1px rgba(0, 0, 0, .2),
			0 1px 1px 0 rgba(0, 0, 0, .14),
			0 1px 3px 0 rgba(0, 0, 0, .12);

			.current {
				background: #f3f5f7;
				box-shadow: 0 5px 5px -3px rgba(0, 0, 0, .2),
				0 8px 10px 1px rgba(0, 0, 0, .14),
				0 3px 14px 2px rgba(0, 0, 0, .12);

				.timestamp {
					background: #fff;
				}

				&::after {
					border-left-color: #f3f5f7;
					border-right-color: #f3f5f7;
				}
			}

			&::before {
				border-bottom: 15px solid transparent;
				border-top: 15px solid transparent;
				border-left: 0 solid #ccc;
				border-right: 15px solid #ccc;
				content: " ";
				display: inline-block;
				position: absolute;
				left: -15px;
				right: auto;
				top: 26px;
			}

			&::after {
				border-bottom: 14px solid transparent;
				border-left: 0 solid #fff;
				border-right: 14px solid #fff;
				border-top: 14px solid transparent;
				content: " ";
				display: inline-block;
				position: absolute;
				left: -14px;
				right: auto;
				top: 27px;
			}
		}
	}

	.timeline-title {
		margin-top: 0;
		color: inherit;
		font-size: 1rem;
		font-weight: 700;
	}

	.timeline-body {
		> p,
		> ul {
			margin-bottom: 0;
		}

		> p + p {
			margin-top: 5px;
		}
	}

	@media only screen and (max-width: 350px) {
		.timeline-heading .x-svg-icon {
			display: none;
		}

		.timeline-panel {
			margin-left: 50px;
		}

		.timeline-badge,
		.timeline::before {
			left: 10px;
		}

		.timeline-badge.pending {
			margin-left: -18px;
		}

		.timeline-title,
		.timeline-body,
		.timeline-body /deep/ * {
			word-break: break-all !important;
		}
	}
</style>
