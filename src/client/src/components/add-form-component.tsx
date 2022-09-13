import { create2DArray } from "../helpers/add-form-func";

interface AddFormProps {
  inputsNames: string[];
  placeholdersNames: string[];
  handelSubmitAdd: any;
}

const AddForm = (props: AddFormProps) => {
 const arr = create2DArray(props.inputsNames, props.placeholdersNames);
  return (
    <div>
      <form onSubmit={props.handelSubmitAdd}>
        {arr.map((element: any) => {
          return <input name={element[0]} placeholder={element[1]} />;
        })}
        <input type="submit" value="Confirm"></input>
      </form>
    </div>
  );
};
export default AddForm;
