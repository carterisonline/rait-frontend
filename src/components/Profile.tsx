import type { Component } from 'solid-js';

const Profile: Component<{ icon: string; name: string; email: string }> = props => {
	return (
		<div class="flex text-white">
			<img src={props.icon} class="w-16 rounded-full"></img>
			<p class="absolute left-14 translate-x-1 translate-y-3 text-green-400 text-6xl text-shadow-lg shadow-slate-800">
				•
			</p>
			<div class="ml-4 flex flex-col">
				<p class="text-lg translate-y-1">{props.name}</p>
				<p class="text-slate-400 -translate-y-1">{props.email}</p>
			</div>
		</div>
	);
};

export default Profile;
