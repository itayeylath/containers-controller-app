import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AddForm from "./add-form-component";
import Table from "./table-componnent";
import ToolsBar from "./tools-bar-componnent";
import UpdateForm from "./update-form-component";
import { LocationHistory } from "../types/locations-history-types";
import { reqAddLocationsHistory, reqDeleteLocationHistory, reqGetLocationsHistory, reqUpdateLocationHistory } from "../helpers/locations-history-server-req";

const LocationsHistoryTable = () => {
  // Constant variables.
  const tableHeadlist: string[] = [
    "id",
    "arrival date",
    "departure date",
    "location id",
    "container id",
  ];
  const formInputList: string[] = [
    "location_history_id",
    "arrival_date",
    "departure_date",
    "location_id",
    "container_id",
  ];
  // Create states and usestets.
  const [data, setData] = useState<LocationHistory[] | []>([]);
  const [isDelete, setIsDelete] = useState<boolean>(true);
  const [isAdd, setIsAdd] = useState<boolean>(true);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [addButton, setAddButton] = useState<boolean>(false);
  const [updatebutton, setUpdatebutton] = useState<boolean>(false);
  const [updateData, setUpdateData] = useState<LocationHistory | undefined>();

  // Request from the server for initial data and when delete/add/update happen.
  useEffect(() => {
    reqGetLocationsHistory().then((result) => {
      setData(result);
      console.log(data);
      
    });
  }, [isDelete, isAdd, isUpdate]);
  // Submit form data to server for add.
  const handelSubmitAdd = async (event: any) => {
    event.preventDefault();
    const data = new FormData(event.target);
    // Server request.
    await reqAddLocationsHistory(Object.fromEntries(data) as unknown as LocationHistory);
    setIsAdd(!isAdd);
  };
  // Submit form data to server for update.
  const handelSubmitUpdate = async (event: any) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    // Server request.
    await reqUpdateLocationHistory(data as unknown as LocationHistory);
    setIsUpdate(!isUpdate);
  };
  // Click on update button.
  const handelButtonUpdate = async (element: LocationHistory) => {
    setUpdateData(element);
    setUpdatebutton(!updatebutton);
    setAddButton(false);
  };
  // Click on delete button.
  const handelButtonDelete = async (id: number) => {
    // Server request.
    await reqDeleteLocationHistory(id);
    setIsDelete(!isDelete);
  };
  // Click on add button.
  const handelButtonAdd = () => {
    setAddButton(!addButton);
    setUpdatebutton(false);
  };

  return (
    <div className="Main">
      <h2>Location history table</h2>
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

export default LocationsHistoryTable;
