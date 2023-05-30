import TemplteReport from './TemplteReport';
import ReactToPrint from 'react-to-print';
import { Button } from "react-bootstrap";
import React from 'react';

class GenReport extends React.Component {
    render() {
        const { dataCall, info } = this.props;
        return (
            <>
                <ReactToPrint
                    // trigger={() => <Button variant="danger" style={{ marginRight: '10px' }}><BsFillFileEarmarkPdfFill /> PDF</Button>}
                    trigger={() => this.props.children}
                    content={() => this.componentRef}
                />
                {
                    dataCall.id && (
                        < div style={{ display: "none" }}>
                            <TemplteReport dataCall={dataCall} info={info} ref={(el) => (this.componentRef = el)} />
                        </div >
                    )
                }
            </>
        );
    }
}

export default GenReport;
