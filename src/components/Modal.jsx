import { useState } from "react";
import { createPortal } from "react-dom";
import {RxCross2} from 'react-icons/rx';

const Modal = ({data, children, stylesBtn, modalStyles}) => {
const [isOpen, setIsOpen] = useState(false);

const handleIsOpen = () => {
    setIsOpen(true);
}

const closeModal = e => {
    setIsOpen(false)
}
 
const closeModalOnBAckdrop = e => {
    if(e.target !== e.currentTarget){
        return
    }

    setIsOpen(false)
}

  return <>
  <button type="button" onClick={handleIsOpen} className={`${stylesBtn}`}>
    {data}
  </button>
  
   {isOpen && createPortal( <div className="fixed w-full h-full backdrop-blur-[1.5px] left-0 top-0 z-10 flex justify-center items-center px-[16px]" onClick={closeModalOnBAckdrop}>
    <div className={`bg-[#F5FAF6] rounded-[5px] p-[30px] relative w-[416px] ${modalStyles}`}>
        {children}
        <RxCross2 className="absolute top-[15px] right-[15px] w-[24px] h-[24px]" onClick={closeModal}/>
    </div>
   </div>, document.querySelector("#root-modal"))}
  </>

}

export default Modal
