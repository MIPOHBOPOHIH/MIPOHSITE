import { FaGithub, FaTelegram } from "react-icons/fa";

function Footer() {
	return (
		<footer className="bottom-0 w-full py-4 bg-slate-100 dark:bg-black pb-2">
			<div className="flex gap-4 justify-center">
				<a
					href="https://t.me/mipohbopohih"
					target="_blank"
					rel="noopener noreferrer"
					className="text-4xl"
				>
					<FaTelegram size={25} />
				</a>
				<a
					href="https://github.com/MIPOHBOPOHIH"
					target="_blank"
					rel="noopener noreferrer"
					className="text-4xl"
				>
					<FaGithub size={25} />
				</a>
			</div>
			<p className="text-center mt-4 m-5">
				Made with <span className="text-red-500">❤</span> and Next.js and Tr3ble {" "}
			</p>
		</footer>
	);
}

export default Footer;
