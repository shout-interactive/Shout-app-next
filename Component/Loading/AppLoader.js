import classes from "./index.module.css"

import { motion, AnimatePresence } from "framer-motion"

const Loader = ({ loading }) => {
	return (
		<AnimatePresence>
			{loading && (
				<motion.div
					exit={{ opacity: 0, transition: { duration: 1.3, delay: 1 } }}
					initial={{ opacity: 1 }}
					style={{
						position: "fixed",
						width: "100vw",
						height: "100vh",
						zIndex: 999,
						backgroundColor: "#fff",
					}}
				>
					<div className={classes["root"]}>
						<img
							className={classes.img}
							src={"/assest/images/shoutLogo.svg"}
							alt="Shout logo"
						/>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default Loader
