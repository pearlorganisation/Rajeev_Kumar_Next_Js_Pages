import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { GrClose } from "react-icons/gr";

function PopupOverlay(props) {
    const [children, setChildren] = useState(null);
    const [title, setTitle] = useState('');

    const root = useRef(null);
    useEffect(() => {
        props.pm.setChildren = (children, titleText) => {
            setChildren(children);
            setTitle(titleText);
        }
    }, []);
    const handleClick = (e) => {
        if (root == null) {
            return;
        }
        if (e.target == root.current && props.pm.dismissOnOutsideClick) {
            props.pm.hide(); 
        }
    }

    if (!children) {
        return <div></div>
    }
    let child = <div ref={root} 
        className="h-screen w-screen fixed bg-[#00000070] top-0 left-0 flex items-center justify-center z-[999]"
        onClick={handleClick}>
            <div className="flex flex-col justify-center max-h-screen">
                <div className="w-full overflow-y-auto flex flex-col p-4 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                    <div className="flex justify-end">
                        <div className="grow flex justify-center font-GraphikBold">{title}</div>
                        <GrClose className="w-[20px] h-[20px] cursor-pointer" onClick={()=>props.pm.hide()}/>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
    </div>
    return createPortal(child, document.body)
}

class PopupManager {
    constructor() {
        this.popup = <PopupOverlay pm={this}/>
        this.dismissOnOutsideClick = false;
    }
    show(children, title) {
        this.setChildren(children, title);
    }
    hide() {
        this.setChildren(null);
    }
}

const popupManager = new PopupManager();
export default popupManager;