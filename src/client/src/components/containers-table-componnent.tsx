import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  reqGetContainers,
  reqAddContainer,
  reqDeleteContainer,
  reqUpdateContainer,
} from "../helpers/containers-server-req";
import { Container } from "../types/containers-table-types";

const SockTable = () => {
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
  // Create tools div form.
  const ToolsDiv = () => {
    return (
      <div>
        <h3>Tools</h3>
        <button onClick={handelButtonAdd}>Add</button>
      </div>
    );
  };
 // Create add div form.
 // func handle submit inside the componnent
  const AddDiv = () => {
    return (
      <div>
        <form onSubmit={handelSubmitAdd}>
          <input name="container_id" placeholder="id" />
          <input name="model" placeholder="Model" />
          <input name="quantity" placeholder="quantity" />
          <input name="size" placeholder="size" />
          <input name="manufacturing_year" placeholder="manufacturing year" />
          <input name="location_id" placeholder="location id" />
          <input name="owner_id" placeholder="owner id" />
          <input type="submit" value="Confirm"></input>
        </form>
      </div>
    );
  };
  // Create update div form.
  // todo chenge to "UpdateForm"
  const UpdateDiv = () => {
    return (
      <div>
        <form onSubmit={handelSubmitUpdate}>
          <input name="container_id" value={updateData!.container_id.toString()} />
          <input name="model" defaultValue={updateData!.model} />
          <input
            name="quantity"
            defaultValue={updateData!.quantity.toString()}
          />
          <input name="size" defaultValue={updateData!.size.toString()} />
          <input
            name="manufacturing_year"
            defaultValue={updateData!.manufacturing_year.toString()}
          />
          <input
            name="location_id"
            defaultValue={updateData!.location_id.toString()}
          />
          <input
            name="owner_id"
            defaultValue={updateData!.owner_id.toString()}
          />
          <input type="submit" value="Confirm"></input>
        </form>
      </div>
    );
  };
  // Create table head content.
  const TableHead = () => {
    return(
    <thead>
      <tr>
        <th>id</th>
        <th>model</th>
        <th>quantity</th>
        <th>size</th>
        <th>manufacturing year</th>
        <th>location id</th>
        <th>owner id</th>
      </tr>
    </thead>
)};
  // Create table body content.
  const TableBody = () => {
    return (
      <tbody>
        {data.map((element: Container) => {
          const values = Object.values(element) 
          return (
            <tr key={element.container_id}>
              <td>
                <NavLink to={`/socks/${element.container_id}`} key={element.container_id}>
                  {element.container_id}
                </NavLink>
              </td>
              <td>{element.model}</td>
              <td>{element.quantity}</td>
              <td>{element.size}</td>
              <td>{element.manufacturing_year}</td>
              <td>{element.location_id}</td>
              <td>{element.owner_id}</td>
              <td>
                <button
                  onClick={() => {
                    handelButtonDelete(element.container_id);
                  }}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    handelButtonUpdate(element);
                  }}
                >
                  Update
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  };

  return (
    <div>
      <h2>Socks table</h2>
      {<ToolsDiv/>}
      {addButton && <AddDiv />}
      {updatebutton && <UpdateDiv />}
      <table>
        {<TableHead/>}
        {<TableBody/>}
      </table>
      <Outlet context={data} />
    </div>
  );
};

export default SockTable;
