import Dropdown from 'rc-dropdown';
import Menu, {Item as MenuItem, Divider} from 'rc-menu';
import 'rc-dropdown/assets/index.css';
import {AiTwotoneCheckCircle, AiOutlineCalendar} from "react-icons/ai";

const CardHeader = ({dispatch}) => {

    const handleDropdownSelect = ({key}) => {
        if (key === "dueDate") {
            sortByDueDate();
        } else if (key === "status") {
            sortByStatus();
        }
    };

    const sortByDueDate = () => {
        dispatch({type: "SORT_BY_DUE_DATE"});
    };

    const sortByStatus = () => {
        dispatch({type: "SORT_BY_STATUS"});
    };

    const menu = (
        <Menu onSelect={handleDropdownSelect}>
            <MenuItem key="dueDate">Due date <AiOutlineCalendar size={20}/>  </MenuItem>
            <Divider />
            <MenuItem key="status">Status <AiTwotoneCheckCircle size={18}/>  </MenuItem>
        </Menu>
    );

    return (
        <div className="selectBox">
            <Dropdown
                trigger={['click']}
                overlay={menu}
                animation="slide-up"
            >
                <button style={{width: 100}}>Sort by▼</button>
            </Dropdown>
        </div>
    );
};

export default CardHeader;
