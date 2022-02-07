import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";

export default function App() {
	const [items, setItems] = useState([]);

	function addItem(input) {
		setItems((prev) => {
			return [...prev, input];
		});
	}

	function deleteItem(id) {
		setItems((prev) => {
			return items.filter((item, index) => {
				return id !== index;
			});
		});
	}
	return (
		<div>
			<Header />
			<CreateNote onAdd={addItem} />
			{items.map((item, index) => {
				return (
					<Note
						key={index}
						id={index}
						onDelete={deleteItem}
						title={item.title}
						content={item.content}
					/>
				);
			})}
			<Footer />
		</div>
	);
}
