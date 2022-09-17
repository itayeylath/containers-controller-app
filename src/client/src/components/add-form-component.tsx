import IdIcon from "../figma-pics/id-icon";
import { create2DArray } from "../helpers/add-form-func";
import "../styles/containers-page.scss";

interface AddFormProps {
  inputsNames: string[];
  placeholdersNames: string[];
  handelSubmitAdd: any;
}

const AddForm = (props: AddFormProps) => {
 const arr = create2DArray(props.inputsNames, props.placeholdersNames);
  return (
    <div className="add-form">
      <form onSubmit={props.handelSubmitAdd}>
        {arr.map((element: any, index: number) => {
          return (
            <div className="add-row">
              <div className="add-icon">
                <IdIcon/>
              </div>
              <input className="add-input" key={index} name={element[0]} placeholder={element[1]}/>
            </div>
          )
        })}
        <input className="btn-confirm" type="submit" value="Confirm"></input>
      </form>
    </div>
  );
};
export default AddForm;
