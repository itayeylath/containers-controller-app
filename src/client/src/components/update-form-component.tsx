interface UpdateFormProps {
  inputs: string[];
  handelSubmitUpdate: any;
  updateData: any;
}

const UpdateForm = (props: UpdateFormProps) => {
  return (
    <div>
      <form onSubmit={props.handelSubmitUpdate}>
        {props.inputs.map((element: any) => {
          return (
            <input name={element} defaultValue={props.updateData[element]} />
          );
        })}
        <input type="submit" value="Confirm"></input>
      </form>
    </div>
  );
};
export default UpdateForm;
