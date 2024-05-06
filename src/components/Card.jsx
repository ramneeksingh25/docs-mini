/* eslint-disable react/prop-types */
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"
function Card({data,reference}) {
	return (
		<>
			<motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragTransition={{ bounceStiffness: 600, bounceDamping: 100 }} className="relative flex-shrink-0 w-60 h-72 rounded-[45px]  bg-zinc-900/90 text-white py-10 px-5 overflow-hidden">
				<FaRegFileAlt />
				<p className="text-xs leading-tight mt-5 font-semibold">
					{data.desc}
				</p>
				<div className="footer absolute bottom-0 w-full left-0 mb-0">
					<div className="flex items-center justify-between py-3  px-8">
						<h5>{data.fileSize}</h5>
						<span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
							{data.close?<IoMdClose/>:
							<LuDownload
								size=".7em"
								color="#fff"
							/>}
						</span>
					</div>
					{data.tag.isOpen && (
					<div className={`tag w-full bg-${data.tag.tagColor}-600 flex items-center justify-center`}>
						<h3 className="text-sm font-semibold py-3">{data.tag.tagTitle}</h3>
					</div> )};
				</div>
			</motion.div>
		</>
	);
}

export default Card;
