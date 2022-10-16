import React, {useEffect} from 'react';
import {footerContent, header} from "../../constants/copyright";
import {node} from "prop-types";
import {modalStorage} from "../../redux/reducer/modals";
import ModalController from "../baseComponents/controllers/modalController/modalController";
import initModalsList from "../baseComponents/containers/modalsList/modalsList";
import {Footer} from "../baseComponents/gui/footer/Footer";
import CustomHeader from "../baseComponents/gui/customHeader/CustomHeader";

export default function MainLayout({children}) {
  useEffect(() => {
    initModalsList()
  }, []);
  return (
    <>
      <input type={"checkbox"} className={"custom-header__input"} id={"menu-burger"}/>

      <div className={'main-container'}>
          <CustomHeader {...header}/>
          <div className={'content-wrapper'}>{children}</div>
          <Footer  {...footerContent}/>
      </div>
      <ModalController modalStorage={modalStorage}/>
    </>
  )
}

MainLayout.propTypes = {
  children: node,
};
