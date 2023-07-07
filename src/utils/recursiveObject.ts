export const recurser = ({
	dom,
	parent,
	level = 0,
	collection = [],
	childIndex = 0,
}: {
	dom: any;
	parent: { dom: any; id: string };
	level?: number;
	childIndex?: number;
	collection?: string[];
}) => {
	const a = collection;

	if (dom.children) {
		a.push(
			`${parent.id}[${parent.dom.tagName} ${
				parent.dom.id ? `#${parent.dom.id}` : ""
			} ${
				parent.dom.className ? `\\n .${parent.dom.className}` : ""
			}] --> ${parent.id + dom.tagName + level + childIndex}[${
				dom.tagName
			} ${dom.id ? `#${dom.id}` : ""} ${
				dom.className ? `\\n .${dom.className}` : ""
			}]`
		);

		for (let i = 0; i < dom.children.length; i++) {
			recurser({
				dom: dom.children[i],
				parent: {
					id: parent.id + dom.tagName + level + childIndex,
					dom: dom,
				},
				level: level + 1,
				collection: a,
				childIndex: i,
			});
		}
	} else {
		a.push(
			`${parent.id}[${parent.dom.tagName}] --> ${
				parent.id + dom.tagName + level + childIndex
			}[${dom.tagName} ${dom.id ? `#${dom.id}` : ""} ${
				dom.className ? `\\n .${dom.className}` : ""
			}] `
		);
	}
	return a;
};
