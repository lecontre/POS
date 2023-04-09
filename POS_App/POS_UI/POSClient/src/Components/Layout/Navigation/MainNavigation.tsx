import React, {useState} from 'react';
import "./MainNavigation.scss";
import {FaBars,FaTimes, FaQuestionCircle, 
    FaStore, FaUserAlt, FaSyncAlt, 
    FaCircle, FaCashRegister, FaShoppingBasket,
    FaMoneyBillWave, FaClipboardList, FaCalendarAlt,
    FaChartLine, FaCreditCard, FaFileInvoiceDollar,
    FaReceipt, FaSearchDollar, FaTruck} from "react-icons/fa";

const MainNavigation: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [internetStatus] = useState(true);

    const toggleLeftMenu = () => {
        setShowMenu(!showMenu);
    };
    
    return (
        <div className="Navigation-Layout">
            <div id="POS-Top-Navigation">
                <div className="POS-Top-Navigation-Left">
                    <div className="Hamburger-Menu Action-Group" onClick={toggleLeftMenu}>
                        {showMenu ? <FaTimes /> : <FaBars />}
                    </div>
                    <div className="POS-Cash-Register Action-Group">
                        <FaCashRegister />
                        <span className="Cash-Register-Text">Cash Register</span>
                    </div>
                    <div className="POS-Offline-Orders Action-Group">
                        <FaShoppingBasket />
                        <span className="Offline-Orders-Text">Offline Orders (1)</span>
                    </div>
                </div>
                <div className="POS-Top-Navigation-Right">
                    <div className="POS-Internet-Status Action-Group">
                        <FaCircle className={`${internetStatus ? 'online' : 'offline'}`} />
                        <span className="Internet-Status-Text">Online</span>
                    </div>
                    <div className="POS-Sync-Area Action-Group">
                        <FaSyncAlt />
                        <span className="POS-Sync-Label">Sync POS</span>
                    </div>
                    <div className="POS-Logout-Area Action-Group">
                        <FaUserAlt />
                        <span className="POS-Logout-Label">Logout: Jorge Contreras</span>
                    </div>
                    <div className="POS-Branch-Area Action-Group">
                        <FaStore />
                        <span className="POS-Branch-Label">Main Branch</span>
                    </div>
                    <div className="POS-Help-Area Action-Group">
                        <FaQuestionCircle />
                    </div>
                </div>
            </div>
            <div id="POS-Drop-Navigation" className={`${showMenu ? 'Show-Side-Menu' : ''}`}>
                <div className="Drop-Menu-Options">
                    <a href="#" className="Options-Item">
                        <FaMoneyBillWave className="Option-Icon" />
                        <span className="Options-Item-Label">New Sale</span>
                    </a>
                    <a href="#" className="Options-Item">
                        <FaClipboardList className="Option-Icon" />
                        <span className="Options-Item-Label">List Sales</span>
                    </a>
                    <a href="#" className="Options-Item">
                        <FaCalendarAlt className="Option-Icon" />
                        <span className="Options-Item-Label">New Layby</span>
                    </a>
                    <a href="#" className="Options-Item">
                        <FaClipboardList className="Option-Icon" />
                        <span className="Options-Item-Label">List Laybys</span>
                    </a>
                    <a href="#" className="Options-Item">
                        <FaFileInvoiceDollar className="Option-Icon" />
                        <span className="Options-Item-Label">New Quote</span>
                    </a>
                    <a href="#" className="Options-Item">
                        <FaClipboardList className="Option-Icon" />
                        <span className="Options-Item-Label">List Quotes</span>
                    </a>
                    <a href="#" className="Options-Item">
                        <FaReceipt className="Option-Icon" />
                        <span className="Options-Item-Label">No Receipt</span>
                    </a>
                    <a href="#" className="Options-Item">
                        <FaSearchDollar className="Option-Icon" />
                        <span className="Options-Item-Label">Search Orders</span>
                    </a>
                    <a href="#" className="Options-Item">
                        <FaClipboardList className="Option-Icon" />
                        <span className="Options-Item-Label">List Returns</span>
                    </a>
                    <a href="#" className="Options-Item">
                        <FaTruck className="Option-Icon" />
                        <span className="Options-Item-Label">New Transfer</span>
                    </a>
                    <a href="#" className="Options-Item">
                        <FaClipboardList className="Option-Icon" />
                        <span className="Options-Item-Label">List Transfers</span>
                    </a>
                    <a href="#" className="Options-Item">
                        <FaCreditCard className="Option-Icon" />
                        <span className="Options-Item-Label">New Purchase Order</span>
                    </a>
                    <a href="#" className="Options-Item">
                        <FaCalendarAlt className="Option-Icon" />
                        <span className="Options-Item-Label">List Purchases</span>
                    </a>
                    <a href="#" className="Options-Item">
                        <FaCashRegister className="Option-Icon" />
                        <span className="Options-Item-Label">Close Register</span>
                    </a>
                    <a href="#" className="Options-Item">
                        <FaChartLine className="Option-Icon" />
                        <span className="Options-Item-Label">Reports</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default MainNavigation;