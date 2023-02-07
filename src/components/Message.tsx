import type { Component } from 'solid-js';

const Message: Component<{ icon: string; name: string; time: string; message: string }> = props => {
	return (
		<div class="flex">
			<img src={props.icon} class="w-12 h-12 rounded-full"></img>
			<div class="flex flex-col pl-4">
				<div class="flex flex-row">
					<p class="text-white font-bold">{props.name}</p>
					{props.time === '' ? (
						<div class="flex flex-row h-6 ml-3">
							<span class="text-indigo-500 text-2xl -translate-y-2">•</span>
							<p class="ml-1 self-center text-xs text-white">Typing</p>
						</div>
					) : (
						<p class="pl-3 text-slate-300 text-xs self-end">{props.time}</p>
					)}
				</div>
				<div class="flex flex-row">
					<p class="text-slate-300">{props.message}</p>
					{props.time === '' ? <p class="text-indigo-500">ꕯ</p> : <div />}
				</div>
			</div>
		</div>
	);
};

export default Message;
