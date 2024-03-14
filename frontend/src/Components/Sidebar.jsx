import React from 'react'
import { Heading } from '@chakra-ui/react'
import { Input, Select, FormLabel, FormControl, Button  } from '@chakra-ui/react'
import style from '../CSS/Sidebar.module.css'

const Sidebar = () => {
    return (
        <div>

            <div>
                <Heading as='h3' size='lg'>
                    Create Todo
                </Heading>

                <FormControl isRequired>
                    <FormLabel>Task Title</FormLabel>
                    <Input placeholder='Enter Task To Do' />

                    <FormLabel>Status</FormLabel>
                    <Select>
                        <option value="todo">ToDo</option>
                        <option value="in progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </Select>

                </FormControl>
                
               <div className={style.createBtn}>
               <Button colorScheme='blue'>Create</Button>
               </div>
                

                
            </div>
        </div>
    )
}

export default Sidebar
