import { Toast, ToastContainer } from "react-bootstrap";

export function ToastAlert(props) {
    const { close, alert, toast } = props;
    return (
        <>
            <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1, position: 'fixed' }}>
                <Toast onClose={close} show={alert} bg={toast.status.toLowerCase()} delay={3000} autohide>
                    <Toast.Header>
                        <img
                            src="/images/electric-meter.png"
                            width={20}
                            height={20}
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">Marotab Web</strong>
                        {/* <small className="text-muted">just now</small> */}
                    </Toast.Header >
                    <Toast.Body className="text-white">{toast.result}</Toast.Body>
                </Toast >
            </ToastContainer >
        </>
    );
}