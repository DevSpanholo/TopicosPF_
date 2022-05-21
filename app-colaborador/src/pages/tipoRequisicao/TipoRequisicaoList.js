import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

const TipoRequisicaoList = (props) => {
  return (
    <div className="App">
      <h4>Listagem de Tipo de Requisições</h4>

      <p></p>

      <Button
        label="Inserir"
        className="btn btn-info btn-sm"
        onClick={props.inserir}
      />
      <Button
        label="Editar"
        className="btn btn-success btn-sm"
        onClick={() => props.editar()}
        disabled={!props.tipoRequisicao._id}
      />
      <Button
        label="Excluir"
        className="btn btn-warning btn-sm"
        onClick={() => props.excluir()}
        disabled={!props.tipoRequisicao._id}
      />

      <p></p>

      <DataTable
        value={props.tipoRequisicoes}
        paginator
        responsiveLayout="scroll"
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        currentPageReportTemplate="Mostrando de {first} até {last} de {totalRecords}"
        rows={5}
        rowsPerPageOptions={[5, 10, 50]}
        emptyMessage="Nenhum Tipo Requisição encontrado."
        selectionMode="single"
        selection={props.tipoRequisicao}
        onSelectionChange={(e) => props.setTipoRequisicao(e.value)}
        dataKey="_id"
      >
        <Column field="_id" header="ID" sortable></Column>
        <Column field="descricao" header="Descrição" sortable filter></Column>
      </DataTable>
    </div>
  );
};
export default TipoRequisicaoList;
