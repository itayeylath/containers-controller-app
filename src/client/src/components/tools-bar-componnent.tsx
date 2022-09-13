interface ToolsBarProps {
    handelButtonAdd: any;
  }
  
  const ToolsBar = (props: ToolsBarProps) => {
    return (
      <div>
        <h3>Tools</h3>
        <button onClick={props.handelButtonAdd}>Add</button>
      </div>
    );
  };
  export default ToolsBar;
  