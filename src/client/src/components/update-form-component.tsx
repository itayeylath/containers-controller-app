interface UpdateFormProps {
  inputsNames: string[];
  handelSubmitUpdate: any;
  updateData: any;
}

const UpdateForm = (props: UpdateFormProps) => {
  return (
    <div>
      <form onSubmit={props.handelSubmitUpdate}>
        {props.inputsNames.map((element: string, index: number) => {
          return (
            <input key={index} name={element} defaultValue={props.updateData[element]} />
          );
        })}
        <input type="submit" value="Confirm"></input>
      </form>
    </div>
  );
};
export default UpdateForm;
