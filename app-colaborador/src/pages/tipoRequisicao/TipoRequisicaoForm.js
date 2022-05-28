import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";

const TipoRequisicaoForm = (props) => {
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    props.setTipoRequisicao({ ...props.tipoRequisicao, [id]: value });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    //Validar senha e contra senha
    props.salvar();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="card">
          <h5>Cadastro de Requisições</h5>
          <div className="p-fluid grid formgrid">
            <div className="field col-12 md:col-4">
              <label htmlFor="descricao">Descrição</label>
              <InputText
                id="descricao"
                defaultValue={props.tipoRequisicao.descricao}
                {...register("descricao", {
                  required: {
                    value: true,
                    message: "o Campo descrição é obrigatório!",
                  },
                  minLength: {
                    value: 14,
                    message: "Descrição deve ter pelo menos 14 caracteres",
                  },
                  maxLength: {
                    value: 90,
                    message: "Descrição não deve passar de 90 caracteres",
                  },
                })}
                onChange={handleInputChange}
              />
              {errors.descricao && (
                <span style={{ color: "red" }}>{errors.descricao.message}</span>
              )}
            </div>
          </div>
        </div>
        <div>
          <Button
            label="Salvar"
            icon="pi pi-save"
            type="submit"
            className="p-button-text"
          />
          <Button
            label="Cancelar"
            icon="pi pi-times-circle"
            onClick={props.cancelar}
            className="p-button-text"
          />
        </div>
      </div>
    </form>
  );
};
export default TipoRequisicaoForm;
