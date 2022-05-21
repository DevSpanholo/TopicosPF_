import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from 'primereact/button';


const ColaboradorList = (props) => {
  const operacoesBodyTemplate = (rowData) => {
    return (
      <>
        <Button label="Editar" onClick={() => props.editar(rowData._id)} className="p-button-warning"/>
        
        <Button label="Excluir" onClick={() => props.excluir(rowData._id)} className="p-button-danger"/>

      </>
    );
  };
  return (
    <div className="App">
      <h4>Listagem de Colaboradores</h4>
      <button
        className="btn btn-primary btn-sm"
        onClick={props.onClickAtualizar}
      >
        Atualizar Lista
      </button>
      <button className="btn btn-success btn-sm" onClick={props.inserir}>
        Inserir
      </button>

      <DataTable
        value={props.colaboradores}
        paginator
        responsiveLayout="scroll"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown CurrentPageReport"
        currentPageReportTemplate="Mostrando de {first} até {last} de {totalRecords}"
        rows={5}
        rowsPerPageOptions={[5, 10, 20, 50]}
        emptyMessage="Nenhum valor encontrado!"

        selectionMode="single" 
        selection={props.colaborador} 
        onSelectionChange={e => props.setColaborador(e.value)} 
        dataKey="_id"
      >
        <Column field="_id" header="Id" sortable></Column>
        <Column field="nome" header="Nome" sortable filter></Column>
        <Column field="email" header="Email" sortable filter></Column>
        <Column header="Operações" body={operacoesBodyTemplate}></Column>
      </DataTable>
    </div>
  );
};
export default ColaboradorList;
