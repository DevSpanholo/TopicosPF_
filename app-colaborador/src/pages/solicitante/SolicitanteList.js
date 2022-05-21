import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Paginator } from "primereact/paginator";
import { Button } from "primereact/button";
const SolicitanteList = (props) => {
  const imageBodyTemplate = (rowData) => {
    return (
      <>
        <button
          onClick={() => props.editar(rowData._id)}
          className="btn btn-warning btn-sm"
        >
          Editar
        </button>
        <button
          onClick={() => props.excluir(rowData._id)}
          className="btn btn-danger btn-sm"
        >
          Excluir
        </button>
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
        value={props.solicitantes}
        paginator
        responsiveLayout="scroll"
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink  NextPageLink LastPageLink RowsPerPageDropdown"
        currentPageReportTemplate="Mostrando de {first} até {last} de {totalRecords}"
        rows={5}
        rowsPerPageOptions={[5, 10, 20, 50]}
        emptyMessage="nenhum colaborador"
        selectionMode="single"
        selection={props.solicitante}
        onSelectionChange={(e) => props.setSolicitante(e.value)}
        dataKey="_id"
      >
        <Column field="_id" header="ID" sortable></Column>
        <Column field="nome" header="Nome" sortable filter></Column>
        <Column field="email" header="email" sortable filter></Column>
        <Column header="Operações" body={imageBodyTemplate}></Column>
      </DataTable>
    </div>
  );
};
export default SolicitanteList;
