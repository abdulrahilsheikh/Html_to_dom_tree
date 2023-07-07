import { useCallback, useState } from "react";

import "./App.css";
import { Mermaid } from "./components/Mermaid/Mermaid";
import { recurser } from "./utils/recursiveObject";
const initialString = ` <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div  id="roots" class="roots">
     </div>
  </body></html>

`;
function App() {
	const [data, setdata] = useState(initialString);
	const toGraph = useCallback((data: string) => {
		if (!data) return "";
		const div = document.createElement("html");
		div.innerHTML = data;
		const array = recurser({
			dom: div,
			parent: { id: "root", dom: { tagName: "root" } },
		});
		return array.join("\n");
	}, []);
	return (
		<div className="w-full h-screen p-2 flex gap-2">
			<div className="w-1/3">
				<textarea
					className="w-full h-full border outline-none resize-none p-2"
					value={data}
					onChange={(e) => setdata(e.target.value)}
				/>
			</div>
			<Mermaid
				className="h-full flex-1"
				key={data.length}
				data={`flowchart TD \n${toGraph(data)}`}
			/>
		</div>
	);
}

export default App;
