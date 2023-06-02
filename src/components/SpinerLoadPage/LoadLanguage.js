import { Image } from "react-bootstrap";
import './LoadLanguage.css';

export const LoadLanguage = (props) => {
    const { showLoad } = props;
    return (
        <>
            {showLoad && (
                // <div className="language-bg-load-spiner">
                //     <div className='language-position'>
                //         <Image src='/images/electric-meter.png' width={200} alt='icon-logo' className='language-spiner' />
                //         <p>
                //             {sessionStorage.getItem('languageENG') === 'true' ?
                //                 'Please Wait a Moment The System Will Change The Language. It May Take 5 Seconds....' :
                //                 'กรุณารอสักครู่ ระบบทำการเปลี่ยนภาษา อาจใช้เวลา 5 วินาที...'
                //             }
                //         </p>
                //     </div>
                // </div>

                <div className="language-bg-load-spiner">
                    <header className='language-header'>
                        <img src='/images/electric-meter.png' width={200} alt='icon-logo' className='language-logo' />
                        <p>
                            {sessionStorage.getItem('languageENG') === 'true' ?
                                'Please Wait a Moment The System Will Change The Language. It May Take 5 Seconds....' :
                                'กรุณารอสักครู่ ระบบทำการเปลี่ยนภาษา อาจใช้เวลา 5 วินาที...'
                            }
                        </p>
                    </header>
                </div>
            )}
        </>
    );
}