export function Toast({ message, type }) {
    if (!message) return null;

    const color =
        type === "success"
            ? "bg-success"
            : type === "error"
                ? "bg-danger"
                : "bg-secondary";

    return (
        <div
            className={`position-fixed start-50 translate-middle-x top-0 mt-4 p-3 text-white rounded shadow ${color}`}
            style={{
                zIndex: 1055,
                minWidth: 260,
                textAlign: "center",
                fontWeight: 500,
            }}
        >
            {message}
        </div>
    );
}
