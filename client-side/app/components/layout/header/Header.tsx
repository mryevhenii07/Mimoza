import { FC } from 'react'

import styles from './Header.module.scss'
import Cart from './buttons/cart/Cart'
import Menu from './menu/HeaderMenu'
import HeaderLogo from './logo/HeaderLogo';
import HeaderMenu from './menu/HeaderMenu';
import HeaderButtons from './buttons/HeaderButtons';
import HeaderProfile from './profile/HeaderProfile';
import Row from '@/ui/grid/Row';


const Header: FC = () => {
	return (
		<header className={styles.header}>
			{/* <Row> */}
			<HeaderLogo/>
			<HeaderMenu />
			<HeaderButtons />
			<HeaderProfile/>
			{/* </Row> */}
		</header>
	)
}

export default Header
