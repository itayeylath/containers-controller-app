import IdIcon from "../figma-pics/id-icon";
import LocationIcon from "../figma-pics/location-icon";
import ModelIcon from "../figma-pics/model-icon";
import OwnerIcon from "../figma-pics/owner-icon";
import QuantityIcon from "../figma-pics/quantity-icon";
import SzieIcon from "../figma-pics/size-icon";
import YearIcon from "../figma-pics/year-icon";
import { create2DArray } from "../helpers/add-form-func";
import "../styles/containers-page.scss";

interface UpdateFormProps {
  inputsNames: string[];
  handelSubmitUpdate: any;
  updateData: any;
}

const UpdateForm = (props: UpdateFormProps) => {
  const svgArr: any = [<IdIcon/>, <ModelIcon/>, <QuantityIcon/>
,<SzieIcon/>, <YearIcon/>,<LocationIcon/>,<OwnerIcon/>
];
const arr = create2DArray(props.inputsNames, svgArr,[]);
  return (

    <div className="add-form">
      <form onSubmit={props.handelSubmitUpdate}>
        {arr.map((element: string, index: number) => {
          return (
            <div className="add-row">
              <div className="add-icon">
              {element[1]}
              </div>
              <input
                className="add-input"
                key={index}
                name={element[0]}
                defaultValue={props.updateData[element[0]]}
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
