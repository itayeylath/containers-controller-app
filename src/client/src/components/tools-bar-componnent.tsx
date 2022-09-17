import Edit from "../figma-pics/edit-icon";
import arrow from "../figma-pics/arrow.png";

interface ToolsBarProps {
  handelButtonAdd: any;
}

const ToolsBar = (props: ToolsBarProps) => {
  return (
    
      <button className="add-btn-container" onClick={props.handelButtonAdd}>
        <Edit />
        <p className="add-btn-text">EDIT TABLE</p>
        <img src={arrow} />
      </button>
    
  );
};
export default ToolsBar;
