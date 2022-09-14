import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AddForm from "./add-form-component";
import Table from "./table-componnent";
import ToolsBar from "./tools-bar-componnent";
import UpdateForm from "./update-form-component";
import {
  reqAddOwner,
  reqDeleteOwner,
  reqGetOwners,
  reqUpdateOwner,
} from "../helpers/owners-server-req";
import { Owner } from "../types/owners-types";

const OwnersTable = () => {
  // Constant variables.
  const tableHeadlist: string[] = ["id", "name", "email", "phone number"];
  const formInputList: string[] = ["owner_id", "name", "email", "phone_number"];
  // Create states and usestets.
  const [data, setData] = useState<Owner[] | []>([]);
  const [isDelete, setIsDelete] = useState<boolean>(true);
  const [isAdd, setIsAdd] = useState<boolean>(true);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [addButton, setAddButton] = useState<boolean>(false);
  const [updatebutton, setUpdatebutton] = useState<boolean>(false);
  const [updateData, setUpdateData] = useState<Owner | undefined>();
  // Request from the server for initial data and when delete/add/update happen.
  useEffect(() => {
    reqGetOwners().then((result) => {
      setData(result);
    });
  }, [isDelete, isAdd, isUpdate]);
  // Submit form data to server for add.
  const handelSubmitAdd = async (event: any) => {
    event.preventDefault();
    const data = new FormData(event.target);
    // Server request.
    await reqAddOwner(Object.fromEntries(data) as unknown as Owner);
    setIsAdd(!isAdd);
  };
  // Submit form data to server for update.
  const handelSubmitUpdate = async (event: any) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    // Server request.
    await reqUpdateOwner(data as unknown as Owner);
    setIsUpdate(!isUpdate);
  };
  // Click on update button.
  const handelButtonUpdate = async (element: Owner) => {
    setUpdateData(element);
    setUpdatebutton(!updatebutton);
    setAddButton(false);
  };
  // Click on delete button.
  const handelButtonDelete = async (id: number) => {
    // Server request.
    await reqDeleteOwner(id);
    setIsDelete(!isDelete);
  };
  // Click on add button.
  const handelButtonAdd = () => {
    setAddButton(!addButton);
    setUpdatebutton(false);
  };

  return (
    <div className="Main">
      <h2>Owners table</h2>
      <div className="Table">
        <div className="ToolsBar">
          <ToolsBar handelButtonAdd={handelButtonAdd} />
        </div>
        <div className="HiddenDivs">
          {addButton && (
            <AddForm
              inputsNames={formInputList}
              placeholdersNames={tableHeadlist}
              handelSubmitAdd={handelSubmitAdd}
            />
          )}
          {updatebutton && (
            <UpdateForm
              inputsNames={formInputList}
              handelSubmitUpdate={handelSubmitUpdate}
              updateData={updateData}
            />
          )}
        </div>
        <Table
          head={tableHeadlist}
          body={data}
          elementTypes={formInputList}
          handelButtonDelete={handelButtonDelete}
          handelButtonUpdate={handelButtonUpdate}
        />
      </div>
      <Outlet context={data} />
    </div>
  );
};

export default OwnersTable;
