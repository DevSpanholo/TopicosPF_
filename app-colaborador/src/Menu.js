import React from "react";
import { useNavigate } from "react-router-dom";
import { Menubar } from "primereact/menubar";
function Menu() {
  let navigate = useNavigate();
  const items = [
    {
        label: 'Home', icon: 'pi pi-fw pi-home',
        command: () => { navigate("/") }
    },
    {
        label: 'Cadastros', icon: 'pi pi-fw pi-plus',
        items: [
            {
                label: 'Atividade', icon: 'pi pi-fw pi-user',
                command: () => { navigate("/atividade") }
            },
            {
                label: 'Colaboradores', icon: 'pi pi-fw pi-user',
                command: () => { navigate("/colaboradores") }
            },
            
            {
                label: 'Solicitante', icon: 'pi pi-fw pi-user',
                command: () => { navigate("/solicitantes") }
            },
            {
                label: 'Requisicao', icon: 'pi pi-fw pi-user',
                command: () => { navigate("/requisicao") }
            },
            {
                label: 'TipoRequisicao', icon: 'pi pi-fw pi-user',
                command: () => { navigate("/tipoRequisicao") }
            }
        ]
    },
    {
      label: "Sair",
      icon: "pi pi-fw pi-power-off",
    },
  ];
  return <Menubar model={items} />;
}
export default Menu;
