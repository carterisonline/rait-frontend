import confetti from 'canvas-confetti';
import { createSignal, ParentComponent } from 'solid-js';
import type { Wrapper } from '../util/solid-utils';

/*
const LabelChev: ParentComponent<Wrapper> = props => {
	return (
		<div class="pl-3 flex flex-row w-full justify-between">
			{props.children}
			<span class="w-7 self-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					class="bi bi-chevron-right"
					viewBox="0 0 16 16"
				>
					<path
						fill-rule="evenodd"
						d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
					/>
				</svg>
			</span>
		</div>
	);
};
*/

/*
<div class="dropdown px-4 py-2 text-lg font-semibold text-white bg-indigo-800 rounded-full shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-400 my-4">
	<LabelChev>Create Profile...</LabelChev>
	<div class="dropdown-display z-10 w-96 p-4 ring-1 rounded-lg shadow-xl ring-slate-500 bg-slate-900 flex flex-col bg-opacity-50 backdrop-blur-lg">
		Hi
	</div>
</div>
<div class="z-0 dropdown px-4 py-2 text-lg font-semibold text-white rounded-full shadow-md ring-2 ring-indigo-800 hover:ring-indigo-500 my-4">
	<LabelChev>Log In</LabelChev>
</div>
*/

const LoginForm = () => {
	const [email, setEmail] = createSignal('');
	const [isValid, setIsValid] = createSignal(false);
	return (
		<div class="p-8 sm:w-fit w-80 ring-2 rounded-lg shadow-xl ring-slate-500 from-slate-800 to-slate-900 bg-gradient-to-br flex sm:flex-row flex-col">
			<div class="flex flex-col">
				<p class="text-slate-300">Email</p>
				<input
					type="email"
					class={`text-lg bg-transparent outline-none text-white border-b ${
						isValid() ? 'border-green-500' : 'border-red-600'
					}`}
					placeholder="me@example.com"
					value={email()}
					onKeyUp={e => {
						setIsValid(checkValidEmail(e.currentTarget.value));
						setEmail(e.currentTarget.value);
					}}></input>
			</div>
			<button
				class={`sm:ml-8 sm:mt-0 mt-8 rounded-full h-10 sm:px-10 px-16 sm:self-end self-center ${
					isValid() ? 'bg-green-500 text-black' : 'bg-red-600 text-white'
				}`}>
				{isValid() ? 'Create account' : 'Invalid Email'}
			</button>
		</div>
	);
};

function checkValidEmail(email: string): boolean {
	// eslint-disable-next-line no-useless-escape
	return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/.test(email);
}

export default LoginForm;
