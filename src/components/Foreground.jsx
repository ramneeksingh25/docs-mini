import { useRef} from "react";
import Card from "./Card";

function Foreground() {
  const ref= useRef(null);
	const data = [
		{
			desc: "Example text",
			fileSize: ".9mb",
			close: true,
			tag: { isOpen: true, tagTitle:"Download Now", tagColor:"blue" },
		},
		{
			desc: "Example text",
			fileSize: ".9mb",
			close: true,
			tag: { isOpen: true, tagTitle:"Download Now", tagColor:"green" },
		},
		{
			desc: "Example text",
			fileSize: ".9mb",
			close: true,
			tag: { isOpen: true, tagTitle:"Download Now", tagColor:"violet" },
		},
	];
	return (
		<div>
			<div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full flex gap-5 p-5 flex-wrap">
        {data.map((item, index) =>{
          return <Card key={index} data={item} reference={ref} draggable/>
        })}
			</div>
		</div>
	);
}

export default Foreground;
