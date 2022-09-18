import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AddForm from "./add-form-component";
import Table from "./table-componnent";
import ToolsBar from "./tools-bar-componnent";
import UpdateForm from "./update-form-component";
import { LocationHistory } from "../types/locations-history-types";
import { reqAddLocationsHistory, reqDeleteLocationHistory, reqGetLocationsHistory, reqUpdateLocationHistory } from "../helpers/locations-history-server-req";
import "../styles/containers-page.scss";

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
    <div className="main-table-container">

      <div className="main-table-header">
        <p className="main-table-header-text">Locations history</p>
      </div>

      <div className="main-table-text">
        <h3 className="">Total locations history</h3>
        <p className="">Find all of your locations history data.</p>
      </div>

      <ToolsBar handelButtonAdd={handelButtonAdd} />
      
        <Table
          head={tableHeadlist}
          body={data}
          elementTypes={formInputList}
          handelButtonDelete={handelButtonDelete}
          handelButtonUpdate={handelButtonUpdate}
        />
     

      <div className="hidden-divs">
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
      <Outlet context={data} />
    </div>
  );
};

export default LocationsHistoryTable;
