import { format } from 'date-fns';
import { th } from 'date-fns/locale';
import React from 'react';

class TemplteReport extends React.Component {
    render() {
        const { dataCall, info } = this.props;

        const formatDate = (date) => {
            const dataYear = format(new Date(date), 'd MMM yyyy', { locale: th });
            const year = format(new Date(date), 'yyyy', { locale: th });
            const convertYear = Number(year) + 543;
            return dataYear.replace(year, convertYear.toString());
        }

        const room = (num) => {
            while (num.length < 3)
                num = '0' + num;
            return num
        }

        return (

            // <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
            <table width="100%">
                <tr>
                    <td width="50%">&nbsp;</td>
                    <td align="center">
                        {/* <a name="JR_PAGE_ANCHOR_0_1" /> */}
                        <table className="jrPage" data-jr-height={595} cellPadding={0} cellSpacing={0} border={0}
                            style={{ emptyCells: 'show', width: '842px', borderCollapse: 'collapse', backgroundColor: 'white' }}>
                            <tbody>
                                <tr valign="top" style={{ height: 0 }}>
                                    <td style={{ width: '34px' }} />
                                    <td style={{ width: '66px' }} />
                                    <td style={{ width: '30px' }} />
                                    <td style={{ width: '60px' }} />
                                    <td style={{ width: '1px' }} />
                                    <td style={{ width: '109px' }} />
                                    <td style={{ width: '73px' }} />
                                    <td style={{ width: '37px' }} />
                                    <td style={{ width: '103px' }} />
                                    <td style={{ width: '7px' }} />
                                    <td style={{ width: '111px' }} />
                                    <td style={{ width: '89px' }} />
                                    <td style={{ width: '40px' }} />
                                    <td style={{ width: '51px' }} />
                                    <td style={{ width: '31px' }} />
                                </tr>
                                <tr valign="top" style={{ height: '15px' }}>
                                    <td colSpan={15}></td>
                                </tr>
                                <tr valign="top" style={{ height: '5px' }}>
                                    <td colSpan={14}></td>
                                    {/* <td colSpan={2} rowSpan={5}>
                                        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                                            <div style={{ position: 'absolute', overflow: 'hidden', width: '100%', height: '100%' }}>
                                                icon scan QR CODE
                                    <table cellPadding={0} cellSpacing={0} border={0} style={{
                                        emptyCells: 'show', width: '100%',
                                        borderCollapse: 'collapse'
                                    }}>
                                        <tbody>
                                            <tr valign="top" style={{ height: 0 }}>
                                                <td style={{ width: '90px' }} />
                                                <td style={{ width: '1px' }} />
                                            </tr>
                                            <tr valign="top" style={{ height: '100px' }}>
                                                <td style={{ pointerEvents: 'auto' }}>
                                                    <img src="/images/scan.png" style={{ width: 90 }} alt="scan" />
                                                </td>
                                                <td>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div style={{ position: 'relative', width: '100%', height: '100%', pointerEvents: 'none' }}>
                                    QR CODE
                                    <table cellPadding={0} cellSpacing={0} border={0} style={{
                                        emptyCells: 'show', width: '100%',
                                        borderCollapse: 'collapse'
                                    }}>
                                        <tbody>
                                            <tr valign="top" style={{ height: 0 }}>
                                                <td style={{ width: '1px' }} />
                                                <td style={{ width: '90px' }} />
                                            </tr>
                                            <tr valign="top" style={{ height: '90px' }}>
                                                <td colSpan={2}>
                                                </td>
                                            </tr>
                                            <tr valign="top" style={{ height: '30px' }}>
                                                <td>
                                                </td>
                                                <td style={{ pointerEvents: 'auto', textIndent: '0px', textAlign: 'left' }}>
                                                    <span style={{
                                                        fontFamily: 'TH SarabunPSK', color: '#000000', fontSize: '16px',
                                                        lineHeight: '1.1300023', fontWeight: 'bold'
                                                    }}>QR code ชำระเงิน</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                    </td> */}
                                    <td></td>
                                </tr>
                                {/* Icon Web */}
                                <tr valign="top" style={{ height: '19px' }}>
                                    <td></td>
                                    <td colSpan={2} rowSpan={2}>
                                        <img src="/images/icon_wab.png" style={{ width: 96 }} alt="icon_wab" />
                                    </td>
                                    <td colSpan={9}></td>
                                    <td></td>
                                </tr>
                                <tr valign="top" style={{ height: '71px' }}>
                                    {/* <td></td> */}
                                    <td colSpan={5}></td>
                                    {/* <td colSpan={6} rowSpan={2} style={{ background: 'red' }}> */}
                                    <td colSpan={6}>
                                        <center>
                                            {/* <div style={{ width: '100%', height: '100%', position: 'relative' }}> */}
                                            {/* <div style={{ width: '100%', height: '100%' }}> */}
                                            {/* <div style={{ position: 'absolute', overflow: 'hidden', width: '100%', height: '100%' }}> */}
                                            {/* <tr valign="top" style={{ height: 0 }}>
                                                        <td style={{ width: '140px' }} />
                                                    </tr> */}
                                            {/* <tr valign="top" style={{ height: '83px' }}>
                                                        <td style={{ pointerEvents: 'auto', textIndent: '0px', textAlign: 'left' }}> */}
                                            <span style={{
                                                fontFamily: 'TH SarabunPSK', color: '#000000', fontSize: '40px', fontWeight: 'bold'
                                            }}>
                                                <u>
                                                    ใบแจ้งหนี้
                                                </u>
                                            </span>
                                            {/* </td>
                                                    </tr> */}
                                            {/* </div> */}
                                            {/* <div style={{ position: 'relative', width: '100%', height: '100%', pointerEvents: 'none' }}>
                                                        <table cellPadding={0} cellSpacing={0} border={0} style={{
                                                            emptyCells: 'show', width: '100%',
                                                            borderCollapse: 'collapse'
                                                        }}>
                                                            <tbody>
                                                                <tr valign="top" style={{ height: 0 }}>
                                                                    <td style={{ width: '13px' }} />
                                                                    <td style={{ width: '94px' }} />
                                                                    <td style={{ width: '33px' }} />
                                                                </tr>
                                                                <tr valign="top" style={{ height: '46px' }}>
                                                                    <td colSpan={3}>
                                                                    </td>
                                                                </tr>
                                                                <tr valign="top" style={{ height: '1px' }}>
                                                                    <td>
                                                                    </td>
                                                                    <td style={{
                                                                        pointerEvents: 'auto', backgroundColor: '#FFFFFF',
                                                                        borderTop: '1px solid #000000'
                                                                    }}>
                                                                    </td>
                                                                    <td>
                                                                    </td>
                                                                </tr>
                                                                <tr valign="top" style={{ height: '36px' }}>
                                                                    <td colSpan={3}>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div> */}
                                            {/* </div> */}
                                        </center>
                                    </td>
                                    <td colSpan={5}></td>
                                    {/* <td></td> */}
                                </tr>
                                <tr valign="top" style={{ height: '12px' }}>
                                    <td colSpan={7}>
                                    </td>
                                    <td colSpan={3}>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                                <tr valign="top" style={{ height: '13px' }}>
                                    <td colSpan={12}>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                                <tr valign="top" style={{ height: '35px' }}>
                                    <td colSpan={15}>
                                    </td>
                                </tr>
                                <tr valign="top" style={{ height: '21px' }}>
                                    <td colSpan={2}>
                                    </td>
                                    <td colSpan={11} style={{ background: "#D9D9D9" }}>
                                        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                                            {/* <div style={{ position: 'absolute', overflow: 'hidden', width: '100%', height: '100%' }}>
                                                    <table cellPadding={0} cellSpacing={0} border={0} style={{
                                                        emptyCells: 'show', width: '100%',
                                                        borderCollapse: 'collapse'
                                                    }}>
                                                        <tbody>
                                                            <tr valign="top" style={{ height: 0 }}>
                                                                <td style={{ width: '660px' }} />
                                                            </tr>
                                                            <tr valign="top" style={{ height: '21px' }}>
                                                                <td style={{ pointerEvents: 'auto', backgroundColor: '#D9D9D9' }}>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div> */}
                                            <div style={{ position: 'relative', width: '100%', height: '100%', pointerEvents: 'none' }}>
                                                <table cellPadding={0} cellSpacing={0} border={0} style={{
                                                    emptyCells: 'show', width: '100%',
                                                    borderCollapse: 'collapse'
                                                }}>
                                                    <tbody>
                                                        <tr valign="top" style={{ height: 0 }}>
                                                            <td style={{ width: '260px' }} />
                                                            {/* <td style={{ width: '130px' }} /> */}
                                                            <td style={{ width: '140px' }} />
                                                            {/* <td style={{ width: '141px' }} /> */}
                                                            <td style={{ width: '95px' }} />
                                                            {/* <td style={{ width: '129px' }} /> */}
                                                            <td style={{ width: '119px' }} />
                                                        </tr>
                                                        <tr valign="top" style={{ height: '21px' }}>
                                                            <td style={{
                                                                pointerEvents: 'auto', borderTop: '1px solid #000000',
                                                                borderLeft: '1px solid #000000', borderBottom: '1px solid #000000', textIndent: '10px',
                                                                verticalAlign: 'middle', textAlign: 'left'
                                                            }}>
                                                                <span style={{
                                                                    fontFamily: 'TH SarabunPSK', color: '#000000', fontSize: '16px',
                                                                    lineHeight: 1, lineHeight: 'normal', fontWeight: 'bold'
                                                                }}>ชื่อ-นามสกุล
                                                                    : {info.name} {info.last_name}</span>
                                                            </td>
                                                            <td style={{
                                                                pointerEvents: 'auto', borderTop: '1px solid #000000',
                                                                borderBottom: '1px solid #000000', verticalAlign: 'middle',
                                                                textAlign: 'left'
                                                            }}>
                                                                {/* textIndent: '10px', */}
                                                                <span style={{
                                                                    fontFamily: 'TH SarabunPSK', color: '#000000', fontSize: '16px',
                                                                    lineHeight: 1, lineHeight: 'normal', fontWeight: 'bold'
                                                                }}>ว/ด/ป (ที่สแกน)
                                                                    : {formatDate(dataCall.date_camera)}</span>
                                                            </td>
                                                            <td style={{
                                                                pointerEvents: 'auto', borderTop: '1px solid #000000',
                                                                borderBottom: '1px solid #000000', textIndent: '10px', verticalAlign: 'middle',
                                                                textAlign: 'left'
                                                            }}>
                                                                <span style={{
                                                                    fontFamily: 'TH SarabunPSK', color: '#000000', fontSize: '16px',
                                                                    lineHeight: 1, lineHeight: 'normal', fontWeight: 'bold'
                                                                }}>เวลา
                                                                    : {dataCall.time_camera} น.</span>
                                                            </td>
                                                            <td style={{
                                                                pointerEvents: 'auto', border: '1px solid #000000', textIndent: '0px',
                                                                verticalAlign: 'middle', textAlign: 'center'
                                                            }}>
                                                                <span style={{
                                                                    fontFamily: 'TH SarabunPSK', color: '#000000', fontSize: '16px',
                                                                    lineHeight: '1.1300023', fontWeight: 'bold'
                                                                }}>&nbsp;ห้องเลขที่
                                                                    : {room(dataCall.room_number)}</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </td>
                                    <td colSpan={2}>
                                    </td>
                                </tr>
                                <tr valign="top" style={{ height: '25px' }}>
                                    <td colSpan={15}>
                                    </td>
                                </tr>
                                <tr valign="top" style={{ height: '24px' }}>
                                    <td colSpan={2}>
                                    </td>
                                    <td colSpan={11} style={{ background: "#D9D9D9" }}>
                                        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                                            {/* <div style={{ position: 'absolute', overflow: 'hidden', width: '100%', height: '100%' }}>
                                                    <table cellPadding={0} cellSpacing={0} border={0} style={{
                                                        emptyCells: 'show', width: '100%',
                                                        borderCollapse: 'collapse'
                                                    }}>
                                                        <tbody>
                                                            <tr valign="top" style={{ height: 0 }}>
                                                                <td style={{ width: '660px' }} />
                                                            </tr>
                                                            <tr valign="top" style={{ height: '24px' }}>
                                                                <td style={{ pointerEvents: 'auto', backgroundColor: '#D9D9D9' }}>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div> */}
                                            <div style={{ position: 'relative', width: '100%', height: '100%', pointerEvents: 'none' }}>
                                                <table cellPadding={0} cellSpacing={0} border={0} style={{
                                                    emptyCells: 'show', width: '100%',
                                                    borderCollapse: 'collapse'
                                                }}>
                                                    <tbody>
                                                        <tr valign="top" style={{ height: 0 }}>
                                                            <td style={{ width: '90px' }} />
                                                            <td style={{ width: '110px' }} />
                                                            <td style={{ width: '110px' }} />
                                                            <td style={{ width: '110px' }} />
                                                            <td style={{ width: '111px' }} />
                                                            <td style={{ width: '129px' }} />
                                                        </tr>
                                                        {/* <td colSpan={2}>
                                                            </td> */}
                                                        <tr valign="top" style={{ height: '24px' }}>
                                                            <td style={{
                                                                pointerEvents: 'auto', border: '1px solid #000000', textIndent: '0px',
                                                                verticalAlign: 'middle', textAlign: 'center'
                                                            }}>
                                                                <span style={{
                                                                    fontFamily: 'TH SarabunPSK', color: '#000000', fontSize: '16px',
                                                                    lineHeight: '1.1300023', fontWeight: 'bold'
                                                                }}>รายการ</span>
                                                            </td>
                                                            <td style={{
                                                                pointerEvents: 'auto', borderTop: '1px solid #000000',
                                                                borderBottom: '1px solid #000000', borderRight: '1px solid #000000', textIndent: '0px',
                                                                verticalAlign: 'middle', textAlign: 'center'
                                                            }}>
                                                                <span style={{
                                                                    fontFamily: 'TH SarabunPSK', color: '#000000', fontSize: '16px',
                                                                    lineHeight: '1.1300023', fontWeight: 'bold'
                                                                }}>เลขมิเตอร์ครั้งนี้</span>
                                                            </td>
                                                            <td style={{
                                                                pointerEvents: 'auto', borderTop: '1px solid #000000',
                                                                borderBottom: '1px solid #000000', borderRight: '1px solid #000000', textIndent: '0px',
                                                                verticalAlign: 'middle', textAlign: 'center'
                                                            }}>
                                                                <span style={{
                                                                    fontFamily: 'TH SarabunPSK', color: '#000000', fontSize: '16px',
                                                                    lineHeight: '1.1300023', fontWeight: 'bold'
                                                                }}>เลขมิเตอร์ก่อน</span>
                                                            </td>
                                                            <td style={{
                                                                pointerEvents: 'auto', borderTop: '1px solid #000000',
                                                                borderBottom: '1px solid #000000', borderRight: '1px solid #000000', textIndent: '0px',
                                                                verticalAlign: 'middle', textAlign: 'center'
                                                            }}>
                                                                <span style={{
                                                                    fontFamily: 'TH SarabunPSK', color: '#000000', fontSize: '16px',
                                                                    lineHeight: '1.1300023', fontWeight: 'bold'
                                                                }}>จำนวนหน่วยที่ใช้</span>
                                                            </td>
                                                            <td style={{
                                                                pointerEvents: 'auto', borderTop: '1px solid #000000',
                                                                borderBottom: '1px solid #000000', borderRight: '1px solid #000000', textIndent: '0px',
                                                                verticalAlign: 'middle', textAlign: 'center'
                                                            }}>
                                                                <span style={{
                                                                    fontFamily: 'TH SarabunPSK', color: '#000000', fontSize: '16px',
                                                                    lineHeight: '1.1300023', fontWeight: 'bold'
                                                                }}>อัตราค่าไฟฟ้า</span>
                                                            </td>
                                                            <td style={{
                                                                pointerEvents: 'auto', borderTop: '1px solid #000000',
                                                                borderBottom: '1px solid #000000', borderRight: '1px solid #000000', textIndent: '0px',
                                                                verticalAlign: 'middle', textAlign: 'center'
                                                            }}>
                                                                <span style={{
                                                                    fontFamily: 'TH SarabunPSK', color: '#000000', fontSize: '16px',
                                                                    lineHeight: '1.1300023', fontWeight: 'bold'
                                                                }}>บาท/เดือน</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </td>
                                    <td colSpan={2}>
                                    </td>
                                </tr>
                                <tr valign="top" style={{ height: '40px' }}>
                                    <td colSpan={2}>
                                    </td>
                                    <td colSpan={2} style={{
                                        borderLeft: '1px solid #000000', borderBottom: '1px solid #000000',
                                        borderRight: '1px solid #000000', textIndent: '0px', verticalAlign: 'middle', textAlign: 'center'
                                    }}>
                                        <span style={{
                                            fontFamily: 'TH SarabunPSK', color: '#000000', fontSize: '16px',
                                            lineHeight: '1.1300023', fontWeight: 'bold'
                                        }}>ค่าไฟ</span>
                                    </td>
                                    <td>
                                    </td>
                                    <td style={{
                                        borderBottom: '1px solid #000000', borderRight: '1px solid #000000', textIndent: '0px',
                                        verticalAlign: 'middle', textAlign: 'center'
                                    }}>
                                        <span style={{
                                            fontFamily: 'TH SarabunPSK', color: '#000000', fontSize: '16px',
                                            lineHeight: '1.1300023', fontWeight: 'bold'
                                        }}>{dataCall.unit_present}</span>
                                    </td>
                                    <td colSpan={2} style={{
                                        borderBottom: '1px solid #000000', borderRight: '1px solid #000000',
                                        textIndent: '0px', verticalAlign: 'middle', textAlign: 'center'
                                    }}>
                                        <span style={{
                                            fontFamily: 'TH SarabunPSK', color: '#000000', fontSize: '16px',
                                            lineHeight: '1.1300023', fontWeight: 'bold'
                                        }}>{dataCall.unit_before}</span>
                                    </td>
                                    <td colSpan={2} style={{
                                        borderBottom: '1px solid #000000', borderRight: '1px solid #000000',
                                        textIndent: '0px', verticalAlign: 'middle', textAlign: 'center'
                                    }}>
                                        <span style={{
                                            fontFamily: 'TH SarabunPSK', color: '#000000', fontSize: '16px',
                                            lineHeight: '1.1300023', fontWeight: 'bold'
                                        }}>{dataCall.unit_used}</span>
                                    </td>
                                    <td style={{
                                        borderBottom: '1px solid #000000', textIndent: '0px', verticalAlign: 'middle',
                                        textAlign: 'center'
                                    }}>
                                        <span style={{
                                            fontFamily: 'TH SarabunPSK', color: '#000000', fontSize: '16px',
                                            lineHeight: '1.1300023', fontWeight: 'bold'
                                        }}>{dataCall.electricity_rate}</span>
                                    </td>
                                    <td colSpan={2} style={{
                                        borderLeft: '1px solid #000000', borderBottom: '1px solid #000000',
                                        borderRight: '1px solid #000000', textIndent: '0px', verticalAlign: 'middle', textAlign: 'center'
                                    }}>
                                        <span style={{
                                            fontFamily: 'TH SarabunPSK', color: '#000000', fontSize: '16px',
                                            lineHeight: '1.1300023', fontWeight: 'bold'
                                        }}>{dataCall.electricity_bill}</span>
                                    </td>
                                    <td colSpan={2}>
                                    </td>
                                </tr>
                                <tr valign="top" style={{ height: '1px' }}>
                                    <td colSpan={2}>
                                    </td>
                                    <td colSpan={2} rowSpan={2} style={{
                                        borderLeft: '1px solid #000000', borderBottom: '1px solid #000000',
                                        borderRight: '1px solid #000000', textIndent: '0px', verticalAlign: 'middle', textAlign: 'center'
                                    }}>
                                        <span style={{
                                            fontFamily: 'TH SarabunPSK', color: '#000000', fontSize: '16px',
                                            lineHeight: '1.1300023', fontWeight: 'bold'
                                        }}>ค่าเช่า</span>
                                    </td>
                                    <td colSpan={7}>
                                    </td>
                                    <td colSpan={2} rowSpan={2} style={{
                                        borderLeft: '1px solid #000000', borderBottom: '1px solid #000000',
                                        borderRight: '1px solid #000000', textIndent: '0px', verticalAlign: 'middle', textAlign: 'center'
                                    }}>
                                        <span style={{
                                            fontFamily: 'TH SarabunPSK', color: '#000000', fontSize: '16px',
                                            lineHeight: '1.1300023', fontWeight: 'bold'
                                        }}>{dataCall.room_rental}</span>
                                    </td>
                                    <td colSpan={2}>
                                    </td>
                                </tr>
                                <tr valign="top" style={{ height: '39px' }}>
                                    <td colSpan={2}>
                                    </td>
                                    <td colSpan={7} style={{
                                        borderBottom: '1px solid #000000', textIndent: '0px', verticalAlign: 'middle',
                                        textAlign: 'left'
                                    }}>
                                    </td>
                                    <td colSpan={2}>
                                    </td>
                                </tr>
                                <tr valign="top" style={{ height: '2px' }}>
                                    <td colSpan={2}>
                                    </td>
                                    <td colSpan={2} rowSpan={2} style={{
                                        borderLeft: '1px solid #000000', borderBottom: '1px solid #000000',
                                        borderRight: '1px solid #000000', textIndent: '0px', verticalAlign: 'middle', textAlign: 'center'
                                    }}>
                                        <span style={{
                                            fontFamily: 'TH SarabunPSK', color: '#000000', fontSize: '16px',
                                            lineHeight: '1.1300023', fontWeight: 'bold'
                                        }}>อื่น
                                            ๆ</span>
                                    </td>
                                    <td colSpan={7}>
                                    </td>
                                    <td colSpan={2} rowSpan={2} style={{
                                        borderLeft: '1px solid #000000', borderBottom: '1px solid #000000',
                                        borderRight: '1px solid #000000', textIndent: '0px', verticalAlign: 'middle', textAlign: 'center'
                                    }}>
                                        <span style={{
                                            fontFamily: 'TH SarabunPSK', color: '#000000', fontSize: '16px',
                                            lineHeight: '1.1300023', fontWeight: 'bold'
                                        }}>{dataCall.Other}</span>
                                    </td>
                                    <td colSpan={2}>
                                    </td>
                                </tr>
                                <tr valign="top" style={{ height: '39px' }}>
                                    <td colSpan={2}>
                                    </td>
                                    <td colSpan={7} style={{
                                        borderBottom: '1px solid #000000', textIndent: '0px', verticalAlign: 'middle',
                                        textAlign: 'left'
                                    }}>
                                    </td>
                                    <td colSpan={2}>
                                    </td>
                                </tr>
                                <tr valign="top" style={{ height: '40px' }}>
                                    <td colSpan={2}>
                                    </td>
                                    <td colSpan={2} style={{
                                        borderLeft: '1px solid #000000', borderBottom: '1px solid #000000',
                                        borderRight: '1px solid #000000', textIndent: '0px', verticalAlign: 'middle', textAlign: 'left'
                                    }}>
                                    </td>
                                    <td colSpan={7} style={{
                                        borderLeft: '1px solid #000000', borderBottom: '1px solid #000000',
                                        textIndent: '0px', verticalAlign: 'middle', textAlign: 'left'
                                    }}>
                                    </td>
                                    <td colSpan={2} style={{
                                        borderLeft: '1px solid #000000', borderBottom: '1px solid #000000',
                                        borderRight: '1px solid #000000', textIndent: '0px', verticalAlign: 'middle', textAlign: 'left'
                                    }}>
                                    </td>
                                    <td colSpan={2}>
                                    </td>
                                </tr>
                                <tr valign="top" style={{ height: '39px' }}>
                                    <td colSpan={2}>
                                    </td>
                                    <td colSpan={2} style={{
                                        border: '1px solid #000000', textIndent: '0px', verticalAlign: 'middle',
                                        textAlign: 'center'
                                    }}>
                                        <span style={{
                                            fontFamily: 'TH SarabunPSK', color: '#000000', fontSize: '16px',
                                            lineHeight: '1.1300023', fontWeight: 'bold'
                                        }}>รวม</span>
                                    </td>
                                    <td colSpan={7} style={{
                                        borderTop: '1px solid #000000', borderBottom: '1px solid #000000',
                                        textIndent: '0px', verticalAlign: 'middle', textAlign: 'left'
                                    }}>
                                    </td>
                                    <td colSpan={2} style={{
                                        borderLeft: '1px solid #000000', borderBottom: '1px solid #000000',
                                        borderRight: '1px solid #000000', textIndent: '0px', verticalAlign: 'middle', textAlign: 'center'
                                    }}>
                                        <span style={{
                                            fontFamily: 'TH SarabunPSK', color: '#000000', fontSize: '16px',
                                            lineHeight: '1.1300023', fontWeight: 'bold'
                                        }}>{dataCall.Total}</span>
                                    </td>
                                    <td colSpan={2}>
                                    </td>
                                </tr>
                                <tr valign="top" style={{ height: '40px' }}>
                                    <td colSpan={2}>
                                    </td>
                                    <td colSpan={11} style={{
                                        borderLeft: '1px solid #000000', borderBottom: '1px solid #000000',
                                        borderRight: '1px solid #000000', textIndent: '10px', verticalAlign: 'middle', textAlign: 'left'
                                    }}>
                                        <span style={{
                                            fontFamily: 'TH SarabunPSK', color: '#000000', fontSize: '16px', lineHeight: 1,
                                            lineHeight: 'normal', fontWeight: 'bold'
                                        }}>ชำระเงินก่อนวันที่
                                            8 ของทุกเดือน </span>
                                        {/* (crop, percentCrop) */}
                                    </td>
                                    <td colSpan={2}>
                                    </td>
                                </tr>
                                <tr valign="top" style={{ height: '115px' }}>
                                    <td colSpan={15}>
                                    </td>
                                </tr>
                            </tbody>
                        </table >
                    </td >
                    <td width="50%">&nbsp;</td>
                </tr >
            </table >
        );
    }
}

export default TemplteReport;
