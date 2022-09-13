import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { idText } from "typescript";
import {
  reqGetContainers,
  reqAddContainer,
  reqDeleteContainer,
  reqUpdateContainer,
} from "../helpers/containers-server-req";
import { Container } from "../types/containers-table-types";
import AddForm from "./add-form-component";
import Table from "./table-componnent";
import ToolsBar from "./tools-bar-componnent";
import UpdateForm from "./update-form-component";
import UpdataForm from "./update-form-component";

const ContainerTable = () => {
  // Create states and usestets.
  const [data, setData] = useState<Container[] | []>([]);
  const [isDelete, setIsDelete] = useState<boolean>(true);
  const [isAdd, setIsAdd] = useState<boolean>(true);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [addButton, setAddButton] = useState<boolean>(false);
  const [updatebutton, setUpdatebutton] = useState<boolean>(false);
  const [updateData, setUpdateData] = useState<Container | undefined>();

  // Request from the server for initial data and when delete/add/update happen.
  useEffect(() => {
    reqGetContainers().then((result) => {
      setData(result);
    });
  }, [isDelete, isAdd, isUpdate]);

  // Submit form data to server for add.
  const handelSubmitAdd = async (event: any) => {
    event.preventDefault();
    const data = new FormData(event.target);
    // Server request.
    await reqAddContainer(Object.fromEntries(data) as unknown as Container);
    setIsAdd(!isAdd);
  };
  // Submit form data to server for update.
  const handelSubmitUpdate = async (event: any) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    // Server request.
    await reqUpdateContainer(data as unknown as Container);
    setIsUpdate(!isUpdate);
  };
  // Click on update button.
  const handelButtonUpdate = async (element: Container) => {
    setUpdateData(element);
    setUpdatebutton(!updatebutton);
    setAddButton(false);
  };
  // Click on delete button.
  const handelButtonDelete = async (id: number) => {
    // Server request.
    await reqDeleteContainer(id);
    setIsDelete(!isDelete);
  };

  // Click on add button.
  const handelButtonAdd = () => {
    setAddButton(!addButton);
    setUpdatebutton(false);
  };
  
  const tableHeadlist: string[] = ["id", "model", "quantity", "size", "manufacturing year", "location id", "owner id"];
  const formInputList: string[] = ["container_id", "model", "quantity", "size", "manufacturing_year", "location_id", "owner_id"];

  return (
    <div>
      <h2>containers table</h2>
      <ToolsBar  handelButtonAdd={handelButtonAdd}/>
      {addButton && <AddForm inputsNames={formInputList} placeholdersNames={tableHeadlist} handelSubmitAdd={handelSubmitAdd}/>}
      {updatebutton && <UpdateForm inputsNames={formInputList} handelSubmitUpdate={handelSubmitUpdate} updateData={updateData}/>}
      <Table head={tableHeadlist} body={data} handelButtonDelete={handelButtonDelete} handelButtonUpdate={handelButtonUpdate} />
      <Outlet context={data} />
    </div>
  );
};

export default ContainerTable;
