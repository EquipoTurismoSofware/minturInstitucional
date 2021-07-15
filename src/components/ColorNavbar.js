import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@material-tailwind/react/Navbar';
import NavbarContainer from '@material-tailwind/react/NavbarContainer';
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper';
import NavbarBrand from '@material-tailwind/react/NavbarBrand';
import NavbarToggler from '@material-tailwind/react/NavbarToggler';
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse';
import Nav from '@material-tailwind/react/Nav';
import NavLink from '@material-tailwind/react/NavLink';
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';
import Icon from '@material-tailwind/react/Icon';
import Button from '@material-tailwind/react/Button';

export default function ColorNavbar() {
    const [openNavbar, setOpenNavbar] = useState(false);

    return (
        <Navbar color="lightBlue" navbar>
            <NavbarContainer>
                <NavbarWrapper>
                    <Link
                        to="/"
                        rel="noreferrer"
                    >
                        <NavbarBrand>Institucional</NavbarBrand>
                    </Link>
                    <NavbarToggler
                        onClick={() => setOpenNavbar(!openNavbar)}
                        color="white"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openNavbar}>
                    <Nav>
                        <div className="flex flex-col z-50 lg:flex-row lg:items-center">
                            <NavLink
                                href={`${process.env.REACT_APP_URL}/estadisticas`}
                                rel="noreferrer"
                                ripple="light"
                            >
                                <Icon name="query_stats" size="2xl" />
                                &nbsp;Estadisticas
                            </NavLink>
                            <NavLink
                                href="https://material-tailwind.com/documentation/quick-start?ref=mtk"
                                rel="noreferrer"
                                ripple="light"
                            >
                                <Icon name="people" size="2xl" />
                                &nbsp;Contacto
                            </NavLink>
                            <NavLink
                                href="https://material-tailwind.com/components?ref=mtk"
                                rel="noreferrer"
                                ripple="light"
                            >
                                <Icon name="article" size="2xl" />
                                &nbsp;Novedades
                            </NavLink>
                            <div className="text-white">
                                <Dropdown
                                    color="transparent"
                                    size="sm"
                                    buttonType="link"
                                    buttonText={
                                        <div className="py-2.5 font-medium flex items-center">
                                            <Icon
                                                name="health_and_safety"
                                                size="2xl"
                                                color="white"
                                            />
                                            <span className="ml-2">
                                                Protocolos
                                            </span>
                                        </div>
                                    }
                                    ripple="light"
                                >
                                    <Link to="/">
                                        <DropdownItem color="lightBlue">
                                            Registro ACTIVIDAD PROFESIONAL GUÍAS DE TURISMO 
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/profile">
                                        <DropdownItem color="lightBlue">
                                            Registro EXCURSIONES Y TOURS DE AGENCIAS DE VIAJES
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/login">
                                        <DropdownItem color="lightBlue">
                                            Registro para alojamientos
                                        </DropdownItem>
                                    </Link>
                                </Dropdown>
                            </div>
                        </div>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    );
}
