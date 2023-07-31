import React, { useEffect, useState } from "react";
import "./ProceedBook.scss";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ticketServ } from "../../services/ticketServices";
import { message } from "antd";

const ProceedBook = () => {
  const { ticketList } = useSelector((state) => state.ticket);
  const { seatList } = useSelector((state) => state.ticket);
  const { scheduleId } = useParams();
  const [messageApi, contextHolder] = message.useMessage();
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (ticketList.length > 0) {
      const priceList = ticketList.map((ticket) => ticket.giaVe);
      const totalPrice = priceList.reduce((total, currentPrice) => {
        return total + currentPrice;
      }, 0);

      setTotalPrice(totalPrice);
    } else {
      setTotalPrice(0);
    }
  }, [ticketList]);

  const bookTicketHandler = () => {
    if (ticketList.length > 0) {
      ticketServ
        .bookTicket({
          maLichChieu: scheduleId,
          danhSachVe: ticketList,
        })
        .then((res) => {
          messageApi.open({
            type: "success",
            content: "Đặt vé thành công",
          });

          setTimeout(() => {
            navigate("/");
          }, 1000);
        })
        .catch((err) => {
          console.log(err);
          messageApi.open({
            type: "error",
            content: "Đặt vé thất bại. Vui lòng kiểm tra lại.",
          });
        });
    } else {
      messageApi.open({
        type: "error",
        content: "Vui lòng chọn chỗ ngồi.",
      });
    }
  };

  return (
    <>
      {contextHolder}
      <section className="proceed-book pb-20">
        <div className="max-w-screen-xl px-4 mx-auto">
          <div className="proceed-book__bg rounded-lg overflow-hidden">
            <div className="proceed-book__wrapper grid grid-cols-3 ">
              <div className="proceed-book__choosed-seat-box flex items-center">
                <div className="">
                  <p className="proceed-book__choosed-seat-title">
                    {seatList ? "Bạn đã chọn ghế" : "Bạn chưa chọn chế"}
                  </p>
                  {seatList && (
                    <p className="proceed-book__choosed-seats break-words">
                      {seatList.join(", ")}
                    </p>
                  )}
                </div>
              </div>
              <div className="proceed-book__total-price-box flex justify-center items-center text-center">
                <div>
                  <p className="proceed-book__total-price-title">Tổng tiền</p>
                  <p className="proceed-book__total-price">
                    {`${totalPrice.toLocaleString()}đ`}
                  </p>
                </div>
              </div>
              <div className="flex justify-end items-center">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-base px-5 py-3 text-center"
                  onClick={bookTicketHandler}
                >
                  Đặt vé
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProceedBook;
