import IdIcon from "../figma-pics/id-icon";
import "../styles/containers-page.scss";

interface UpdateFormProps {
  inputsNames: string[];
  handelSubmitUpdate: any;
  updateData: any;
}

const UpdateForm = (props: UpdateFormProps) => {
  return (
    <div className="add-form">
      <form onSubmit={props.handelSubmitUpdate}>
        {props.inputsNames.map((element: string, index: number) => {
          return (
            <div className="add-row">
              <div className="add-icon">
                <IdIcon />
              </div>
              <input
                className="add-input"
                key={index}
                name={element}
                defaultValue={props.updateData[element]}
              />
            </div>
          );
        })}
        <input className="btn-confirm" type="submit" value="Confirm"></input>
      </form>
    </div>
  );
};
export default UpdateForm;
