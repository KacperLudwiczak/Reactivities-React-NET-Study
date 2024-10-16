import {Button, Container, Menu} from "semantic-ui-react";

interface Props {
    openForm: () => void;
}

export default function NavBar({openForm}: Props) {
    return (
        <Menu inverted secondary fixed='top'>
            <Container>
                <Menu.Item header style={{ fontSize: '1.1em' }}>
                    <img src='/assets/logo.png' alt='logo' style={{marginRight: 10}}/>
                    Reactivities
                </Menu.Item>
                <Menu.Item name='Activities' style={{ fontSize: '1em' }}/>
                <Menu.Item>
                    <Button inverted content='Create Activity' onClick={openForm}/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}