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

export default function DefaultNavbar() {
    const [openNavbar, setOpenNavbar] = useState(false);

    return (
        <Navbar color="blueGray" navbar>
            <NavbarContainer>
                <NavbarWrapper>                
                    <NavbarBrand>Institucional</NavbarBrand>                  
                    <NavbarToggler
                        onClick={() => setOpenNavbar(!openNavbar)}
                        color="white"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openNavbar}>
                    <Nav>
                        <div className="flex flex-col z-50 lg:flex-row lg:items-center">
                            <NavLink
                                href={`${process.env.REACT_APP_URL}/`}
                                rel="noreferrer"
                                ripple="light"
                            >
                                <Icon name="house" size="2xl" />
                            </NavLink>
                            <NavLink
                                href={`${process.env.REACT_APP_URL}/estadisticas`}
                                rel="noreferrer"
                                ripple="light"
                            >
                                <Icon name="query_stats" size="2xl" />
                                &nbsp;Estadisticas
                            </NavLink>
                            <NavLink
                                href={`${process.env.REACT_APP_URL}/contacto`}
                                rel="noreferrer"
                                ripple="light"
                            >
                                <Icon name="people" size="2xl" />
                                &nbsp;Contacto
                            </NavLink>
                            <NavLink
                                href={`${process.env.REACT_APP_URL}/novedades`}
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
                                    <Link to="/registro-guias" style={{textDecoration:"none"}}>
                                        <DropdownItem color="lightBlue">
                                            Registro ACTIVIDAD PROFESIONAL GUÍAS DE TURISMO 
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/registro-agencias" style={{textDecoration:"none"}}>
                                        <DropdownItem color="lightBlue">
                                            Registro EXCURSIONES Y TOURS DE AGENCIAS DE VIAJES
                                        </DropdownItem>
                                    </Link>
                                    <a href="http://protocoloturismo.sanluis.gov.ar/" style={{textDecoration:"none"}}>
                                        <DropdownItem color="lightBlue">
                                            Registro para alojamientos
                                        </DropdownItem>
                                    </a>
                                </Dropdown>
                            </div>
                        </div>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    );
}
