import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styled from "./tabfield.module.css"
import { useState } from 'react';
import Labeltab from './labelTab';
const Tabfield = ({ leftLabel, rightLabel, rightValue, leftValue, rightIcon, leftIcon, iconStatus = false }) => {
    const [activeTab, setActiveTabs] = useState(true)
    return (
        <div className="col-12">
            <Tabs>
                <TabList dir='rtl' className={`d-flex justify-content-center align-items-center p-0 border-bottom pb-1 ${styled.list_tabs}`}>
                    <Tab onClick={() => {
                        setActiveTabs(true)
                    }} className={` ${activeTab && styled.li_tabs} ${styled.li_default}  p-1 pt-3 ${!activeTab && "text-secondary"} w-50 text-center fw-bold`}><Labeltab label={rightLabel} img={iconStatus && rightIcon} /></Tab>
                    <Tab onClick={() => {
                        setActiveTabs(activeTab && false)
                    }} className={` ${!activeTab && styled.li_tabs} ${styled.li_default} p-1 pt-3  ${activeTab && "text-secondary"} w-50 text-center fw-bold`}><Labeltab label={leftLabel} img={iconStatus && leftIcon} /></Tab>
                </TabList>
                <TabPanel>
                    {rightValue}
                </TabPanel>
                <TabPanel>
                    {leftValue}
                </TabPanel>
            </Tabs>
        </div>
    )
};
export default Tabfield