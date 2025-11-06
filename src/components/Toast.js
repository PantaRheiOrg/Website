import { motion, AnimatePresence } from "framer-motion";

export function Toast({ message, type }) {
    const color =
        type === "success"
            ? "bg-success"
            : type === "error"
                ? "bg-danger"
                : "bg-secondary";

    return (
        <AnimatePresence>
            {message && (
                <motion.div
                    key="toast"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.75 }}
                    className={`position-fixed start-50 translate-middle-x p-3 text-white rounded shadow ${color}`}
                    style={{
                        top: "1.5rem",
                        zIndex: 1055,
                        minWidth: 260,
                        textAlign: "center",
                        fontWeight: 500,
                    }}
                >
                    {message}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
