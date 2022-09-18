import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AddForm from "./add-form-component";
import Table from "./table-componnent";
import ToolsBar from "./tools-bar-componnent";
import UpdateForm from "./update-form-component";
import { Location } from "../types/locations-types";
import {
  reqAddLocation,
  reqDeleteLocation,
  reqGetLocations,
  reqUpdateLocation,
} from "../helpers/locations-server-req";
import "../styles/containers-page.scss";

const LocationsTable = () => {
  // Constant variables.
  // location_id | lat | lon | port_name | nearest_city

  const tableHeadlist: string[] = [
    "id",
    "lat",
    "lon",
    "port name",
    "nearest city",
  ];
  const formInputList: string[] = [
    "location_id",
    "lat",
    "lon",
    "port_name",
    "nearest_city",
  ];
  // Create states and usestets.
  const [data, setData] = useState<Location[] | []>([]);
  const [isDelete, setIsDelete] = useState<boolean>(true);
  const [isAdd, setIsAdd] = useState<boolean>(true);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [addButton, setAddButton] = useState<boolean>(false);
  const [updatebutton, setUpdatebutton] = useState<boolean>(false);
  const [updateData, setUpdateData] = useState<Location | undefined>();

  // Request from the server for initial data and when delete/add/update happen.
  useEffect(() => {
    reqGetLocations().then((result) => {
      setData(result);
    });
  }, [isDelete, isAdd, isUpdate]);

  // Submit form data to server for add.
  const handelSubmitAdd = async (event: any) => {
    event.preventDefault();
    const data = new FormData(event.target);
    // Server request.
    await reqAddLocation(Object.fromEntries(data) as unknown as Location);
    setIsAdd(!isAdd);
  };
  // Submit form data to server for update.
  const handelSubmitUpdate = async (event: any) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    // Server request.
    await reqUpdateLocation(data as unknown as Location);
    setIsUpdate(!isUpdate);
  };
  // Click on update button.
  const handelButtonUpdate = async (element: Location) => {
    setUpdateData(element);
    setUpdatebutton(!updatebutton);
    setAddButton(false);
  };
  // Click on delete button.
  const handelButtonDelete = async (id: number) => {
    // Server request.
    await reqDeleteLocation(id);
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
        <p className="main-table-header-text">Locations</p>
      </div>

      <div className="main-table-text">
        <h3 className="">Total locations</h3>
        <p className="">Find all of your locations data.</p>
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

export default LocationsTable;
