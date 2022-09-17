import { constants } from "buffer";
import IdIcon from "../figma-pics/id-icon";
import LocationIcon from "../figma-pics/location-icon";
import ModelIcon from "../figma-pics/model-icon";
import OwnerIcon from "../figma-pics/owner-icon";
import QuantityIcon from "../figma-pics/quantity-icon";
import SzieIcon from "../figma-pics/size-icon";
import YearIcon from "../figma-pics/year-icon";
import { create2DArray } from "../helpers/add-form-func";
import "../styles/containers-page.scss";

interface AddFormProps {
  inputsNames: string[];
  placeholdersNames: string[];
  handelSubmitAdd: any;
}

const svgArr: any = [<IdIcon/>, <ModelIcon/>, <QuantityIcon/>
,<SzieIcon/>, <YearIcon/>,<LocationIcon/>,<OwnerIcon/>
];

const AddForm = (props: AddFormProps) => {
 const arr = create2DArray(props.inputsNames, props.placeholdersNames,svgArr);
  return (
    <div className="add-form">
      <form onSubmit={props.handelSubmitAdd}>
        {arr.map((element: any, index: number) => {
          console.log(element[2]);
          
          return (
            <div className="add-row">
              <div className="add-icon">
              {element[2]}
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
