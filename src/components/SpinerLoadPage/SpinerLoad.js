import { Spinner } from 'react-bootstrap';
import './SpinerLoad.css';

function SpinerLoad(props) {
    const { showLoad } = props;
    return (
        <>
            {showLoad && (
                <div className='bg-load-spiner'>
                    <div className='load-spiner'>
                        {/* <Image src='/images/electric-meter.png' width={200} alt='' className='spiner' /> */}
                        <Spinner animation="border" variant="secondary" />&nbsp;&nbsp;
                        {/* กำลังโหลด... */}
                        <div style={{ fontSize: '2.5rem', color: 'gray' }}>
                            {sessionStorage.getItem('languageENG') === 'true' ? 'LOADING...' : 'กำลังโหลด...'}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default SpinerLoad;