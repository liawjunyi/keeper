import React, { useState } from "react";

function CreateNote(props) {
	const [input, setInput] = useState({
		title: "",
		content: "",
	});

	function handleChange(e) {
		const { name, value } = e.target;

		setInput((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
		console.log(input);
	}
	return (
		<div>
			<form>
				<input
					onChange={handleChange}
					value={input.title}
					placeholder="Title"
					name="title"
				></input>
				<textarea
					onChange={handleChange}
					value={input.content}
					placeholder="Take a note..."
					name="content"
				></textarea>
				<button
					onClick={(e) => {
						props.onAdd(input);
						e.preventDefault();
					}}
				>
					<i className="far fa-edit"></i>
				</button>
			</form>
		</div>
	);
}

export default CreateNote;
