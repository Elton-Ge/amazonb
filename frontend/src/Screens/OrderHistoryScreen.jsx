import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";
import { orderListMine } from "../redux/actions/orderActions";

function OrderHistoryScreen(props) {
  const { loading, error, orders } = useSelector(
    (state) => state.orderListMineReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(orderListMine());
  }, [dispatch]);

  return (
    <div>
      <h1>Order History</h1>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant={"danger"} children={error} />
      ) : (
        <table className={"table"}>
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              return (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>${order.totalPrice.toFixed(2)}</td>
                  <td>{order.isPaid ? order.paidAt.substring(0, 10) : "No"}</td>
                  <td>
                    {order.isDelivered
                      ? order.deliveredAt.substring(0, 10)
                      : "No"}
                  </td>
                  <td>
                    {
                      <button
                        type={"button"}
                        className={"small"}
                        onClick={() => {
                          props.history.push(`/order/${order._id}`);
                        }}
                      >
                        Details
                      </button>
                    }
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default OrderHistoryScreen;
