import { FormEvent } from "react";

export default function Login() {
	function handleForm(event: FormEvent) {
		event.preventDefault();
	}
	return (
		<>
			<div>
				<form>
					<input
						className="px-3 py-1 m-2 border border-black"
						type="text"
						name="rollNumber"
						placeholder="Your Roll Number"
					/>
					<input
						className="px-3 py-1 m-2 border border-black"
						type="password"
						name="password"
						placeholder="password"
					/>
					<input
						className="bg-blue-500 px-3 py-1 rounded-sm text-white font-semibold"
						type="submit"
						onClick={handleForm}
						value="Register"
					/>
				</form>
			</div>
		</>
	);
}
