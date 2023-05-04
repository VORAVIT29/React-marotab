import { Spinner } from 'react-bootstrap';
import './SpinerLoad.css';

function SpinerLoad(props) {
    const { showLoad } = props;
    return (
        <>
            {showLoad ?
                <>
                    <div className='bg-load-spiner'>
                        {/* Loading... */}
                        <div className='load-spiner'>
                            <Spinner animation="border" variant="secondary" />&nbsp;&nbsp;
                            กำลังโหลด...
                        </div>
                    </div>
                </>
                : ''
            }
        </>
    )
}

export default SpinerLoad;