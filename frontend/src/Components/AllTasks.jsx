import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const AllTasks = () => {
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Todo</Tab>
                    <Tab>In Progress</Tab>
                    <Tab>Completed</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <p>Todo</p>
                    </TabPanel>
                    <TabPanel>
                        <p>In Progress</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Completed</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default AllTasks
